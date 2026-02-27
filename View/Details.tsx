import React, { useLayoutEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import { useCart } from '../context/CarContext';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MainStackParamList } from '../App';

type Props = NativeStackScreenProps<MainStackParamList, 'Details'>;

export default function Details({ route, navigation }: Props) {
  const { productId, name, price } = route.params;
  const { addToCart } = useCart();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: name,
      headerShown: true,
      headerRight: () => (
        <View style={{ flexDirection: 'row', gap: 20, marginRight: 15 }}>
          <AntDesign 
            name="heart" 
            size={22} 
            color="#0f766e" 
            onPress={() => alert('Agregado a favoritos')} 
          />
          <AntDesign 
            name="share-alt"
            size={22} 
            color="#0f766e" 
            onPress={() => alert('Compartiendo producto...')} 
          />
        </View>
      ),
    });
  }, [navigation, name]);

  return (
    <SafeAreaView style={styles.safeArea}>
  <View style={styles.container}>
    <Text style={styles.title}>{name}</Text>
    <Text style={styles.productPrice}>{price}</Text> 
    
    <View style={styles.buttonContainer}>
      <Button 
        title="Añadir al Carrito" 
        color="#0f766e"
        onPress={() => {
          addToCart({ id: productId, name, price: price }); 
          navigation.navigate("HomeTabs", { screen: "Cart" }); 
        }} 
      />
    </View>
  </View>
</SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f8fafc'
  },
  container: { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: '#f8fafc' 
  },
  title: { 
    fontSize: 26, 
    fontWeight: 'bold', 
    color: '#1e293b',
    marginBottom: 8
  },
  productPrice: {
    fontSize: 20,
    fontWeight: '600',
    color: '#0f766e',
    marginBottom: 30
  },
  productId: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 30
  },
  buttonContainer: {
    width: '80%',
    borderRadius: 10,
    overflow: 'hidden'
  }
});