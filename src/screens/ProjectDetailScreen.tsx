import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import SectionCard from '../components/SectionCard';

type Props = NativeStackScreenProps<RootStackParamList, 'ProjectDetail'>;

export default function ProjectDetailScreen({ route }: Props) {
  const { project } = route.params;
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{project.title}</Text>
      <SectionCard title="Problem">
        <Text style={styles.body}>{project.problem}</Text>
      </SectionCard>
      <SectionCard title="My contribution">
        <Text style={styles.body}>{project.contribution}</Text>
      </SectionCard>
      <SectionCard title="Technology used">
        <Text style={styles.body}>{project.technology}</Text>
      </SectionCard>
      <SectionCard title="Outcome">
        <Text style={styles.body}>{project.outcome}</Text>
      </SectionCard>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: { padding: 18, paddingBottom: 30 },
  title: { fontSize: 25, lineHeight: 32, fontWeight: '800', color: '#20372B', marginBottom: 16 },
  body: { color: '#425047', fontSize: 15, lineHeight: 23 }
});
