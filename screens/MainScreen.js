import * as React from 'react';
import CustomHeader from '../components/CHeader'
import { Text, View, TouchableOpacity, StyleSheet, Alert, TouchableHighlight, SafeAreaView, Modal, Dimensions, Image, ScrollView, ImageBackground, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { StackActions } from '@react-navigation/native';
import Clrs from "../constants/Colors";
import { Feather, Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import admob, { MaxAdContentRating, InterstitialAd, RewardedAd, AdEventType, BannerAd, TestIds, firebase } from '@react-native-firebase/admob';
import InAppReview from 'react-native-in-app-review';
import { set } from 'react-native-reanimated';
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
} from 'react-native-admob'

const adUnitId = __DEV__ ? TestIds.INTERSTITIAL : 'ca-app-pub-3740649260356297/8955512554';
const adUnitIdbanner = __DEV__ ? TestIds.BANNER : 'ca-app-pub-3740649260356297/1296514380';



// import React9Slice from 'react-9-slice';
// import ImageCapInset from 'react-native-image-capinsets';
const width = Dimensions.get("screen").width
export default function HomeScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [f, setF] = useState(true);
  const [from, setFrom] = useState("USD")
  const [to, setTo] = useState("KWD")
  const [fvalue, setFvalue] = useState(0.0)
  const [tvalue, setTvalue] = useState(0.0)
  const [loaded, setLoaded] = useState(false);
  const [ft, setFt] = React.useState(true)

  const rates = global.res.rates
  const [srates, setSrates] = useState(rates)
  const [adready, setAdready] = useState(false)

  if (loaded) {
    // console.log("AD LOADED")
  }

  const showReview = () => {

    InAppReview.isAvailable();

    // trigger UI InAppreview
    InAppReview.RequestInAppReview()
      .then((hasFlowFinishedSuccessfully) => {
        console.log('InAppReview in android', hasFlowFinishedSuccessfully);
        console.log(
          'InAppReview in ios has lanuched successfully',
          hasFlowFinishedSuccessfully,
        );
        if (hasFlowFinishedSuccessfully) {
        }

      })
      .catch((error) => {
        console.log(error);
      });
  }

  if (ft) {
    setFt(false)
    AdMobInterstitial.setAdUnitID(adUnitId);
    // AdMobInterstitial.setTestDevices([AdMobInterstitial.simulatorId]);
    AdMobInterstitial.requestAd().then(() => {
      setTimeout(() => {
        AdMobInterstitial.showAd()
      }, 1000 * 20);
    });

    setTimeout(() => {
      showReview()
    }, 1000 * 60);
  }

  return (
    <View style={{ flex: 1 }}>
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
                  width: "100%",
                  color: Clrs.BGreen,
                }}
              />
            </View>
            <ScrollView
              style={{ backgroundColor: Clrs.DGreen, height: 300 }}
              contentContainerStyle={{ flexGrow: 1 }}
            >
              {Object.keys(srates).map((i, index) => {
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
                return <TouchableOpacity
                  onPress={() => {
                    if (f) {
                      setFrom(i)
                      setFvalue(0.00)
                      setTvalue(0.00)
                      setModalVisible(false)
                    } else {
                      setTo(i)
                      setFvalue(0.00)
                      setTvalue(0.00)
                      setModalVisible(false)
                    }
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
        onPress={() => {
          Keyboard.dismiss()
        }}
        style={{ flex: 1, width: "100%", backgroundColor: Clrs.DGreen, }} contentContainerStyle={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={{
          padding: 15,
          width: "100%",
        }}>
          <TouchableOpacity
            onPress={() => {
              showReview()
            }}
            style={{
              backgroundColor: Clrs.BYellow,
              // width: 100,
              padding: 10,
              marginTop: 10,
              marginBottom: 10,
              // height: 40,
              borderRadius: 25,
              alignItems: "center",
              justifyContent: "center",
              alignSelf: "flex-end",
              flexDirection: "row-reverse"
            }}
          >
            <Ionicons name="star" size={24} />
            <Text style={{ color: "black", marginRight: 5, fontFamily: "Cairo_400Regular" }}>
              تقييم التطبيق
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setF(true)
              setModalVisible(true)
            }}
            style={{
              padding: 15,
              width: "100%",
              borderRadius: 6,
              backgroundColor: Clrs.BYellow
            }}>
            <View>
              <View style={{ flexDirection: "row-reverse", marginBottom: 10 }} >
                <Feather name="arrow-down-circle" size={18} style={{ paddingTop: 3 }} />
                <Text style={{ color: Clrs.Golden, marginRight: 10, fontFamily: "Cairo_700Bold" }}> من : {means[from]}</Text>
                <View style={{ flex: 1 }} />
                <Feather name="list" size={18} style={{ paddingTop: 3 }} />
              </View>
              <TextInput
                placeholder="0.00"
                placeholderTextColor={Clrs.BGreen}
                keyboardType="decimal-pad"
                value={fvalue}
                onChangeText={(v) => {
                  console.log(v)
                  setFvalue(v)
                  setTvalue((v / rates[from]) * rates[to])
                }}
                style={{
                  fontFamily: "Cairo_400Regular",
                  padding: 10,
                  borderRadius: 3,
                  backgroundColor: Clrs.BYellow,
                  borderBottomWidth: 1
                }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              const s = from
              const x = fvalue
              setFrom(to)
              setTo(s)
              setFvalue("" + tvalue)
              setTvalue(x)
            }}
            style={{
              backgroundColor: Clrs.BYellow,
              width: 50,
              marginTop: 10,
              height: 50,
              borderRadius: 25,
              alignItems: "center",
              justifyContent: "center",
              alignSelf: "flex-end"
            }}
          >
            <Ionicons name="swap-vertical" size={32} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setF(false)
              setModalVisible(true)
            }}
            style={{
              padding: 15,
              width: "100%",
              borderRadius: 6,
              marginTop: 10,
              backgroundColor: Clrs.BYellow
            }}>
            <View style={{ flexDirection: "row-reverse", marginBottom: 10 }} >
              <Feather name="arrow-left-circle" size={18} style={{ paddingTop: 3 }} />
              <Text style={{ color: Clrs.Golden, marginRight: 10, fontFamily: "Cairo_700Bold" }}> إلى : {means[to]}</Text>
              <View style={{ flex: 1 }} />
              <Feather name="list" size={18} style={{ paddingTop: 3 }} />
            </View>
            <TextInput
              placeholder="0.00"
              value={"" + tvalue}
              editable={false}
              onChangeText={(v) => {
                v = v.toUpperCase()
                console.log(v)
              }}
              style={{
                fontFamily: "Cairo_400Regular",
                padding: 10,
                borderRadius: 3,
                backgroundColor: Clrs.BYellow,
                borderBottomWidth: 1
              }}
            />
          </TouchableOpacity>
          <View style={{ height: 30 }} />
          <View style={{ marginLeft: -40 }}>
            <AdMobBanner
              adSize="fullBanner"
              adUnitID={adUnitIdbanner}
              // testDevices={[AdMobBanner.simulatorId]}
              onAdFailedToLoad={error => console.error(error)}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

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