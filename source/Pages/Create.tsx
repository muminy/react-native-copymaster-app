import React, {useEffect, useState} from 'react';
import {
  FlatList,
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {BackHeader} from '../Components/Header';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useCopyContext} from '../Helpers/Context';
import {AllListsProps} from '../Helpers/types';

export default () => {
  const [input, setInput] = useState<string>('');
  const {allLists, setNewAllList} = useCopyContext();

  const handleCreate = async () => {
    let currentList: AllListsProps[] = allLists;
    currentList.push({input});
    setNewAllList(currentList);
    setInput('');
  };

  return (
    <View style={{flex: 1}}>
      <BackHeader />
      <View style={{...style.container, paddingVertical: 10}}>
        <TextInput
          onChangeText={(text) => setInput(text)}
          style={style.textInput}
          value={input}
          placeholder="Hızlı erişim"
        />
        <TouchableOpacity
          onPress={handleCreate}
          activeOpacity={0.7}
          style={style.bg}>
          <Text
            style={{
              color: '#212121',
              fontWeight: 'bold',
              textTransform: 'uppercase',
            }}>
            KAYDET
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    flex: 1,
  },
  textInput: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 4,
    marginBottom: 10,
    backgroundColor: '#f6f6f6',
  },
  textH4: {
    fontWeight: '600',
    fontSize: 14,
    marginBottom: 6,
  },
  bg: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 7,
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: '#f6f6f6',
  },
});
