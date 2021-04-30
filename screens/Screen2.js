import * as React from 'react';
import CustomHeader from '../components/CHeader'
import { Text, View, SafeAreaView } from 'react-native'
import Colors from '../constants/Colors';
export default function Screen2({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <CustomHeader title="Screen 3" isHome={true} navigation={navigation} />
      <View style={{ flex: 1, backgroundColor: Colors.DGreen, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 24,color:Colors.BYellow, marginBottom: 10, marginTop: 20 }}>Welcome To Second Screen</Text>
      </View>
    </View>
  );
}