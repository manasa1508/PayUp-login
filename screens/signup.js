import React,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Formik } from 'formik';
import {View} from 'react-native'
import {Octicons,Ionicons,Fontisto} from '@expo/vector-icons'
import KeyboardAvoidingWrapper from '../components/KeyboardAvoidingWrapper';

import{
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle,
    SubTitle,
    StyledFormArea,
    LeftIcon,
    StyledInputLabel,
    StyledTextInput,
    StyledButton,
    ButtonText,
    RightIcon,
    Colors,
    MsgBox, 
    Line,
    ExtraView,
    ExtraText,
    TextLink,
    TextLinkContent
} from './../components/style'

const {brand,darkLight,primary}=Colors;

const Signup = ({navigation})=>{
    const [hidePassword, setHidePassword]=useState(true);
    return(
        <KeyboardAvoidingWrapper>
        <StyledContainer>
            <StatusBar style="dark"/>
            <InnerContainer>
                <PageTitle>PayUp</PageTitle>
                <SubTitle>Account SignUp</SubTitle>
                <Formik
                    initialValues={{userId:'',email: '',password:'',confirmPassword:''}}
                    onSubmit={(values)=>{
                        console.log(values);
                        navigation.navigate('Home')
                    }}
                >
                   {({handleChange, handleBlur,handleSubmit,values})=>(
                       <StyledFormArea>
                           <MyTextInput
                            label="Username"
                            icon="person"
                            placeholder="Type a handle name"
                            placeholderTextColor={darkLight}
                            onChangeText={handleChange('userId')}
                            onBlur={handleBlur('userId')}
                            value={values.userId}
                           />
                            <MyTextInput
                            label="Email Address"
                            icon="mail"
                            placeholder="johndoe@gmail.com"
                            placeholderTextColor={darkLight}
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                            keyboardType="email-address"
                           />

                        
                           <MyTextInput
                            label="Password"
                            icon="lock"
                            placeholder="Enter Password"
                            placeholderTextColor={darkLight}
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                            secureTextEntry={hidePassword}
                            isPassword={true}
                            hidePassword={hidePassword}
                            setHidePassword={setHidePassword}
                            
                           />
                           <MyTextInput
                            label="Confirm Password"
                            icon="lock"
                            placeholder="Confirm Password"
                            placeholderTextColor={darkLight}
                            onChangeText={handleChange('confirmPassword')}
                            onBlur={handleBlur('confirmPassword')}
                            value={values.confirmPassword}
                            secureTextEntry={hidePassword}
                            isPassword={true}
                            hidePassword={hidePassword}
                            setHidePassword={setHidePassword}
                            
                           />
                            <MsgBox>...</MsgBox>

                            <StyledButton onPress={handleSubmit}>
                                <ButtonText>
                                    Sign Up
                                </ButtonText>
                            </StyledButton>
                            <Line />
                            
                            <ExtraView>
                                <ExtraText>Already have an account? </ExtraText>
                                <TextLink onPress={()=>navigation.navigate('Login')}>
                                    <TextLinkContent>Login</TextLinkContent>
                                </TextLink>
                            </ExtraView>
                            
                       </StyledFormArea>
                   )
                   }     

                </Formik>
            </InnerContainer>
        </StyledContainer>
        </KeyboardAvoidingWrapper>
    )
};

const MyTextInput=({label,icon,isPassword,hidePassword,setHidePassword,...props})=>{
    return(
        <View>
          <LeftIcon>
                <Octicons name={icon} size={30} color={brand}/>
            </LeftIcon>   
            <StyledInputLabel>{label}</StyledInputLabel>   
            <StyledTextInput {...props}/>
            {isPassword && (
                <RightIcon onPress={()=>setHidePassword(!hidePassword)}>
                    <Ionicons name={hidePassword?'md-eye-off':'md-eye'}size={30} color={darkLight}/>
                </RightIcon>
            )}
        </View>
    )
}

export default Signup;