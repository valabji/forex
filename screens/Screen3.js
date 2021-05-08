import * as React from 'react';
import CustomHeader from '../components/CHeader'
import { Text, View, SafeAreaView, StyleSheet, Dimensions, Modal, Image, ScrollView, TouchableOpacity, ImageBackground, TextInput } from 'react-native'
import { StackActions } from '@react-navigation/native';
import Clrs from "../constants/Colors";
import { Feather, Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
// import React9Slice from 'react-9-slice';
// import ImageCapInset from 'react-native-image-capinsets';
const width = Dimensions.get("screen").width
export default function Screen3({ navigation }) {
  const [from, setFrom] = useState("KWD")
  const [modalVisible, setModalVisible] = useState(false);

  const srates = [
    {
      name: "اونصة تروي صافية",
      price: global.res.rates.XAU,
    },
    {
      name: "سبيكة عيار 24",
      price: ((((global.res.rates.XAU * 31.1034768) / 24) * 24) / 1000),
    },
    {
      name: "جرام عيار 24",
      price: ((((global.res.rates.XAU * 31.1034768) / 24) * 24)),
    },
    {
      name: "جرام عيار 22",
      price: ((((global.res.rates.XAU * 31.1034768) / 22) * 24)),
    },
    {
      name: "جرام عيار 21",
      price: ((((global.res.rates.XAU * 31.1034768) / 21) * 24)),
    },
    {
      name: "جرام عيار 18",
      price: ((((global.res.rates.XAU * 31.1034768) / 18) * 24)),
    },
  ]
  const rates = global.res.rates
  const [srates2, setSrates2] = useState(rates)

  return (
    <View style={{ flex: 1, backgroundColor: Clrs.DGreen }}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false)
          // Alert.alert('Modal has been closed.');
        }}>
        <TouchableOpacity onPress={() => {
          setModalVisible(false)
        }} style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={{
              borderRadius: 6,
              width: "100%",
              margin: 15,
              backgroundColor: Clrs.BYellow
            }}>
              <TextInput
                placeholder="بحث"
                placeholderTextColor={Clrs.BGreen}
                onChangeText={(v) => {
                  v = v.toUpperCase()
                  console.log(v)
                  var rates = global.res.rates
                  var rt = {};
                  Object.keys(rates).map((i, index) => {
                    if (i.includes(v) || means[i].toUpperCase().includes(v)) {
                      rt[i] = rates[i]
                      // console.log(means[i])
                    }
                  })
                  if (Object.keys(rt).length > 0) {
                    setSrates2(rt)
                  } else {
                    setSrates2(rates)
                  }
                  console.log(JSON.stringify(rt) == JSON.stringify({}))
                  console.log(rt == {})
                }}
                style={{
                  fontFamily: "Cairo_400Regular",
                  padding: 10,
                  width: "100%",
                  color: Clrs.BGreen,
                }}
              />
            </View>
            <ScrollView
              style={{ width: "100%", backgroundColor: Clrs.DGreen, height: 300 }}
              contentContainerStyle={{ flexGrow: 1 }}
            >
              {Object.keys(srates2).map((i, index) => {
                let nrt = 1 / srates2[i]
                let rt = nrt.toFixed(2)
                if (rt == "0.00") {
                  rt = nrt.toFixed(4)
                }
                if (rt == "0.0000") {
                  rt = nrt.toFixed(6)
                }
                if (rt == "0.000000") {
                  rt = nrt.toFixed(8)
                }
                if (rt == "0.00000000") {
                  rt = nrt
                }
                return <TouchableOpacity
                  onPress={() => {
                    setFrom(i)
                    setModalVisible(false)
                  }}
                  style={{ backgroundColor: Clrs.BYellow, marginBottom: 10, borderRadius: 12, }} >
                  <View style={{ flexDirection: "row-reverse" }} >
                    <Feather name="edit" size={18} style={{ paddingTop: 5 }} />
                    <Text style={{ color: "black", marginRight: 10, fontFamily: "Cairo_400Regular" }}>الرمز : {i}</Text>
                  </View>
                  <View style={{ flexDirection: "row-reverse" }} >
                    <Feather name="tag" size={18} style={{ paddingTop: 5 }} />
                    <Text style={{ color: "black", marginRight: 10, fontFamily: "Cairo_400Regular" }}>الاسم : {means[i]}</Text>
                  </View>
                  <View style={{ flexDirection: "row-reverse" }} >
                    <Feather name="dollar-sign" size={18} style={{ paddingTop: 5 }} />
                    <Text style={{ color: "black", marginRight: 10, fontFamily: "Cairo_400Regular" }}>السعر بالدولار : {rt}$</Text>
                  </View>
                </TouchableOpacity>
              })}
            </ScrollView>

          </View>
        </TouchableOpacity>
      </Modal>

      <CustomHeader title="تطبيق العملات" isHome={true} navigation={navigation} />
      <ScrollView
        style={{ backgroundColor: Clrs.DGreen }}
        contentContainerStyle={{ flexGrow: 1, alignItems: 'center', justifyContent: "center" }}
      >
        <TouchableOpacity
          onPress={() => {
            setModalVisible(true)
          }}
          style={{ backgroundColor: Clrs.BYellow, width: width - 30, marginBottom: 0, borderRadius: 0, borderTopRightRadius: 12, borderTopLeftRadius: 12, padding: 10, }} >
          <View style={{ flexDirection: "row-reverse" }} >
            <Text style={{ color: "black", marginRight: 0, fontFamily: "Cairo_400Regular" }}>العملة : </Text>
            <View style={{ flex: 1 }} />
            <Text style={{ color: "black", marginLeft: 10, fontFamily: "Cairo_400Regular" }}>{from} </Text>
            <Ionicons name="sync" size={18} style={{ paddingTop: 5 }} />
          </View>
        </TouchableOpacity>
        {srates.map((i, index) => {

          let nrt2 = (1 / i.price) * global.res.rates[from]
          let rt2 = nrt2.toFixed(2)
          if (rt2 == "0.00") {
            rt2 = nrt2.toFixed(4)
          }
          if (rt2 == "0.0000") {
            rt2 = nrt2.toFixed(6)
          }
          if (rt2 == "0.000000") {
            rt2 = nrt2.toFixed(8)
          }
          if (rt2 == "0.00000000") {
            rt2 = nrt2
          }

          return <View style={{ backgroundColor: Clrs.BYellow, width: width - 30, marginBottom: 0, borderRadius: 0, borderBottomRightRadius: index == 5 ? 12 : 0, borderBottomLeftRadius: index == 5 ? 12 : 0, borderTopWidth: 1, borderColor: Clrs.DGreen, padding: 10, }} >
            <View style={{ flexDirection: "row-reverse" }} >
              <Text style={{ flex: 1, color: "black", marginRight: 0, textAlign: "right", fontFamily: "Cairo_400Regular" }}>{i.name}</Text>
              <Feather name="chevrons-left" size={24} color={Clrs.Golden} />
              <Text style={{ flex: 1, color: "black", marginRight: 0, fontFamily: "Cairo_400Regular" }}>{from} {rt2}</Text>
            </View>
          </View>
        })}
      </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: "100%",
    marginTop: 22,
    padding: 25,
  },
  modalView: {
    width: "100%",
    margin: 0,
    backgroundColor: Clrs.DGreen,
    borderRadius: 20,
    borderColor: Clrs.BGreen,
    borderWidth: 1,
    padding: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});