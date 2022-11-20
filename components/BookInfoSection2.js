import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import { COLORS, FONTS, SIZES, icons } from '../constants';
import LineDivider from './LineDivider';

const BookInfoSection2 = ({ book }) => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={{ uri: book?.volumeInfo?.imageLinks?.thumbnail }}
        resizeMode='cover'
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        }}
      />

      {/* Color Overlay */}
      <View
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          // backgroundColor: 'rgba(255, 255, 255, 0.7)',
          backgroundColor: 'rgba(239, 245, 245, 0.8)',
        }}
      ></View>

      {/* Navigation header */}
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: SIZES.radius,
          height: 80,
          alignItems: 'flex-end',
        }}
      >
        <TouchableOpacity
          style={{ marginLeft: SIZES.base }}
          onPress={() => navigation.goBack()}
        >
          <Image
            source={icons.back_arrow_icon}
            resizeMode='contain'
            style={{
              width: 25,
              height: 25,
              tintColor: book.navTintColor,
            }}
          />
        </TouchableOpacity>

        <View
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
          <Text style={{ ...FONTS.h3, color: 'black' }}>Book Detail</Text>
        </View>

        <TouchableOpacity
          style={{ marginRigth: SIZES.base }}
          onPress={() => console.log('Click More')}
        >
          <Image
            source={icons.more_icon}
            resizeMode='contain'
            style={{
              width: 30,
              height: 30,
              tintColor: book.navTintColor,
              alignSelf: 'flex-end',
            }}
          />
        </TouchableOpacity>
      </View>

      {/* Book Cover */}
      <View
        style={{ flex: 5, paddingTop: SIZES.padding2, alignItems: 'center' }}
      >
        <Image
          source={{ uri: book?.volumeInfo?.imageLinks?.thumbnail }}
          resizeMode='contain'
          style={{
            flex: 1,
            width: 150,
            height: 'auto',
          }}
        />
      </View>

      {/* Book Name and Author */}
      <View
        style={{ flex: 1.8, alignItems: 'center', justifyContent: 'center' }}
      >
        <Text style={{ ...FONTS.h2, color: 'black' }}>
          {book.volumeInfo?.title}
        </Text>
        <Text style={{ ...FONTS.body3, color: 'black' }}>
          {book.volumeInfo?.authors?.[0]}
        </Text>
      </View>

      {/* Book Info */}
      <View
        style={{
          flexDirection: 'row',
          paddingVertical: 20,
          margin: SIZES.padding,
          borderRadius: SIZES.radius,
          backgroundColor: 'rgba(0,0,0,0.3)',
        }}
      >
        {/* Rating */}
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text style={{ ...FONTS.h3, color: COLORS.white }}>
            {book.volumeInfo?.averageRating || '---'}
          </Text>
          <Text style={{ ...FONTS.body4, color: COLORS.white }}>Rating</Text>
        </View>

        <LineDivider />

        {/* Pages */}
        <View
          style={{
            flex: 1,
            paddingHorizontal: SIZES.radius,
            alignItems: 'center',
          }}
        >
          <Text style={{ ...FONTS.h3, color: COLORS.white }}>
            {book.volumeInfo?.pageCount || '---'}
          </Text>
          <Text style={{ ...FONTS.body4, color: COLORS.white }}>
            Number of Page
          </Text>
        </View>

        <LineDivider />

        {/* Language */}
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text style={{ ...FONTS.h3, color: COLORS.white }}>
            {book.volumeInfo?.language || '---'}
          </Text>
          <Text style={{ ...FONTS.body4, color: COLORS.white }}>Language</Text>
        </View>
      </View>
    </View>
  );
};

export default BookInfoSection2;
