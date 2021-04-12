import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Checklist4 from '../../Checklist4';
import Checklist5 from '../../Checklist5';
import Checklist6 from '../../Checklist6';
import Checklist7 from '../../Checklist7';
import Checklist2 from '../../Checklist2';
import Checklist8 from '../../Checklist8';
function HomeScreen(params) {
    return (
        <ScrollView>
            <Checklist2/>
            <Checklist3/>
            <Checklist4/>
            <Checklist5/>
            <Checklist6/>
            <Checklist7/>
            <Checklist8/>
        </ScrollView>
    )
}
export default HomeScreen;