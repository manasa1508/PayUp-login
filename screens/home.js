import React,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Formik } from 'formik';
import {View} from 'react-native'
import {Octicons,Ionicons,Fontisto} from '@expo/vector-icons'

import{
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle,
} from './../components/style'


const Home = ()=>{
    return(
        
        <StyledContainer>
            <StatusBar style="dark"/>
            <InnerContainer>
                <PageLogo resizeMode="cover" source={require('./../assets/img/logoSmall.png')}/>
                <PageTitle>PayUp</PageTitle>
            </InnerContainer>
        </StyledContainer>
    )
};

export default Home;