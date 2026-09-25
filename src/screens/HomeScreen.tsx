import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import { useProfile } from '../context/ProfileContext';
import SectionCard from '../components/SectionCard';

export default function HomeScreen() {
  const { profile, ready } = useProfile();
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.name}>My name is NDATIMANA Christine.</Text>
      <Text style={styles.eyebrow}>PERSONAL PORTFOLIO</Text>
      <View style={styles.hero}>
        {profile.imageUri
          ? <Image source={{ uri: profile.imageUri }} style={styles.avatar} />
          : <View style={styles.avatarFallback}><Text style={styles.initials}>NC</Text></View>}
        <Text style={styles.headline}>{profile.headline}</Text>
        <Text style={styles.availability}>{profile.availability}</Text>
      </View>
      <SectionCard title="About me">
        <Text style={styles.body}>{profile.biography}</Text>
      </SectionCard>
      <SectionCard title="Current focus">
        <Text style={styles.body}>Primary skill: {profile.primarySkill}</Text>
      </SectionCard>
      <SectionCard title="Verification">
        <Text style={styles.body}>MOB-A2-7201</Text>
      </SectionCard>
      <Text style={styles.note}>{ready ? 'Profile loaded on this device.' : 'Loading saved profile…'}</Text>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: { padding: 18, paddingBottom: 30 },
  eyebrow: { fontSize: 11, letterSpacing: 2, color: '#527565', fontWeight: '800', marginBottom: 8 },
  name: { fontSize: 26, lineHeight: 34, fontWeight: '800', color: '#20372B', marginBottom: 18 },
  hero: { backgroundColor: '#E8F0E9', padding: 20, borderRadius: 20, alignItems: 'center', marginBottom: 16 },
  avatar: { width: 100, height: 100, borderRadius: 50, marginBottom: 12 },
  avatarFallback: { width: 100, height: 100, borderRadius: 50, backgroundColor: '#315C4B', alignItems: 'center', justifyContent: 'center', marginBottom: 12 },
  initials: { color: '#FFFFFF', fontSize: 30, fontWeight: '800' },
  headline: { color: '#20372B', fontSize: 18, fontWeight: '700', textAlign: 'center' },
  availability: { color: '#527565', marginTop: 7, textAlign: 'center' },
  body: { color: '#425047', fontSize: 15, lineHeight: 23, marginBottom: 4 },
  note: { textAlign: 'center', color: '#68766D', fontSize: 12, marginTop: 4 }
});
