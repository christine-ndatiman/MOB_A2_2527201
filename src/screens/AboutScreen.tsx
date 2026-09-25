import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import SectionCard from '../components/SectionCard';

export default function AboutScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>About NCPortfolio</Text>
      <SectionCard title="Student identity">
        <Text style={styles.line}>Student: NDATIMANA Christine</Text>
        <Text style={styles.line}>Registration number: 25/27201</Text>
        <Text style={styles.line}>Verification code: MOB-A2-7201</Text>
      </SectionCard>
      <SectionCard title="Release information">
        <Text style={styles.line}>Application: NCPortfolio</Text>
        <Text style={styles.line}>Version: 1.0.0</Text>
        <Text style={styles.line}>Course: SWE 3409 Mobile Application Development</Text>
        <Text style={styles.line}>Institution: INES Ruhengeri</Text>
        <Text style={styles.line}>Technology: React Native, Expo and TypeScript</Text>
      </SectionCard>
      <SectionCard title="Data use">
        <Text style={styles.line}>NCPortfolio stores editable profile information and selected local image references on the device for demonstration purposes. It does not store passwords, authentication tokens or sensitive personal records.</Text>
      </SectionCard>
      <Text style={styles.note}>Skills, biography, and project details still need Christine's genuine information.</Text>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: { padding: 18, paddingBottom: 30 },
  title: { fontSize: 25, fontWeight: '800', color: '#20372B', marginBottom: 16 },
  line: { color: '#425047', fontSize: 14, lineHeight: 22, marginBottom: 4 },
  note: { color: '#8B5A27', fontSize: 12, lineHeight: 18, marginTop: 4 }
});
