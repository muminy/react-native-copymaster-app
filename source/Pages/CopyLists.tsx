import React, {useEffect, useRef, useState} from 'react';
import {FlatList, View, Text, Animated} from 'react-native';
import CopyItem from '../Components/CopyItem';
import Header from '../Components/Header';
import {useCopyContext} from '../Helpers/Context';

export default (props: {navigation: any}) => {
  const {allLists} = useCopyContext();

  const animation = useRef(new Animated.Value(0)).current;

  const handleCopyed = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();

    setTimeout(() => {
      Animated.timing(animation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }, 1000);
  };
  return (
    <View style={{flex: 1, position: 'relative'}}>
      <Header title="Senin Listen" />

      {allLists.length ? (
        <FlatList
          data={allLists}
          keyExtractor={(item) => item.input}
          renderItem={(props: {item: any; index: number}) => (
            <CopyItem
              copyed={handleCopyed}
              text={props.item.input}
              index={props.index}
              isSecret={props.item.isSecret}
            />
          )}
        />
      ) : (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>Henüz birşey eklemedin.</Text>
        </View>
      )}

      <Animated.View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          paddingVertical: 10,
          margin: 10,
          backgroundColor: '#f7f7f7',
          opacity: animation,
          borderRadius: 3,
          borderWidth: 1,
          borderColor: '#dddddd',
        }}>
        <Text style={{color: '#212121', fontWeight: 'bold'}}>Kopyalandı</Text>
      </Animated.View>
    </View>
  );
};
