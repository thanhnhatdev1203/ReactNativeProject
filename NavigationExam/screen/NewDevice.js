import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ActionSheetIOS,
} from 'react-native';
import {ActionSheet, Root} from 'native-base';
import HeaderMain from './HeaderMain';
import {Picker} from '@react-native-picker/picker';
import DeviceManagement from './DeviceManagement';

const NewDevice = () => {
  takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
    });
  };
  choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
    });
  };
  onClickAddImage = () => {
    const BUTTONS = ['Take Photo', 'Choose Photo Library', 'Cancel'];
    ActionSheet.show(
      {
        options: BUTTONS,
        cancelButtonIndex: 2,
        title: 'Select a photo',
      },
      buttonIndex => {
        switch (buttonIndex) {
          case 0:
            break;
            this.takePhotoFromCamera();
          case 1:
            break;
            this.choosePhotoFromLibrary();
          default:
            break;
        }
      },
    );
  };
  const [selectedLanguage, setSelectedLanguage] = useState();
  return (
    <Root>
      <View style={{backgroundColor: '#6CC1FE', flex: 1}}>
        <HeaderMain />
        <Text style={{marginTop: 20, marginLeft: 10, color: 'white'}}>
          Thêm thiết bị mới :
        </Text>
        <View style={styles.sectionContainer}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              flexWrap: 'wrap',
              marginTop: 20,
              height: 50,
            }}>
            <Text style={styles.sectionTitle}>Tên thiết bị : </Text>
            <TextInput
              style={{
                backgroundColor: 'white',
                marginTop: 25,
                width: 130,
              }}></TextInput>
          </View>
          <View
            style={{
              flex: 2,
              flexDirection: 'row',
              flexWrap: 'wrap',
              marginTop: 70,
              height: 50,
            }}>
            <Text style={styles.sectionTitle}>Vị trí : </Text>
            <Picker
              selectedValue={selectedLanguage}
              style={{height: 10, marginTop: -70, width: 200}}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedLanguage(itemValue)
              }>
              <Picker.Item label="Phòng khách" value="phongkhach" />
              <Picker.Item label="Phòng ngủ" value="phongngu" />
              <Picker.Item label="Phòng họp" value="phonghop" />
              <Picker.Item label="Nhà bếp" value="nhabep" />
              <Picker.Item label="Nhà vệ sinh" value="nhavesinh" />
            </Picker>
          </View>
          <View
            style={{
              flex: 7,
              flexDirection: 'row',
              flexWrap: 'wrap',
              marginTop: 30,
              height: 50,
            }}>
            <Text style={styles.sectionTitle}>Hình ảnh : </Text>
            <TouchableOpacity onPress={this.onClickAddImage}>
              <Text style={styles.btnAddImg}>Chọn ảnh</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Root>
  );
};
const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    borderRadius: 25,
    backgroundColor: '#A9E0FF',
    paddingHorizontal: 20,
    marginTop: 50,
    marginBottom: 150,
    width: 300,
    marginLeft: 45,
  },
  btnAddImg: {
    marginTop: 25,
    marginLeft: 10,
    padding: 2,
    backgroundColor: 'white',
    borderWidth: 1,
  },
  sectionTitle: {
    fontSize: 18,
    marginTop: 25,
    fontWeight: '600',
    color: 'black',
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 310,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
export default NewDevice;
