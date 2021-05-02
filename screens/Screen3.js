import * as React from 'react';
import CustomHeader from '../components/CHeader'
import { Text, View, SafeAreaView } from 'react-native'
import Colors from '../constants/Colors';
export default function Screen3({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <CustomHeader title="تطبيق العملات" isHome={true} navigation={navigation} />
      <View style={{ flex: 1, backgroundColor: Colors.DGreen, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 24, color: Colors.BYellow, marginBottom: 10, marginTop: 20 }}>معلومات عن التطبيق</Text>
        <Text style={{ fontSize: 24, color: Colors.BYellow, marginBottom: 10, marginTop: 20 }}>وبعض الروابط</Text>
        <Text style={{ fontSize: 24, color: Colors.BYellow, marginBottom: 10, marginTop: 20 }}>او يمكن حذف الصفحة</Text>
      </View>
    </View>
  );
}