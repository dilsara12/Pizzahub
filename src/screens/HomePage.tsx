/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import React from 'react';
import MaterialIcons from '@react-native-vector-icons/material-icons';
import Carousel from 'react-native-reanimated-carousel';

const HomePage = () => {
  const { width, height } = useWindowDimensions();
  return (
    <View style={sty.container}>
      <Image
        style={{
          width: width,

          height: height,
          position: 'absolute',
          padding: 50,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 35,
        }}
        source={require('../../assets/img/Home_back.jpg')}
        resizeMode="cover"
      />
      <Header />
      <CarouselComponent />
      <HomeButton />
      <View
        style={{
          flex: 1,
          margin: '5%',
          justifyContent: 'flex-end',
        }}
      >
        <Text
          style={{
            color: '#ffffffff',
            textAlign: 'center',
            marginBottom: '10%',
            fontWeight: '600',
          }}
        >
          {'Indulge in Culinary Excellence – Explore \n More at '}
          <Text
            style={{
              color: '#00D1FF',
              textAlign: 'center',
              marginBottom: '5%',
            }}
          >
            {'vikipizza.lk'}
          </Text>
        </Text>
      </View>
    </View>
  );
};

const Header = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        padding: '5%',
        //backgroundColor: 'red',
        marginTop: 40,
        alignItems: 'center',
      }}
    >
      <Image
        style={{ width: 40, height: 40, borderRadius: 100 }}
        source={require('../../assets/img/Pizzaphoto.jpg')}
      />
      <View
        style={{
          flex: 1,
          //backgroundColor: 'yellow',
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            fontSize: 25,
            fontFamily: 'Lobster-Regular',
            color: 'white',
          }}
        >
          Viki Pizaa
        </Text>
        <Text style={{ fontSize: 16, color: 'white' }}>
          Best Pizza in Anywhere
        </Text>
      </View>

      <View
        style={{ width: 40, height: 40, alignItems: 'center', marginTop: 20 }}
      >
        <MaterialIcons name="notifications-none" size={30} color="white" />
      </View>
    </View>
  );
};

const CarouselComponent = () => {
  const { width } = useWindowDimensions();
  const img: any[] = [
    require('../../assets/img/Poster1.jpg'),
    require('../../assets/img/Poster2.jpg'),
    require('../../assets/img/Poster3.jpg'),
  ];

  return (
    <View style={{}}>
      <Carousel
        loop
        width={width}
        height={width / 1.8}
        autoPlay={true}
        data={img}
        autoPlayInterval={3000}
        renderItem={({ item }) => (
          <View
            style={{
              justifyContent: 'center',
              margin: '5%',
              borderRadius: 10,
            }}
          >
            <Image
              source={item}
              style={{ width: '100%', height: '100%', borderRadius: 10 }}
            />
          </View>
        )}
      />
    </View>
  );
};

type Props = {
  img: any;
  text: string;
};

const MenuButton = (p: Props) => {
  const { width } = useWindowDimensions();

  return (
    <View
      style={{
        width: width / 3.5,
        height: width / 3.5,
        backgroundColor: p.text ? '#f4f4f4' : '#ffffff00',
        padding: '5%',
        borderRadius: 10,
        marginTop: 20,
      }}
    >
      {p.text && (
        <Image
          style={{
            width: '100%',
            height: '100%',
            marginTop: -12,
            alignSelf: 'center',
          }}
          source={p.img}
        />
      )}

      <Text
        style={{
          color: 'black',
          textAlign: 'center',
          fontSize: 15,
          marginTop: -5,
          fontWeight: '600',
        }}
      >
        {p.text}{' '}
      </Text>
    </View>
  );
};

const HomeButton = () => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}
      >
        <MenuButton
          img={require('../../assets/img/New.png')}
          text={'Newly Added'}
        />
        <MenuButton
          img={require('../../assets/img/pizza_menu.png')}
          text={'Pizza Menu'}
        />
        <MenuButton
          img={require('../../assets/img/fav.png')}
          text={'Favourite'}
        />
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginTop: 20,
        }}
      >
        <MenuButton
          img={require('../../assets/img/food.png')}
          text={'Food & Beverage'}
        />
        <MenuButton
          img={require('../../assets/img/setting.png')}
          text={'Settings'}
        />
        <MenuButton
          img={require('../../assets/img/Contact.png')}
          text={'Contact Us'}
        />
      </View>
    </View>
  );
};

const sty = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
});

export default HomePage;
