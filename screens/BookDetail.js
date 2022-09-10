import React from 'react';
import { View } from 'react-native';
import { COLORS } from '../constants';
import {
  BookInfoSection,
  BookDescription,
  BookBottomButton,
} from '../components';

const BookDetail = ({ route }) => {
  const [book, setBook] = React.useState(null);

  React.useEffect(() => {
    let { book } = route.params;
    setBook(book);
  }, [book]);

  if (book) {
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
  } else {
    return <></>;
  }
};

export default BookDetail;
