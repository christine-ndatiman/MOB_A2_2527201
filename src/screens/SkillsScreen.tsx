import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import { skills, education } from '../data';
import SectionCard from '../components/SectionCard';

export default function SkillsScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.intro}>Skills and education</Text>
      <Text style={styles.sub}>Skill entries are placeholders until Christine confirms skills she can demonstrate.</Text>
      {skills.map((skill) => (
        <SectionCard key={skill.name}>
          <Text style={styles.skill}>{skill.name}</Text>
          <Text style={styles.detail}>{skill.detail}</Text>
        </SectionCard>
      ))}
      <Text style={styles.sectionTitle}>Education and training</Text>
      <Text style={styles.sub}>Only the supplied course and institution are confirmed. Add any other genuine education or training.</Text>
      {education.map((item) => (
        <View key={item.title} style={styles.timeline}>
          <View style={styles.dot} />
          <View style={styles.timelineText}>
            <Text style={styles.period}>{item.period}</Text>
            <Text style={styles.skill}>{item.title}</Text>
            <Text style={styles.detail}>{item.detail}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: { padding: 18, paddingBottom: 30 },
  intro: { fontSize: 25, fontWeight: '800', color: '#20372B', marginBottom: 6 },
  sub: { fontSize: 14, color: '#68766D', lineHeight: 21, marginBottom: 16 },
  skill: { fontSize: 16, fontWeight: '700', color: '#263D30', marginBottom: 4 },
  detail: { color: '#5E6D63', fontSize: 14, lineHeight: 20 },
  sectionTitle: { fontSize: 19, fontWeight: '800', color: '#20372B', marginVertical: 14 },
  timeline: { flexDirection: 'row', marginBottom: 18 },
  dot: { width: 12, height: 12, borderRadius: 6, backgroundColor: '#315C4B', marginTop: 5, marginRight: 12 },
  timelineText: { flex: 1 },
  period: { fontSize: 12, color: '#527565', fontWeight: '700', marginBottom: 4 }
});
