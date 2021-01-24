import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Alert,
  Animated,
} from 'react-native';
import {CopyIcon, DeleteIcon} from '../Helpers/icons';
import Clipboard from '@react-native-community/clipboard';
import {useCopyContext} from '../Helpers/Context';
import {Easing} from 'react-native-reanimated';

export default (props: {
  text: string;
  isSecret: boolean;
  index: number;
  copyed: () => void;
}) => {
  const animation = useRef(new Animated.Value(0)).current;

  const handleCopyText = () => {
    Clipboard.setString(props.text);
    props.copyed();
  };
  const [modalVisible, setModalVisible] = useState(false);
  const deleteItem = () => {
    setModalVisible(true);
  };
  const {allLists, setNewAllList} = useCopyContext();

  const handleDelete = () => {
    setModalVisible(false);
    allLists.splice(props.index, 1);
    setNewAllList(allLists);
  };

  return (
    <View style={{flex: 1, position: 'relative'}}>
      <TouchableOpacity
        onPress={handleCopyText}
        activeOpacity={0.6}
        style={style.container}>
        <Text>{props.text}</Text>
        <View style={style.bts}>
          <TouchableOpacity
            onPress={deleteItem}
            style={style.btn}
            activeOpacity={0.7}>
            <DeleteIcon size={16} color="#212121" />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={style.centeredView}>
          <View style={style.modalView}>
            <Text style={style.modalText}>
              Bunu silmek istediğine emin misin?
            </Text>
            <View style={style.actions}>
              <TouchableOpacity
                style={{
                  ...style.openButton,
                  backgroundColor: '#f9f9f9',
                }}
                activeOpacity={0.7}
                onPress={handleDelete}>
                <Text style={style.textStyle}>Sil</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{...style.openButton}}
                activeOpacity={0.7}
                onPress={() => {
                  setModalVisible(false);
                }}>
                <Text style={{...style.textStyle, color: '#212121'}}>
                  İptal
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#f6f6f6',
    zIndex: 1,
    marginBottom: 5,
    backgroundColor: '#f7f7f7',
    paddingLeft: 15,
  },
  actions: {
    flexDirection: 'row',
    marginTop: 'auto',
  },
  btn: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  bts: {
    flexDirection: 'row',
  },
  centeredView: {
    flex: 1,
    backgroundColor: '#00000042',
  },
  modalView: {
    backgroundColor: 'white',
    alignItems: 'center',
    marginTop: 'auto',
    paddingTop: 10,
  },
  openButton: {
    padding: 10,
    flex: 0.5,
    backgroundColor: '#f9f9f9',
  },
  textStyle: {
    color: 'red',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
