import React, { useEffect, useState } from 'react';
import { Alert, ScrollView, Text, TextInput, Pressable, Image, View, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useProfile } from '../context/ProfileContext';
import { Profile } from '../types';
import SectionCard from '../components/SectionCard';

type Errors = Partial<Record<'headline' | 'biography' | 'primarySkill' | 'availability', string>>;

export default function EditorScreen() {
  const { profile, saveProfile, resetProfile } = useProfile();
  const [draft, setDraft] = useState<Profile>(profile);
  const [errors, setErrors] = useState<Errors>({});
  const [saving, setSaving] = useState(false);

  useEffect(() => { setDraft(profile); }, [profile]);

  const update = (key: keyof Profile, value: string | null) => setDraft((old) => ({ ...old, [key]: value }));

  const validate = () => {
    const next: Errors = {};
    if (draft.headline.trim().length < 3) next.headline = 'Enter a headline of at least 3 characters.';
    if (draft.biography.trim().length < 20) next.biography = 'Biography must be at least 20 characters.';
    if (!draft.primarySkill.trim()) next.primarySkill = 'Enter your primary skill.';
    if (!draft.availability.trim()) next.availability = 'Enter your availability status.';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const chooseImage = async (useCamera: boolean) => {
    try {
      const permission = useCamera
        ? await ImagePicker.requestCameraPermissionsAsync()
        : await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (!permission.granted) {
        Alert.alert('Permission needed', 'Permission was not granted. You can still use the app without a profile photo.');
        return;
      }
      const result = useCamera
        ? await ImagePicker.launchCameraAsync({ mediaTypes: ['images'], allowsEditing: true, aspect: [1, 1], quality: 0.8 })
        : await ImagePicker.launchImageLibraryAsync({ mediaTypes: ['images'], allowsEditing: true, aspect: [1, 1], quality: 0.8 });
      if (!result.canceled && result.assets[0]?.uri) update('imageUri', result.assets[0].uri);
    } catch {
      Alert.alert('Could not open image picker', 'Please try again or continue without a photo.');
    }
  };

  const onSave = async () => {
    if (!validate()) return;
    setSaving(true);
    try {
      await saveProfile(draft);
      Alert.alert('Profile saved', 'Your profile has been saved on this device.');
    } catch {
      Alert.alert('Save failed', 'The profile could not be saved. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  const onReset = () => Alert.alert('Reset profile?', 'This restores the supplied identity and blank portfolio placeholders on this device.', [
    { text: 'Cancel', style: 'cancel' },
    { text: 'Reset', style: 'destructive', onPress: async () => { await resetProfile(); setErrors({}); } }
  ]);

  return (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
      <Text style={styles.title}>Edit your profile</Text>
      <Text style={styles.sub}>Changes are stored locally on this device.</Text>
      <SectionCard title="Profile photo">
        {draft.imageUri
          ? <Image source={{ uri: draft.imageUri }} style={styles.photo} />
          : <View style={styles.photoFallback}><Text style={styles.photoText}>No photo selected</Text></View>}
        <View style={styles.buttonRow}>
          <Pressable style={styles.smallButton} onPress={() => chooseImage(false)}><Text style={styles.smallButtonText}>Choose photo</Text></Pressable>
          <Pressable style={styles.smallButton} onPress={() => chooseImage(true)}><Text style={styles.smallButtonText}>Take photo</Text></Pressable>
        </View>
        {draft.imageUri ? <Pressable onPress={() => update('imageUri', null)}><Text style={styles.remove}>Remove photo</Text></Pressable> : null}
      </SectionCard>
      <SectionCard title="Editable information">
        <Text style={styles.label}>Full name (identity)</Text>
        <TextInput style={[styles.input, styles.readOnly]} value={draft.fullName} editable={false} accessibilityLabel="Full name" />
        <Text style={styles.label}>Professional headline</Text>
        <TextInput style={styles.input} value={draft.headline} onChangeText={(v) => update('headline', v)} maxLength={80} accessibilityLabel="Professional headline" />
        {errors.headline ? <Text style={styles.error}>{errors.headline}</Text> : null}
        <Text style={styles.label}>Short biography</Text>
        <TextInput style={[styles.input, styles.multiline]} value={draft.biography} onChangeText={(v) => update('biography', v)} multiline maxLength={500} accessibilityLabel="Short biography" />
        {errors.biography ? <Text style={styles.error}>{errors.biography}</Text> : null}
        <Text style={styles.label}>Primary skill</Text>
        <TextInput style={styles.input} value={draft.primarySkill} onChangeText={(v) => update('primarySkill', v)} maxLength={60} accessibilityLabel="Primary skill" />
        {errors.primarySkill ? <Text style={styles.error}>{errors.primarySkill}</Text> : null}
        <Text style={styles.label}>Availability status</Text>
        <TextInput style={styles.input} value={draft.availability} onChangeText={(v) => update('availability', v)} maxLength={80} accessibilityLabel="Availability status" />
        {errors.availability ? <Text style={styles.error}>{errors.availability}</Text> : null}
        <Pressable style={[styles.saveButton, saving && { opacity: 0.6 }]} disabled={saving} onPress={onSave}>
          <Text style={styles.saveText}>{saving ? 'Saving…' : 'Validate and save'}</Text>
        </Pressable>
        <Pressable style={styles.resetButton} onPress={onReset}><Text style={styles.resetText}>Reset profile</Text></Pressable>
      </SectionCard>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: { padding: 18, paddingBottom: 30 },
  title: { fontSize: 25, fontWeight: '800', color: '#20372B', marginBottom: 6 },
  sub: { color: '#68766D', fontSize: 14, marginBottom: 16 },
  photo: { width: 100, height: 100, borderRadius: 50, alignSelf: 'center', marginBottom: 12 },
  photoFallback: { height: 88, borderRadius: 12, backgroundColor: '#EEF2ED', alignItems: 'center', justifyContent: 'center', marginBottom: 12 },
  photoText: { color: '#68766D' },
  buttonRow: { flexDirection: 'row', gap: 8, justifyContent: 'center', flexWrap: 'wrap' },
  smallButton: { backgroundColor: '#E8F0E9', paddingVertical: 10, paddingHorizontal: 14, borderRadius: 10 },
  smallButtonText: { color: '#315C4B', fontWeight: '700' },
  remove: { color: '#A33B3B', textAlign: 'center', marginTop: 12, fontWeight: '600' },
  label: { color: '#33483A', fontWeight: '700', marginTop: 12, marginBottom: 6 },
  input: { borderWidth: 1, borderColor: '#CBD5CC', backgroundColor: '#FFFFFF', paddingHorizontal: 12, paddingVertical: 11, borderRadius: 10, color: '#263D30', fontSize: 15 },
  readOnly: { backgroundColor: '#F0F2EF', color: '#69756C' },
  multiline: { minHeight: 105, textAlignVertical: 'top' },
  error: { color: '#B3261E', fontSize: 12, marginTop: 5, lineHeight: 17 },
  saveButton: { backgroundColor: '#315C4B', borderRadius: 12, padding: 14, alignItems: 'center', marginTop: 18 },
  saveText: { color: '#FFFFFF', fontWeight: '800', fontSize: 15 },
  resetButton: { padding: 12, alignItems: 'center', marginTop: 4 },
  resetText: { color: '#8A4545', fontWeight: '700' }
});
