
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Dimensions,
} from 'react-native';
const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        padding: 20,
        fontSize : 50,
        color : 'red'
    },
    red1: {
        width: 150,
        height: 150,
        marginTop: 100,
        backgroundColor: 'red',
    },
    red2:{
        width: 150, height: 150, backgroundColor: 'red' ,
    },
    blue1 :{     
            width: 150, height: 150, backgroundColor: 'blue', alignSelf: 'flex-start',
            position: 'absolute',
            top: 75,
            left: 75,
    },
    blue2 :{
        width: 150, height: 150, backgroundColor: 'blue',
        position: 'absolute',
        top: 75,
        left: 75,
        zIndex: 1
    },
    green1 : {
        width: 150, height: 150, backgroundColor: 'green', alignSelf: 'flex-start',
        position: 'absolute',
        top: 75,
        left: 75
    },
    green2 : {
        width: 150, height: 150, backgroundColor: 'green',
        position: 'absolute',
        top: 150,
        left: 150,
    },
    red3 : { width: 150, height: 150, backgroundColor: 'red' },
    yellow : {
        width: 70, height: 70, backgroundColor: 'yellow',
        position: 'absolute',
        top: 60,
        borderRadius: 100,
        left: 60,
    },
    blue3 : {
        width: 150, height: 150, backgroundColor: 'blue',
        position: 'absolute',
        top: 95,
        left: 95,
    }
});
export default styles ;