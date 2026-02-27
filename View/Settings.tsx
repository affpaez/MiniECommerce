import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function Settings() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const SettingItem = ({ icon, title, value, isSwitch, onValueChange }: any) => (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <AntDesign name={icon} size={20} color="#0f766e" style={styles.icon} />
        <Text style={styles.itemText}>{title}</Text>
      </View>
      {isSwitch ? (
        <Switch 
          value={value} 
          onValueChange={onValueChange}
          trackColor={{ false: "#cbd5e1", true: "#0f766e" }}
        />
      ) : (
        <AntDesign name="right" size={16} color="#94a3b8" />
      )}
    </View>
  );

  return (
    <View style={styles.container}>

      <Text style={styles.sectionTitle}>Cuenta</Text>
      <View style={styles.card}>
        <TouchableOpacity onPress={() => alert('Editar Perfil')}>
          <SettingItem icon="user" title="Editar Información" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert('Cambiar Contraseña')}>
          <SettingItem icon="lock" title="Seguridad" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8fafc', padding: 16 },
  sectionTitle: { 
    fontSize: 14, 
    fontWeight: '700', 
    color: '#64748b', 
    marginBottom: 8, 
    marginTop: 16,
    textTransform: 'uppercase'
  },
  card: { 
    backgroundColor: '#fff', 
    borderRadius: 12, 
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#e2e8f0'
  },
  item: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f5f9'
  },
  itemLeft: { flexDirection: 'row', alignItems: 'center' },
  icon: { marginRight: 12 },
  itemText: { fontSize: 16, color: '#1e293b' },
  footer: { textAlign: 'center', color: '#94a3b8', marginTop: 32, fontSize: 12 }
});