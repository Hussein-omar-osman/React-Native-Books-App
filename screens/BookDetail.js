import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { COLORS } from '../constants';
import {
  BookInfoSection,
  BookDescription,
  BookBottomButton,
} from '../components';

const BookDetail = ({ route }) => {
  let { book } = route.params;

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.black }}>
      {/* Book Cover Section */}
      <View style={{ flex: 5 }}>{<BookInfoSection book={book} />}</View>

      {/* Description */}
      <View style={{ flex: 3 }}>{<BookDescription book={book} />}</View>

      {/* Buttons */}
      <View style={{ height: 70, marginBottom: 30 }}>
        {<BookBottomButton />}
      </View>
    </View>
  );
};

export default BookDetail;
