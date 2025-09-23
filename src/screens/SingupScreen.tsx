/* eslint-disable react-native/no-inline-styles */
import {
  ActivityIndicator,
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import MaterialIcons from '@react-native-vector-icons/material-icons';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase/FirebaseInit';
import { useNavigation } from '@react-navigation/native';
import LoginScreen from './LoginScreen';

function SingupButton(p: any) {
  return (
    <View style={{ flexDirection: 'row', marginTop: 20 }}>
      <View
        style={{
          height: 70,
          flex: 1,
          justifyContent: 'center',
        }}
      >
        <Text
          style={{
            color: '#ffffffff',
            fontSize: 25,
            fontWeight: '600',
            marginLeft: 40,
          }}
        >
          Sign Up
        </Text>
      </View>
      <View
        style={{
          height: 70,
          flex: 1,
          justifyContent: 'center',
          alignItems: 'flex-end',
        }}
      >
        <TouchableOpacity onPress={p.sUser}>
          <View
            style={{
              height: 70,
              flex: 1,
              justifyContent: 'center',
              alignItems: 'flex-end',
            }}
          >
            <View
              style={{
                width: 50,
                height: 50,
                backgroundColor: '#367cfe',
                marginRight: 40,
                borderRadius: 100,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {p.saving ? (
                <ActivityIndicator animating={true} color="white" size={30} />
              ) : (
                <MaterialIcons name="arrow-forward" size={30} color="white" />
              )}
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function BottomSection() {
  return (
    <TouchableOpacity onPress={LoginScreen}>
      <View style={{ marginTop: 70 }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
            borderRadius: 100,
            width: 170,
            height: 50,
            marginRight: 30,
            marginLeft: '10%',
            alignSelf: 'center',
          }}
        >
          <Text
            style={{
              color: 'black',
              fontSize: 25,
              fontWeight: '500',
            }}
          >
            Sign In
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

function SingupSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [saving, setSaving] = useState(false);

  const nav: any = useNavigation();

  const SaveUser = async () => {
    if (!name || !email || !password) {
      Alert.alert('Error', 'All fields are required!');
      return;
    }

    setSaving(true);
    try {
      await addDoc(collection(db, 'Users'), {
        name,
        email,
        password, // ⚠️ don’t save plain text passwords in production
      });
      setSaving(false);
      Alert.alert('Info', 'User saved successfully');
      nav.navigate('Login');
    } catch (error) {
      setSaving(false);
      Alert.alert('Error', 'Failed to save user');
    }
  };

  return (
    <View style={{ marginTop: 100 }}>
      <View
        style={{
          backgroundColor: 'white',
          borderRadius: 20,
          height: 60,
          marginHorizontal: 20,
          justifyContent: 'center',
          paddingLeft: 20,
        }}
      >
        <TextInput
          onChangeText={v => setName(v)}
          placeholder="Name"
          style={{ fontSize: 20 }}
        />
      </View>

      <View
        style={{
          backgroundColor: 'white',
          borderRadius: 20,
          height: 60,
          marginHorizontal: 20,
          justifyContent: 'center',
          paddingLeft: 20,
          marginTop: 20,
        }}
      >
        <TextInput
          onChangeText={v => setEmail(v)}
          placeholder="Your Email"
          style={{ fontSize: 20 }}
          keyboardType="email-address"
        />
      </View>

      <View
        style={{
          backgroundColor: 'white',
          borderRadius: 20,
          height: 60,
          marginHorizontal: 20,
          justifyContent: 'center',
          paddingLeft: 20,
          marginTop: 20,
        }}
      >
        <TextInput
          onChangeText={v => setPassword(v)}
          secureTextEntry={true}
          placeholder="Password"
          style={{ fontSize: 20 }}
        />
      </View>
      <SingupButton sUser={SaveUser} saving={saving} />
      <BottomSection />
    </View>
  );
}

const SingupScreen = () => {
  return (
    <View style={sty.container}>
      <Image
        style={{ width: '100%', height: '100%', position: 'absolute' }}
        source={require('../../assets/img/Singup1.png')}
        resizeMode="cover"
      />

      <Text
        style={{
          fontSize: 50,
          fontWeight: '600',
          color: '#fff',
          marginTop: 100,
          marginLeft: 20,
          fontFamily: 'Lobster-Regular',
        }}
      >
        {'Create Account'}
      </Text>

      <KeyboardAwareScrollView keyboardShouldPersistTaps={'never'}>
        <SingupSection />
      </KeyboardAwareScrollView>
    </View>
  );
};

export default SingupScreen;

const sty = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
