import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { 
  DrawerContentScrollView, 
  DrawerItemList, 
  DrawerItem 
} from '@react-navigation/drawer';
import { AntDesign } from '@expo/vector-icons';

export default function CustomDrawerContent(props: any) {
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }}>
      <View style={styles.header}>
        <View style={styles.avatarContainer}>
          <Image 
            source={{ uri: 'https://static.wikia.nocookie.net/disney/images/4/44/Rayo_McQueen.png/revision/latest/thumbnail/width/360/height/360?cb=20140204155911&path-prefix=es' }} 
            style={styles.avatar} 
          />
        </View>
        <Text style={styles.userName}>Abraham Gonzalez</Text>
        <Text style={styles.userMatricula}>Matrícula: 375052</Text>
        <Text style={styles.uabcText}>UABC - Ingeniería</Text>
      </View>

      <View style={styles.itemsContainer}>
        <DrawerItemList {...props} />
      </View>

      <View style={styles.footer}>
        <DrawerItem 
          label="Cerrar Sesión" 
          onPress={() => props.navigation.navigate('Login')} 
          labelStyle={styles.logoutLabel}
          icon={() => <AntDesign name="logout" size={20} color="#ef4444" />}
        />
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 20,
    backgroundColor: '#f0fdfa',
    borderBottomWidth: 1,
    borderBottomColor: '#ccfbf1',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatarContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    overflow: 'hidden'
  },
  avatar: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e293b',
  },
  userMatricula: {
    fontSize: 14,
    color: '#64748b',
    marginTop: 2,
  },
  uabcText: {
    fontSize: 12,
    color: '#0f766e',
    fontWeight: '600',
    marginTop: 4,
  },
  itemsContainer: {
    flex: 1,
  },
  footer: {
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#f1f5f9',
    marginBottom: 20,
  },
  logoutLabel: {
    color: '#ef4444',
    fontWeight: 'bold',
    fontSize: 15,
  },
});