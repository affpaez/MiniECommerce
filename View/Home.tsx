import { View, Text, Pressable, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { MainStackParamList } from "../App";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";

type Props = NativeStackScreenProps<MainStackParamList, "HomeTabs">;

interface Product {
  id: string;
  name: string;
  price: string;
}

const PRODUCTS: Product[] = [
  { id: "101", name: "iPhone 15 Pro", price: "$999" },
  { id: "102", name: "MacBook Air M3", price: "$1,099" },
  { id: "103", name: "iPad Pro", price: "$799" },
  { id: "104", name: "Apple Watch S9", price: "$399" },
  { id: "105", name: "AirPods Pro 2", price: "$249" },
  { id: "106", name: "Sony WH-1000XM5", price: "$350" },
  { id: "107", name: "Nintendo Switch OLED", price: "$349" },
  { id: "108", name: "Samsung S24 Ultra", price: "$1,199" },
  { id: "109", name: "Logitech MX Master", price: "$99" },
  { id: "110", name: "Kindle Paperwhite", price: "$139" },
  { id: "111", name: "Monitor LG 27\" 4K", price: "$450" },
  { id: "112", name: "GoPro Hero 12", price: "$399" }
];

export default function Home({ navigation }: Props) {
  
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        
        <FlatList
  data={PRODUCTS}
  keyExtractor={(item) => item.id}
  renderItem={({ item }) => (
  <TouchableOpacity 
    style={styles.productCard}
    onPress={() => navigation.navigate('Details', { 
      productId: item.id, 
      name: item.name,
      price: item.price
    })}
  >
    <View style={styles.infoContainer}>
      <Text style={styles.productName}>{item.name}</Text>
      <View style={styles.priceBadge}>
        <Text style={styles.productPrice}>{item.price}</Text>
      </View>
    </View>
    <View style={styles.arrowContainer}>
      <AntDesign name="right" size={18} color="#94a3b8" />
    </View>
  </TouchableOpacity>
)}
/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f8fafc",
  },
  container: { 
    flex: 1, 
    backgroundColor: "#f8fafc",
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: "800",
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 20,
    color: "#0f172a",
    letterSpacing: -0.5,
  },
  listContent: {
    paddingHorizontal: 16,
    paddingBottom: 30,
  },
  productCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#ffffff",
    paddingVertical: 18,
    paddingHorizontal: 20,
    borderRadius: 16,
    marginBottom: 14,
    elevation: 4, 
    shadowColor: "#64748b",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    borderWidth: 1,
    borderColor: "#f1f5f9",
  },
  infoContainer: {
    flex: 1,
  },
  productName: {
    fontSize: 17,
    fontWeight: "700",
    color: "#1e293b",
    letterSpacing: 0.2,
  },
  priceBadge: {
    backgroundColor: "#f0fdfa",
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    marginTop: 6,
    borderWidth: 1,
    borderColor: "#ccfbf1",
  },
  productPrice: {
    fontSize: 15,
    color: "#0f766e",
    fontWeight: "800",
  },
  arrowContainer: {
    backgroundColor: "#f8fafc",
    padding: 8,
    borderRadius: 12,
    marginLeft: 10,
  }
});