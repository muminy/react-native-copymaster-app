import React, {createContext, useContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {CopyProps, AllListsProps} from './types';

export const CopyContext = createContext<CopyProps>({
  allLists: [],
  setNewAllList: () => {},
});

export const ContextProvider = (props: {children: any}) => {
  const [allLists, setAllLists] = useState<AllListsProps[] | []>([]);

  const getAllLists = async () => {
    const lists = await AsyncStorage.getItem('AllLists');
    if (!lists)
      return await AsyncStorage.setItem('AllLists', JSON.stringify([]));
    const parseLists = JSON.parse(lists);
    setAllLists(parseLists);
  };

  useEffect(() => {
    getAllLists();
  }, []);

  const setNewAllList = async (newallList: AllListsProps[]) => {
    await AsyncStorage.setItem('AllLists', JSON.stringify(newallList));
    setAllLists(() => [...newallList]);
  };

  return (
    <CopyContext.Provider value={{allLists, setNewAllList}}>
      {props.children}
    </CopyContext.Provider>
  );
};

export const useCopyContext = () => useContext(CopyContext);
