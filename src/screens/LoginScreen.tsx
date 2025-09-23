/* eslint-disable react-native/no-inline-styles */ import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import MaterialIcons from '@react-native-vector-icons/material-icons';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase/FirebaseInit';
import { ActivityIndicator } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

function SinginButton(p: any) {
  const u_email = p.u_email;
  const u_password = p.u_password;
  const [IsLoging, setIsLoging] = useState(false);

  function getuser() {
    getDocs(
      query(
        collection(db, 'Users'),
        where('email', '==', u_email.toLowerCase()),
      ),
    )
      .then(ds => {
        setIsLoging(false);
        if (ds.size == 1) {
          const dt = ds.docs[0].data();

          if (dt.password == u_password) {
            AsyncStorage.setItem('email', u_email.toLowerCase());
            p.sb_stack.navigate('Home');
          } else {
            Alert.alert('Message', 'Email or Password is incorrect', [
              { text: 'OK' },
            ]);
          }
        } else {
          Alert.alert('Message', 'Email or Password is incorrect', [
            { text: 'OK' },
          ]);
        }
      })
      .catch(_e => {
        setIsLoging(false);
        Alert.alert('Error', 'Something went wrong', [{ text: 'OK' }]);
      });
  }
  function gotohome() {
    setIsLoging(true);
    getuser();
  }
  return (
    <View style={{ flexDirection: 'row', marginTop: 20 }}>
      <View
        style={{
          height: 70,
          flex: 3,
          justifyContent: 'center',
        }}
      >
        <Text
          style={{
            color: '#fff',
            fontSize: 25,
            fontWeight: '800',
            marginLeft: 40,
          }}
        >
          Sign In
        </Text>
      </View>
      <TouchableOpacity onPress={gotohome}>
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
            {IsLoging ? (
              <ActivityIndicator animating={true} color="white" size={30} />
            ) : (
              <MaterialIcons name="arrow-forward" size={30} color="white" />
            )}
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}
function BottomSection(_p: { bs_stack: any }) {
  const stack = _p.bs_stack;
  function goToSignup() {
    stack.navigate('Signup');
  }
  return (
    <View style={{ flexDirection: 'row', marginTop: 70 }}>
      <TouchableOpacity onPress={goToSignup}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
            borderRadius: 100,
            width: 150,
            height: 40,
            marginLeft: 30,
          }}
        >
          <Text style={{ color: '#000', fontSize: 15, fontWeight: '500' }}>
            Sign Up
          </Text>
        </View>
      </TouchableOpacity>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
          borderRadius: 100,
          width: 40,
          height: 40,
          marginRight: 30,
          marginLeft: '10%',
        }}
      >
        <Text style={{ color: 'black', fontSize: 15, fontWeight: '500' }}>
          Forget Password
        </Text>
      </View>
    </View>
  );
}
function LoginField(p: { lf_stack: any }) {
  const stack = p.lf_stack;
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
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
          placeholder="Email"
          onChangeText={v => setUserEmail(v)}
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
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={v => setUserPassword(v)}
          style={{ fontSize: 20 }}
        />
      </View>
      <SinginButton
        u_email={userEmail}
        u_password={userPassword}
        sb_stack={stack}
      />
      <BottomSection bs_stack={stack} />
    </View>
  );
}
const LoginScreen = (ls_props: any) => {
  const stack = ls_props.navigation;

  useEffect(() => {
    AsyncStorage.getItem('email').then(t => {
      if (t) {
        stack.navigate('Home');
      }
    });
  }, [stack]);

  return (
    <View style={sty.container}>
      <Image
        style={{ width: '100%', height: '100%', position: 'absolute' }}
        source={require('../../assets/img/Pizza_background2.jpg')}
        resizeMode="cover"
      />
      <Text
        style={{
          fontSize: 50,
          fontWeight: '600',
          color: '#fff',
          marginTop: 100,
          marginLeft: 100,
          fontFamily: 'Lobster-Regular',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {'Viki Pizza'}
      </Text>
      <KeyboardAwareScrollView keyboardShouldPersistTaps={'never'}>
        <LoginField lf_stack={stack} />
      </KeyboardAwareScrollView>
    </View>
  );
};
export default LoginScreen;
const sty = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
});
