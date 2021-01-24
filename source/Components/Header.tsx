import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {BackIcon} from '../Helpers/icons';

export default (props: {title?: string}) => {
  const nav = useNavigation();
  const goCreate = () => nav.navigate('Create');
  return (
    <View style={style.header}>
      <Text style={style.text}>{props.title}</Text>
      <TouchableOpacity
        onPress={goCreate}
        activeOpacity={0.8}
        style={style.btn}>
        <Text style={[style.creatext]}>Yeni</Text>
      </TouchableOpacity>
    </View>
  );
};

export const BackHeader = () => {
  const nav = useNavigation();
  const fallBack = () => nav.goBack();

  return (
    <View style={style.header}>
      <TouchableOpacity onPress={fallBack} style={style.bh} activeOpacity={0.7}>
        <BackIcon size={20} color="#212121" />
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  header: {
    backgroundColor: '#ffffff',
    height: 55,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    elevation: 1,
  },
  text: {
    color: '#212121',
    fontSize: 16,
    fontWeight: '700',
  },
  creatext: {
    color: '#212121',
    fontSize: 12,
  },
  btn: {
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#212121',
    borderLeftWidth: 3,
    borderBottomWidth: 3,
  },
  bh: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#212121',
    borderLeftWidth: 3,
    borderBottomWidth: 3,
  },
});
