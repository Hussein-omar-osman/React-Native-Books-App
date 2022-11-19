import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { COLORS, FONTS, SIZES, icons, images } from '../constants';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import getData from '../constants/getData';
import { useNavigation } from '@react-navigation/native';

const Search = () => {
  const navigation = useNavigation();
  const [booksData, setBooksData] = useState({});
  const getData = async (search) => {
    try {
      const res = await fetch(
        `https://www.googleapis.com/books/v1/volumes/?q=${search}&country=US`
      );
      const data = res.json();
      return data;
    } catch (err) {
      return err;
    }
  };
  useEffect(() => {
    getData('React')
      .then((data) => {
        setBooksData(data);
        console.log('something came back');
      })
      .catch((e) => console.log(e));
  }, []);
  // console.log(booksData);

  const renderItem = ({ item }) => {
    return (
      <View style={{ marginVertical: 15 }}>
        <TouchableOpacity
          style={{ flex: 1, flexDirection: 'row' }}
          // onPress={() =>
          //   navigation.navigate('BookDetail', {
          //     book: item,
          //   })
          // }
        >
          {/* Book Cover */}
          <Image
            source={{
              uri: item.volumeInfo.imageLinks.thumbnail,
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
                {item.volumeInfo.authors[0]}
              </Text>
            </View>

            {/* Book Info */}
            <View style={{ flexDirection: 'row', marginTop: SIZES.radius }}>
              <Image
                source={icons.page_filled_icon}
                resizeMode='contain'
                style={{
                  width: 20,
                  height: 20,
                  tintColor: COLORS.lightGray,
                }}
              />
              <Text
                style={{
                  ...FONTS.body4,
                  color: COLORS.lightGray,
                  paddingHorizontal: SIZES.radius,
                }}
              >
                {item.volumeInfo.pageCount}
              </Text>

              <Image
                source={icons.read_icon}
                resizeMode='contain'
                style={{
                  width: 20,
                  height: 20,
                  tintColor: COLORS.lightGray,
                }}
              />
              <Text
                style={{
                  ...FONTS.body4,
                  color: COLORS.lightGray,
                  paddingHorizontal: SIZES.radius,
                }}
              >
                {item.volumeInfo.publishedDate}
              </Text>
            </View>

            {/* Genre */}
            {/* <View style={{ flexDirection: 'row', marginTop: SIZES.base }}>
              {item.genre.includes('Adventure') && (
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
              )}
            </View> */}
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

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.black }}>
      <View
        style={{
          flexDirection: 'row',
          padding: 15,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 7,
        }}
      >
        <AntDesign
          // style={{ flex: 1 }}
          name='leftcircle'
          size={27}
          color={COLORS.primary}
          onPress={() => navigation.navigate('Home')}
        />
        <TextInput
          style={{
            flexGrow: 1,
            backgroundColor: '#EFF5F5',
            marginHorizontal: 13,
            padding: 12,
            borderRadius: 10,
            color: 'black',
          }}
          placeholder='search...'
        />
        <FontAwesome
          name='search'
          size={27}
          // color={COLORS.primary}
          color='#EFF5F5'
        />
      </View>
      <View style={{ marginTop: 5 }}>
        <View
          style={{
            marginTop: SIZES.radius,
            paddingLeft: 10,
          }}
        >
          <FlatList
            data={booksData.items}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({});
