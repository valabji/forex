import * as React from 'react';
import CustomHeader from '../components/CHeader'
import { Text, View, SafeAreaView, Dimensions, Image, ScrollView, ImageBackground, TextInput } from 'react-native'
import { StackActions } from '@react-navigation/native';
import Clrs from "../constants/Colors";
import { Feather } from '@expo/vector-icons';
import { useState } from 'react';
// import React9Slice from 'react-9-slice';
// import ImageCapInset from 'react-native-image-capinsets';
const width = Dimensions.get("screen").width
export default function Screen2({ navigation }) {


  const [srates, setSrates] = useState(global.res.rates)

  return (
    <View style={{ flex: 1, backgroundColor: Clrs.DGreen }}>
      <CustomHeader title="تطبيق العملات" isHome={true} navigation={navigation} />
      <View style={{
        // margin: 15,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 10,
        borderTopRightRadius: 6,
        borderTopLeftRadius: 6,
        backgroundColor: Clrs.BYellow,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
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
              setSrates(rt)
            } else {
              setSrates(rates)
            }
            console.log(JSON.stringify(rt) == JSON.stringify({}))
            console.log(rt == {})
          }}
          style={{
            fontFamily: "Cairo_400Regular",
            padding: 10,
          }}
        />
      </View>
      <ScrollView
        style={{ backgroundColor: Clrs.DGreen }}
        contentContainerStyle={{ flexGrow: 1, alignItems: 'center', }}
      >
        <View
          style={{
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,

            elevation: 3,
          }}
        >

          {Object.keys(srates).map((i, index) => {
            let can = Object.keys(srates).length > (index + 1)

            let nrt = 1 / srates[i]
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
            return <View style={{
              backgroundColor: Clrs.BYellow, width: width - 30, borderTopWidth: 1, borderTopColor: Clrs.DGreen, padding: 10, borderBottomRightRadius: can ? 0 : 12, borderBottomLeftRadius: can ? 0 : 12, padding: 10
            }} >

              <View style={{ flexDirection: "row-reverse" }} >
                <Feather name="tag" size={18} style={{ paddingTop: 5 }} />
                <Text style={{ color: "black", marginRight: 10, fontFamily: "Cairo_700Bold" }}>الاسم :<Text style={{ color: Clrs.Golden }}> {means[i]}</Text></Text>
              </View>
              <View style={{ flexDirection: "row-reverse" }} >
                <Feather name="edit" size={18} style={{ paddingTop: 5 }} />
                <Text style={{ color: "black", marginRight: 10, fontFamily: "Cairo_400Regular" }}>الرمز : {i}</Text>
                <Text style={{ color: "black", marginRight: 30, fontFamily: "Cairo_400Regular" }}>السعر بالدولار : </Text>
                <View style={{ flex: 1 }} />
                <Text style={{ color: "black", marginRight: 10, fontFamily: "Cairo_400Regular" }}>${rt}</Text>
              </View>

            </View>
          })}
        </View>
      </ScrollView>
    </View>
  );
}