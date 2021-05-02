import * as React from 'react';
import CustomHeader from '../components/CHeader'
import { Text, View, SafeAreaView, Dimensions, Image, ImageBackground, ScrollView, TextInput } from 'react-native'
import { StackActions } from '@react-navigation/native';
import Clrs from "../constants/Colors";
import { Feather } from '@expo/vector-icons';
import { useState } from 'react';
// import React9Slice from 'react-9-slice';
// import ImageCapInset from 'react-native-image-capinsets';
const width = Dimensions.get("screen").width
export default function HomeScreen({ navigation }) {

  const res = {
    "success": true, "timestamp": 1619799840,
    "date": "2021-04-30", "base": "USD",
    "rates":
    {
      "AED": 3.67415435328, "AFN": 77.60900705244, "ALL": 101.65958150986, "AMD": 520.91888050188, "ANG": 1.79572119327, "AOA": 654.47496882352, "ARS": 93.62650848096, "AUD": 1.29652871333, "AWG": 1.801958405, "AZN": 1.70809194136, "BAM": 1.61943984846, "BBD": 2.01906918112, "BDT": 84.7271428671, "BGN": 1.62713368175, "BHD": 0.37721496085, "BIF": 1964.04039, "BMD": 1.00027, "BND": 1.32903031802, "BOB": 6.90526899855, "BRL": 5.42442241312, "BSD": 1.00007388372, "BTN": 74.10763801191, "BWP": 10.86804383643, "BYN": 2.56000766637, "BYR": 19604.312, "BZD": 2.01569538219, "CAD": 1.229810703, "CDF": 2002.1207421019, "CHF": 0.91329534315, "CLF": 0.025693103, "CLP": 708.51294230094, "CNY": 6.4792987266, "COP": 3748.3653264, "CRC": 617.60229278004, "CUC": 1.0007, "CVE": 92.01526048296, "CZK": 21.50374082726, "DJF": 178.08208007417, "DKK": 6.1857256368, "DOP": 56.88764343237, "DZD": 133.56926293788, "EGP": 15.66510301552, "ERN": 15.00386124843, "ETB": 41.97683699296, "EUR": 0.830947, "FJD": 2.05060440324, "FKP": 0.72709411125, "GBP": 0.722815, "GEL": 3.45352514112, "GHS": 5.78840614587, "GIP": 0.7268544075, "GMD": 51.17149628586, "GNF": 9912.1041497642, "GTQ": 7.72143038528, "GYD": 209.19761938845, "HKD": 7.7710111955, "HNL": 24.1606228898, "HRK": 6.273836716, "HTG": 85.4300316321, "HUF": 299.2092363073, "IDR": 14434.640499, "ILS": 3.2444696874, "INR": 74.005991667, "IQD": 1463.0265, "ISK": 125.26030114872, "JMD": 153.51646660164, "JOD": 0.70913270962, "JPY": 109.35887672814, "KES": 107.90750682378, "KGS": 84.8103176397, "KHR": 4054.552586891, "KMF": 406.62579900096, "KRW": 1116.9898538585, "KWD": 0.3013457475, "KYD": 0.83378081586, "KZT": 430.04429610417, "LAK": 9426.6879548261, "LBP": 1528.4054015161, "LKR": 197.50582715732, "LRD": 172.21614553608, "LSL": 14.32733895778, "LYD": 4.47219994653, "MAD": 8.9043234482, "MDL": 17.71280214268, "MGA": 3767.447106907, "MKD": 50.94493600024, "MMK": 1558.3091319506, "MNT": 2851.536086239, "MOP": 8.00226880504, "MRO": 357.089077957, "MUR": 40.30535683906, "MVR": 15.4154998955, "MWK": 795.27025098334, "MXN": 20.1838253145, "MYR": 4.10500052378, "MZN": 57.62969194878, "NAD": 14.32948852952, "NGN": 380.81968313895, "NIO": 35.1662790506, "NOK": 8.303044279, "NPR": 118.59920898216, "NZD": 1.3951307089, "OMR": 0.38527604635, "PAB": 0.9998439541, "PEN": 3.784521545, "PGK": 3.5377923273, "PHP": 48.18665172462, "PKR": 153.89500575026, "PLN": 3.787653331, "PYG": 6525.4304129295, "QAR": 3.64159496592, "RON": 4.09637148162, "RSD": 97.3492401572, "RUB": 75.1978314585, "RWF": 982.83405, "SAR": 3.75200899136, "SBD": 7.97064114006, "SCR": 14.983636797, "SEK": 8.45568086475, "SHP": 0.72677450625, "SLL": 10248.191594676, "SOS": 585.14045901416, "SRD": 14.1639218098, "SSP": 130.3850496, "STD": 20746.343215566, "SVC": 8.75213202655, "SZL": 14.32382354792, "THB": 31.17140317395, "TJS": 11.40590159622, "TMT": 3.502135, "TND": 2.73960487269, "TOP": 2.26212324037, "TRY": 8.2773315468, "TTD": 6.7920761436, "TWD": 27.93511131, "TZS": 2318.9525272655, "UAH": 27.7641806509, "UGX": 3579.2170690857, "UYU": 43.97457999988, "UZS": 10541.581325049, "VES": 2743864.7073895, "VND": 23073.444, "VUV": 109.61444481547, "WST": 2.53289159442, "XAF": 543.25162636975, "XAG": 0.03859792675, "XAU": 0.00056613584, "XCD": 2.7036039945, "XDR": 0.696039768, "XOF": 540.8533563195, "XPD": 0.00033678114478114, "XPF": 99.00219452574, "XPT": 0.00082030327868852, "YER": 250.5376792446, "ZAR": 14.502937027, "ZMW": 22.35251801268, "JEP": 0.72678903375, "GGP": 0.7265057475, "IMP": 0.72697789125, "CNH": 6.47159642145, "MTL": 0.24438526664214, "ZWL": 322.17729510725, "SGD": 1.3307066078, "USD": 1, "BTC": 1.754049374088e-5, "BCH": 0.0010014460483851, "ETH": 0.0003635392694122, "LTC": 0.0036958111702128, "LINK": 0.025990402129328, "XLM": 1.8873476131602, "UNI": 0.025051774351475, "ADA": 0.73361677173435, "LTL": 2.9546888084, "LVL": 0.6049625868, "VEF": 214007701422.61, "ZMK": 9002.0971747055, "XRH": 3.4078023850085e-5, "RUTH": 0.0022749318181818, "XCU": 3.5804158283032, "ALU": 13.26361670216, "NI": 1.8272997798129, "ZNC": 11.662237509348, "TIN": 1.2166949450424
    },
    "unit": "per ounce"
  }
  const means = {
    "ADA": "Cardano",
    "AED": "United Arab Emirates Dirham",
    "AFN": "Afghan Afghani",
    "ALL": "Albanian Lek",
    "ALU": "Aluminum",
    "AMD": "Armenian Dram",
    "ANG": "Netherlands Antillean Gulden",
    "AOA": "Angolan Kwanza",
    "ARS": "Argentine Peso",
    "AUD": "Australian Dollar",
    "AWG": "Aruban Florin",
    "AZN": "Azerbaijani Manat",
    "BAM": "Bosnia and Herzegovina Convertible Mark",
    "BBD": "Barbadian Dollar",
    "BCH": "Bitcoin Cash",
    "BDT": "Bangladeshi Taka",
    "BGN": "Bulgarian Lev",
    "BHD": "Bahraini Dinar",
    "BIF": "Burundian Franc",
    "BMD": "Bermudian Dollar",
    "BND": "Brunei Dollar",
    "BOB": "Bolivian Boliviano",
    "BRL": "Brazilian Real",
    "BSD": "Bahamian Dollar",
    "BTC": "Bitcoin",
    "BTN": "Bhutanese Ngultrum",
    "BWP": "Botswana Pula",
    "BYN": "Belarusian Ruble",
    "BYR": "Belarusian Ruble",
    "BZD": "Belize Dollar",
    "CAD": "Canadian Dollar",
    "CDF": "Congolese Franc",
    "CHF": "Swiss Franc",
    "CLF": "Unidad de Fomento",
    "CLP": "Chilean Peso",
    "CNH": "Chinese Renminbi Yuan Offshore",
    "CNY": "Chinese Renminbi Yuan",
    "COP": "Colombian Peso",
    "CRC": "Costa Rican Colón",
    "CUC": "Cuban Convertible Peso",
    "CVE": "Cape Verdean Escudo",
    "CZK": "Czech Koruna",
    "DJF": "Djiboutian Franc",
    "DKK": "Danish Krone",
    "DOP": "Dominican Peso",
    "DZD": "Algerian Dinar",
    "EEK": "Estonian Kroon",
    "EGP": "Egyptian Pound",
    "ERN": "Eritrean Nakfa",
    "ETB": "Ethiopian Birr",
    "ETH": "Ethereum",
    "EUR": "Euro",
    "FJD": "Fijian Dollar",
    "FKP": "Falkland Pound",
    "GBP": "British Pound",
    "GEL": "Georgian Lari",
    "GGP": "Guernsey Pound",
    "GHS": "Ghanaian Cedi",
    "GIP": "Gibraltar Pound",
    "GMD": "Gambian Dalasi",
    "GNF": "Guinean Franc",
    "GTQ": "Guatemalan Quetzal",
    "GYD": "Guyanese Dollar",
    "HKD": "Hong Kong Dollar",
    "HNL": "Honduran Lempira",
    "HRK": "Croatian Kuna",
    "HTG": "Haitian Gourde",
    "HUF": "Hungarian Forint",
    "IDR": "Indonesian Rupiah",
    "ILS": "Israeli New Sheqel",
    "IMP": "Isle of Man Pound",
    "INR": "Indian Rupee",
    "IQD": "Iraqi Dinar",
    "ISK": "Icelandic Króna",
    "JEP": "Jersey Pound",
    "JMD": "Jamaican Dollar",
    "JOD": "Jordanian Dinar",
    "JPY": "Japanese Yen",
    "KES": "Kenyan Shilling",
    "KGS": "Kyrgyzstani Som",
    "KHR": "Cambodian Riel",
    "KMF": "Comorian Franc",
    "KRW": "South Korean Won",
    "KWD": "Kuwaiti Dinar",
    "KYD": "Cayman Islands Dollar",
    "KZT": "Kazakhstani Tenge",
    "LAK": "Lao Kip",
    "LBP": "Lebanese Pound",
    "LINK": "Chainlink",
    "LKR": "Sri Lankan Rupee",
    "LRD": "Liberian Dollar",
    "LSL": "Lesotho Loti",
    "LTC": "Litecoin",
    "LTL": "Lithuanian Litas",
    "LVL": "Latvian Lats",
    "LYD": "Libyan Dinar",
    "MAD": "Moroccan Dirham",
    "MDL": "Moldovan Leu",
    "MGA": "Malagasy Ariary",
    "MKD": "Macedonian Denar",
    "MMK": "Myanmar Kyat",
    "MNT": "Mongolian Tögrög",
    "MOP": "Macanese Pataca",
    "MRO": "Mauritanian Ouguiya",
    "MTL": "Maltese Lira",
    "MUR": "Mauritian Rupee",
    "MVR": "Maldivian Rufiyaa",
    "MWK": "Malawian Kwacha",
    "MXN": "Mexican Peso",
    "MYR": "Malaysian Ringgit",
    "MZN": "Mozambican Metical",
    "NAD": "Namibian Dollar",
    "NGN": "Nigerian Naira",
    "NI": "Nickel",
    "NIO": "Nicaraguan Córdoba",
    "NOK": "Norwegian Krone",
    "NPR": "Nepalese Rupee",
    "NZD": "New Zealand Dollar",
    "OMR": "Omani Rial",
    "PAB": "Panamanian Balboa",
    "PEN": "Peruvian Sol",
    "PGK": "Papua New Guinean Kina",
    "PHP": "Philippine Peso",
    "PKR": "Pakistani Rupee",
    "PLN": "Polish Złoty",
    "PYG": "Paraguayan Guaraní",
    "QAR": "Qatari Riyal",
    "RON": "Romanian Leu",
    "RSD": "Serbian Dinar",
    "RUB": "Russian Ruble",
    "RUTH": "Ruthenium",
    "RWF": "Rwandan Franc",
    "SAR": "Saudi Riyal",
    "SBD": "Solomon Islands Dollar",
    "SCR": "Seychellois Rupee",
    "SEK": "Swedish Krona",
    "SGD": "Singapore Dollar",
    "SHP": "Saint Helenian Pound",
    "SLL": "Sierra Leonean Leone",
    "SOS": "Somali Shilling",
    "SRD": "Surinamese Dollar",
    "SSP": "South Sudanese Pound",
    "STD": "São Tomé and Príncipe Dobra",
    "SVC": "Salvadoran Colón",
    "SZL": "Swazi Lilangeni",
    "THB": "Thai Baht",
    "TIN": "Tin",
    "TJS": "Tajikistani Somoni",
    "TMT": "Turkmenistani Manat",
    "TND": "Tunisian Dinar",
    "TOP": "Tongan Paʻanga",
    "TRY": "Turkish Lira",
    "TTD": "Trinidad and Tobago Dollar",
    "TWD": "New Taiwan Dollar",
    "TZS": "Tanzanian Shilling",
    "UAH": "Ukrainian Hryvnia",
    "UGX": "Ugandan Shilling",
    "UNI": "Uniswap",
    "USD": "United States Dollar",
    "UYU": "Uruguayan Peso",
    "UZS": "Uzbekistan Som",
    "VEF": "Venezuelan Bolívar",
    "VES": "Venezuelan Bolívar Soberano",
    "VND": "Vietnamese Đồng",
    "VUV": "Vanuatu Vatu",
    "WST": "Samoan Tala",
    "XAF": "Central African Cfa Franc",
    "XAG": "Silver (Troy Ounce)",
    "XAU": "Gold (Troy Ounce)",
    "XCD": "East Caribbean Dollar",
    "XCU": "Copper",
    "XDR": "Special Drawing Rights",
    "XLM": "Stellar",
    "XOF": "West African Cfa Franc",
    "XPD": "Palladium (Troy Ounce)",
    "XPF": "Cfp Franc",
    "XPT": "Platinum (Troy Ounce)",
    "XRH": "Rhodium (Troy Ounce)",
    "XRP": "Ripple",
    "XRP2": "Ripple",
    "YER": "Yemeni Rial",
    "ZAR": "South African Rand",
    "ZMK": "Zambian Kwacha",
    "ZMW": "Zambian Kwacha",
    "ZNC": "Zinc",
    "ZWL": "Zimbabwean Dollar"
  }
  // const rates = res.rates
  // const keys = Object.keys(rates)
  const [srates, setSrates] = useState(res.rates)

  return (
    <View style={{ flex: 1 }}>
      <CustomHeader title="اسعار العملات و المعادن" isHome={true} navigation={navigation} />
      <View style={{
        margin: 2,
        padding: 5,
        borderRadius: 3,
      }}>
        <TextInput
          placeholder="بحث"
          onChangeText={(v) => {
            var rates = res.rates
            var rt = {};
            Object.keys(rates).map((i, index) => {
              if(i.includes(v)){
                rt[i] = rates[i]
              }
            })
            if(rt == {}){
              setSrates(rt)
            }else{
              setSrates(rates)
            }
          }}
          style={{
            fontFamily: "Cairo_400Regular"
          }}
        />
      </View>
      <ScrollView
        style={{ backgroundColor: Clrs.DGreen }}
        contentContainerStyle={{ flex: 1, alignItems: 'center', }}
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
          return <View style={{ backgroundColor: Clrs.BGreen, width: width - 30, marginBottom: 10, borderRadius: 12, padding: 10, }} >
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
          </View>
        })}
      </ScrollView>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};
