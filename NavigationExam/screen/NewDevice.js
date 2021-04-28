import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image,
  Alert,
} from 'react-native';
import uuid from 'react-native-uuid';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ActionSheet, Root} from 'native-base';
import HeaderMain from './HeaderMain';
import {Picker} from '@react-native-picker/picker';
import ImagePicker from 'react-native-image-crop-picker';
import HomeScreen from './HomeScreen';
import {loading} from './HomeScreen';
function NewDevice({navigation}) {
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [image, setImage] = useState('https://reactjs.org/logo-og.png');
  const [device, setDevice] = useState([]);
  const load = async () => {
    try {
      value = await AsyncStorage.getItem('MyDevice').then(asyncData => {
        let jsonObj = JSON.parse(asyncData) || [];
        setDevice(jsonObj);
        console.log('Tui dang load');
      });
    } catch (error) {
      console.log('error=========', error);
    }
  };
  useEffect(() => {
    load();
  }, []);
  const handleSubmit = async () => {
    console.log('call handleSubmit');
    const formValues = {
      id: uuid.v4(),
      location,
      image,
      title,
    };
    console.log('device======', device.length > 0);
    let newData = [formValues];
    if (device.length > 0) {
      newData = [...device, formValues];
    }
    console.log('newData=======', newData);
    setDevice(newData);
    save(newData);
  };
  console.log('device=======', device);
  choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setImage(image.path);
    });
  };
  onValidText = () => {
    if (!title.trim()) {
      alert('Please Enter Name');
      return;
    }
  };
  onClickAddImage = () => {
    const BUTTONS = ['Choose Photo Library', 'Cancel'];
    ActionSheet.show(
      {
        options: BUTTONS,
        cancelButtonIndex: 1,
        title: 'Select a photo',
      },
      buttonIndex => {
        switch (buttonIndex) {
          case 0:
            this.choosePhotoFromLibrary();
          default:
            break;
        }
      },
    );
  };
  return (
    <Root>
      <View style={{backgroundColor: '#6CC1FE', flex: 1}}>
        <HeaderMain navigation />
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
            <Text
              style={{
                fontSize: 18,
                fontWeight: '600',
                color: 'black',
              }}>
              Tên thiết bị :{' '}
            </Text>
            <TextInput
              autoCorrect={false}
              maxLength={30}
              style={{
                backgroundColor: 'white',
                width: 130,
              }}
              onChangeText={e => {
                setTitle(e);
              }}
            />
            {/* <Text>{getData}</Text> */}
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
              selectedValue={location}
              style={{
                height: 10,
                marginTop: -70,
                width: 200,
              }}
              onValueChange={(itemValue, itemIndex) => setLocation(itemValue)}>
              <Picker.Item label="Phòng khách" value="Phòng khách" />
              <Picker.Item label="Phòng ngủ" value="Phòng ngủ" />
              <Picker.Item label="Phòng họp" value="Phòng họp" />
              <Picker.Item label="Nhà bếp" value="Nhà bếp" />
              <Picker.Item label="Nhà vệ sinh" value="Nhà vệ sinh" />
            </Picker>
          </View>
          <View
            style={{
              flex: 7,
              flexDirection: 'row',
              flexWrap: 'wrap',
              marginTop: 65,
              height: 50,
            }}>
            <Text style={styles.sectionTitle}>Hình ảnh : </Text>
            <TouchableOpacity onPress={this.onClickAddImage}>
              <Text style={styles.btnAddImg}>Chọn ảnh</Text>
            </TouchableOpacity>
            <View style={{width: 250, height: 130}}>
              <Image
                source={{uri: image}}
                resizeMode="contain"
                style={[styles.icon]}
              />
            </View>
          </View>
          <TouchableOpacity
            onPress={handleSubmit}
            style={{alignItems: 'center'}}>
            <View>
              <Text
                style={{
                  color: 'white',
                  fontSize: 22,
                  fontWeight: '500',
                  textAlign: 'center',
                  marginBottom: 20,
                  width: 130,
                  height: 30,
                  backgroundColor: '#C4C4C4',
                }}>
                THÊM
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </Root>
  );
}
const save = async newData => {
  try {
    await AsyncStorage.setItem('MyDevice', JSON.stringify(newData));
    alert('Thêm thiết bị thành công', newData);
  } catch (err) {
    console.log('errorrrrr ========', err);
  }
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
    width: 100,
    height: 100,
    marginLeft: 80,
    alignItems: 'center',
    marginTop: 10,
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
