import React from 'react';
import type {PropsWithChildren} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

type IconProps = PropsWithChildren<{
  name: string;
}>;

const Icons = ({name}: IconProps) => {
  switch (name) {
    case `circle`:
      return <Icon name="circle" size={38} color="#019031" />;
      break;

    case `cross`:
      return <Icon name="times" size={38} color="#AE1438" />;
      break;

    default:
      return <Icon name="frown-open" size={38} color="#2B2B52" />;
  }
};

export default Icons;
