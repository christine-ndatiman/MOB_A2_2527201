import React from 'react';
import { ScrollView, Text, Pressable, StyleSheet } from 'react-native';
import { CompositeScreenProps } from '@react-navigation/native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { projects } from '../data';
import { RootStackParamList, TabParamList } from '../types';
import SectionCard from '../components/SectionCard';

type Props = CompositeScreenProps<
  BottomTabScreenProps<TabParamList, 'Projects'>,
  NativeStackScreenProps<RootStackParamList, 'MainTabs'>
>;

export default function ProjectsScreen({ navigation }: Props) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Selected projects</Text>
      <Text style={styles.sub}>These detail views are placeholders. Replace them with two genuine projects and Christine's actual contributions.</Text>
      {projects.map((project) => (
        <Pressable key={project.id} accessibilityRole="button" accessibilityLabel={`View ${project.title} details`}
          onPress={() => navigation.navigate('ProjectDetail', { project })}>
          <SectionCard>
            <Text style={styles.projectTitle}>{project.title}</Text>
            <Text style={styles.problem}>{project.problem}</Text>
            <Text style={styles.link}>View project details →</Text>
          </SectionCard>
        </Pressable>
      ))}
      <Text style={styles.warning}>Project information is not yet supplied. Do not present these placeholders as completed work.</Text>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: { padding: 18, paddingBottom: 30 },
  title: { fontSize: 25, fontWeight: '800', color: '#20372B', marginBottom: 6 },
  sub: { color: '#68766D', fontSize: 14, lineHeight: 21, marginBottom: 16 },
  projectTitle: { fontSize: 17, fontWeight: '800', color: '#263D30', marginBottom: 8 },
  problem: { color: '#5E6D63', fontSize: 14, lineHeight: 21 },
  link: { color: '#315C4B', fontWeight: '700', marginTop: 12 },
  warning: { color: '#8B5A27', fontSize: 12, lineHeight: 18, marginTop: 4 }
});
