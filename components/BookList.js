import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import React, { memo } from 'react';
import { COLORS, FONTS, SIZES, icons } from '../constants';
import LineDivider from './LineDivider';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome, Foundation, Ionicons } from '@expo/vector-icons';

const BookList = ({ item }) => {
  const navigation = useNavigation();
  return (
    <View style={{ marginVertical: 15 }}>
      <TouchableOpacity
        style={{ flex: 1, flexDirection: 'row' }}
        onPress={() =>
          navigation.navigate('BookDetail2', {
            id: item.id,
          })
        }
      >
        {/* Book Cover */}
        <Image
          source={{
            uri: item.volumeInfo?.imageLinks?.thumbnail,
          }}
          resizeMode='cover'
          style={{ width: 100, height: 150, borderRadius: 10 }}
        />

        <View style={{ flex: 1, marginLeft: SIZES.radius }}>
          {/* Book name and author */}
          <View>
            <Text
              style={{
                paddingRight: SIZES.padding,
                ...FONTS.h2,
                color: COLORS.white,
              }}
            >
              {item.volumeInfo.title}
            </Text>
            <Text style={{ ...FONTS.h3, color: COLORS.lightGray }}>
              {item.volumeInfo?.authors?.join(', ')}
            </Text>
          </View>

          {/* Book Info */}
          <View style={{ flexDirection: 'row', marginTop: SIZES.radius }}>
            <Foundation
              name='page-multiple'
              size={20}
              color={COLORS.lightGray}
            />
            <Text
              style={{
                ...FONTS.body4,
                color: COLORS.lightGray,
                paddingHorizontal: 5,
                paddingRight: 17,
              }}
            >
              {item.volumeInfo.pageCount || '---'}
            </Text>
            <Ionicons name='time-sharp' size={20} color={COLORS.lightGray} />
            <Text
              style={{
                ...FONTS.body4,
                color: COLORS.lightGray,
                paddingHorizontal: 5,
                paddingRight: 17,
              }}
            >
              {item.volumeInfo.publishedDate || '---'}
            </Text>
            <FontAwesome name='language' size={20} color={COLORS.lightGray} />
            <Text
              style={{
                ...FONTS.body4,
                color: COLORS.lightGray,
                paddingHorizontal: SIZES.radius,
              }}
            >
              {item.volumeInfo.language || '---'}
            </Text>
          </View>

          {/* Genre */}
          <View style={{ flexDirection: 'row', marginTop: SIZES.base }}>
            {item.volumeInfo?.categories?.map((cat, i) => (
              <View
                key={i}
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: SIZES.base,
                  marginRight: SIZES.base,
                  backgroundColor: COLORS.darkGreen,
                  height: 40,
                  borderRadius: SIZES.radius,
                }}
              >
                <Text style={{ ...FONTS.body3, color: COLORS.lightGreen }}>
                  {cat}
                </Text>
              </View>
            ))}
            {/* {item.genre.includes('Adventure') && (
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: SIZES.base,
                    marginRight: SIZES.base,
                    backgroundColor: COLORS.darkGreen,
                    height: 40,
                    borderRadius: SIZES.radius,
                  }}
                >
                  <Text style={{ ...FONTS.body3, color: COLORS.lightGreen }}>
                    Adventure
                  </Text>
                </View>
              )}
              {item.genre.includes('Romance') && (
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: SIZES.base,
                    marginRight: SIZES.base,
                    backgroundColor: COLORS.darkRed,
                    height: 40,
                    borderRadius: SIZES.radius,
                  }}
                >
                  <Text style={{ ...FONTS.body3, color: COLORS.lightRed }}>
                    Romance
                  </Text>
                </View>
              )}
              {item.genre.includes('Drama') && (
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: SIZES.base,
                    marginRight: SIZES.base,
                    backgroundColor: COLORS.darkBlue,
                    height: 40,
                    borderRadius: SIZES.radius,
                  }}
                >
                  <Text style={{ ...FONTS.body3, color: COLORS.lightBlue }}>
                    Drama
                  </Text>
                </View>
              )} */}
          </View>
        </View>
      </TouchableOpacity>

      {/* Bookmark Button */}
      <TouchableOpacity
        style={{ position: 'absolute', top: 5, right: 15 }}
        onPress={() => console.log('Bookmark')}
      >
        <Image
          source={icons.bookmark_icon}
          resizeMode='contain'
          style={{
            width: 25,
            height: 25,
            tintColor: COLORS.lightGray,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default memo(BookList);

const styles = StyleSheet.create({});
