import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';

export default function SectionCard({ title, children, style }: {
  title?: string; children: React.ReactNode; style?: ViewStyle;
}) {
  return (
    <View style={[styles.card, style]}>
      {title ? <Text style={styles.title}>{title}</Text> : null}
      {children}
    </View>
  );
}
const styles = StyleSheet.create({
  card: { backgroundColor: '#FFFFFF', borderRadius: 16, padding: 16, marginBottom: 14, borderWidth: 1, borderColor: '#E6EAE5' },
  title: { fontSize: 16, fontWeight: '700', color: '#23352C', marginBottom: 8 }
});
