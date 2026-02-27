import React from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MainStackParamList } from '../App';
import { useCart } from '../context/CarContext';

type Props = NativeStackScreenProps<MainStackParamList, 'Checkout'>;

export default function Checkout({ route, navigation }: Props) {
  const { total } = route.params;
  const { clearCart } = useCart();

  const handleConfirmPurchase = () => {
    Alert.alert("¡Compra Exitosa!", "Gracias por tu pedido.", [
      { 
        text: "OK", 
        onPress: () => {
          clearCart();
          navigation.navigate('HomeTabs');
        } 
      }
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resumen de Pago</Text>
      <View style={styles.card}>
        <Text style={styles.label}>Monto Total a Pagar:</Text>
        <Text style={styles.amount}>${total.toFixed(2)} MXN</Text>
      </View>
      
      <Button 
        title="Confirmar y Pagar" 
        onPress={handleConfirmPurchase}
        color="#0f766e"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 30 },
  card: { backgroundColor: '#fff', padding: 30, borderRadius: 15, alignItems: 'center', marginBottom: 30, elevation: 3 },
  label: { fontSize: 16, color: '#64748b' },
  amount: { fontSize: 32, fontWeight: 'bold', color: '#0f766e', marginTop: 10 }
});