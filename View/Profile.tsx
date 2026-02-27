import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Profile() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f8fafc' }}>
      <View style={styles.container}>
        <Image 
          source={{ uri: 'https://static.wikia.nocookie.net/disney/images/4/44/Rayo_McQueen.png/revision/latest/thumbnail/width/360/height/360?cb=20140204155911&path-prefix=es' }} 
          style={styles.avatar} 
        />
        <Text style={styles.name}>Abraham Gonzalez</Text>
        <Text style={styles.info}>Matrícula: 375052</Text>
        <Text style={styles.info}>Carrera: Ingeniería en Software</Text>
        <Text style={styles.uabc}>UABC - FIAD</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', paddingTop: 50 },
  avatar: { width: 120, height: 120, borderRadius: 60, marginBottom: 20 },
  name: { fontSize: 24, fontWeight: 'bold', color: '#1e293b' },
  info: { fontSize: 16, color: '#64748b', marginTop: 5 },
  uabc: { marginTop: 30, fontWeight: 'bold', color: '#0f766e' }
});