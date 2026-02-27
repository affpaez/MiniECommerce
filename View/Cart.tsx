import React from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView, Button } from 'react-native';
import { useCart } from '../context/CarContext';

export default function Cart({ navigation }: any) {
  const { cart } = useCart(); 
  const calculateTotal = () => {
    return cart.reduce((sum, item) => {
      const priceValue = parseFloat(item.price.replace(/[$,]/g, ''));
      return sum + (isNaN(priceValue) ? 0 : priceValue);
    }, 0);
  };

  const total = calculateTotal();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Mi Carrito ({cart.length})</Text>
        
        <FlatList
          data={cart}
          keyExtractor={(item, index) => `${item.id}-${index}`}
          contentContainerStyle={styles.listContent}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <View>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemCategory}>Producto seleccionado</Text>
              </View>
              <Text style={styles.itemPrice}>{item.price}</Text>
            </View>
          )}
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>Tu carrito está vacío.</Text>
            </View>
          }
        />

        {cart.length > 0 && (
          <View style={styles.footer}>
            <View style={styles.totalRow}>
              <Text style={styles.totalLabel}>Total a pagar:</Text>
              <Text style={styles.totalText}>${total.toLocaleString('en-US', { minimumFractionDigits: 2 })}</Text>
            </View>
            <View style={styles.buttonWrapper}>
              <Button 
                title="Pagar" 
                onPress={() => navigation.navigate('Checkout', { total: total })} 
                color="#0f766e"
              />
            </View>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#f8fafc" },
  container: { flex: 1 },
  title: {
    fontSize: 24,
    fontWeight: "800",
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 15,
    color: "#0f172a",
  },
  listContent: { paddingHorizontal: 20, paddingBottom: 20 },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#f1f5f9',
  },
  itemName: { fontSize: 16, fontWeight: '700', color: '#1e293b' },
  itemCategory: { fontSize: 12, color: '#94a3b8', marginTop: 2 },
  itemPrice: { fontSize: 16, fontWeight: '800', color: '#0f766e' },
  emptyContainer: { marginTop: 100, alignItems: 'center' },
  emptyText: { color: '#94a3b8', fontSize: 16 },
  footer: {
    backgroundColor: '#fff',
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#e2e8f0',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  totalLabel: { fontSize: 16, color: '#64748b', fontWeight: '600' },
  totalText: { fontSize: 22, fontWeight: '800', color: '#0f172a' },
  buttonWrapper: { borderRadius: 10, overflow: 'hidden' }
});