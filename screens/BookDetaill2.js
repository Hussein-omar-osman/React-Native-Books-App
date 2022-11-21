import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { COLORS } from '../constants';
import {
  BookInfoSection,
  BookDescription,
  BookBottomButton,
} from '../components';
import BookInfoSection2 from '../components/BookInfoSection2';
import BookDescription2 from '../components/BookDescription2';

const BookDetaill2 = ({ route }) => {
  const { id } = route.params;
  const [bookData, setBookData] = useState({});

  const getBookData = async () => {
    try {
      const res = await fetch(
        `https://www.googleapis.com/books/v1/volumes/${id}`
      );
      const data = res.json();
      return data;
    } catch (err) {
      return err;
    }
  };

  useEffect(() => {
    getBookData()
      .then((data) => {
        setBookData(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  if (!bookData) {
    return (
      <View>
        <Text style={{ color: 'white' }}>loading</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.black }}>
      {/* Book Cover Section */}
      <View style={{ flex: 4 }}>{<BookInfoSection2 book={bookData} />}</View>

      {/* Description */}
      <View style={{ flex: 3 }}>
        {<BookDescription2 des={bookData?.volumeInfo?.description} />}
      </View>

      {/* Buttons */}
      {/* <View style={{ height: 70, marginBottom: 30 }}>
        {<BookBottomButton />}
      </View> */}
    </View>
  );
};

export default BookDetaill2;
