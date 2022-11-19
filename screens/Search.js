import { StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';
import { COLORS } from '../constants';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import getData from '../constants/getData';

const Search = () => {
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
      .then((data) => setBooksData(data))
      .catch((e) => console.log(e));
  }, []);
  console.log(booksData);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.black }}>
      <View
        style={{
          flexDirection: 'row',
          padding: 15,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <AntDesign
          // style={{ flex: 1 }}
          name='leftcircle'
          size={27}
          color={COLORS.primary}
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
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({});
