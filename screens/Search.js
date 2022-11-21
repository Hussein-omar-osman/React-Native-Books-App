import {
  StyleSheet,
  View,
  SafeAreaView,
  TextInput,
  FlatList,
  Keyboard,
  ActivityIndicator,
} from 'react-native';
import React, { useCallback, useState } from 'react';
import { COLORS, FONTS, SIZES, icons } from '../constants';
import {
  AntDesign,
  FontAwesome,
  Foundation,
  Ionicons,
} from '@expo/vector-icons';
import getData from '../constants/getData';
import { useNavigation } from '@react-navigation/native';
import BookList from '../components/BookList';

const Search = () => {
  const navigation = useNavigation();
  const [booksData, setBooksData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const getData = async (search) => {
    try {
      const res = await fetch(
        `https://www.googleapis.com/books/v1/volumes/?q=${search}&country=US&maxResults=20`
      );
      const data = res.json();
      return data;
    } catch (err) {
      return err;
    }
  };
  const onSubmit = useCallback(() => {
    if (!search) return;
    setLoading(true);
    Keyboard.dismiss();
    getData(search)
      .then((data) => {
        setBooksData(data);
        console.log('something came back');
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [search]);

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
          name='leftcircle'
          size={27}
          color={COLORS.primary}
          onPress={() => {
            Keyboard.dismiss();
            navigation.navigate('Home');
          }}
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
          autoCapitalize='none'
          autoFocus
          returnKeyType='search'
          value={search}
          onChangeText={(text) => setSearch(text)}
          placeholder='search...'
          onSubmitEditing={onSubmit}
        />
        <FontAwesome
          name='search'
          size={27}
          color='#EFF5F5'
          onPress={onSubmit}
        />
      </View>
      {loading ? (
        <View style={{ marginTop: 50 }}>
          <ActivityIndicator />
        </View>
      ) : (
        <View style={{ marginTop: 1 }}>
          <View
            style={{
              marginTop: SIZES.radius,
              paddingLeft: 10,
            }}
          >
            <FlatList
              data={booksData.items}
              initialNumToRender={5}
              keyExtractor={(item) => item.id}
              renderItem={_renderitem}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

const _renderitem = ({ item }) => <BookList item={item} />;

export default Search;

const styles = StyleSheet.create({});
