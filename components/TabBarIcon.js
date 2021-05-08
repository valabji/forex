import * as React from 'react';
import { Ionicons,AntDesign,MaterialCommunityIcons } from '@expo/vector-icons';

import Colors from '../constants/Colors';

export default function TabBarIcon(props) {
  return (
    <AntDesign
      name={props.name}
      size={24}
      style={{ marginBottom: 0 }}
      color={props.focused ? Colors.BGreen : Colors.tabIconDefault}
    />
  );
}
