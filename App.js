import { Text, View, SafeAreaView, StyleSheet, Image, FlatList, Pressable } from 'react-native';
import {useEffect, useState} from 'react';


export default function App() {
  const [productList, setProductList] = useState([]);

  const getProducts = async () => {
    try {
      const response = await fetch('https://66fa554aafc569e13a9b4600.mockapi.io/api/products/products');
      const json = await response.json();
      setProductList(json);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const imageMapping = {
    './assets/ca_nau_lau.png': require('./assets/ca_nau_lau.png'),
    './assets/ga_bo_toi.png': require('./assets/ga_bo_toi.png'),
    './assets/xe_can_cau.png': require('./assets/xa_can_cau.png'),
    './assets/do_choi_dang_mo_hinh.png': require('./assets/do_choi_dang_mo_hinh.png'),
    './assets/lanh_dao_gian_don.png': require('./assets/lanh_dao_gian_don.png'),
    './assets/hieu_long_con_tre.png': require('./assets/hieu_long_con_tre.png'),
    './assets/trump 1.png': require('./assets/trump 1.png'),
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navigation}>
        <Image source={require("./assets/left-arrow.png")} />
        <Text style={{color: "#fff"}}>Chat</Text>
        <Image source={require("./assets/cart.png")} />
      </View>
      <Text style={{paddingHorizontal: 10, paddingVertical: 10}}>Bạn có thắc mắc với sản phẩm vừa xem, Đừng ngại nhắn tin với shop</Text>
      <FlatList data={productList} keyExtractor={(item) => item} renderItem={({item}) => 
      <View style={styles.item}>
        <Image source={ imageMapping[item.image] } style={styles.image} />
        <View style={{flex: 1}}>
          <Text>{item.name}</Text>
          <Text>{item.shop}</Text>
        </View>
        <View style={styles.chat}>
          <Pressable style={{color: "#fff"}}><Text>Chat</Text></Pressable>
        </View>
      </View>
       } />
       <View style={styles.navigation}>
        <Image source={require("./assets/group.png")} />
        <Image source={require("./assets/home.png")} />
        <Image source={require("./assets/back.png")} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  navigation: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: "#1BA9FF",
    alignItems: "center"
  },
  image: {
    maxWidth: "100%",
    objectFit: "contain"
  },
  item: {
    flexDirection: "row",
    gap: "10px",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    marginTop: "10px",
    alignItems: "center"
  },
  chat: {
    backgroundColor: '#F31111',
    width: "80px",
    height: "35px",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "15px"
  }
});
