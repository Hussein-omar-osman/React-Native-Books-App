import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import React from 'react';
import { COLORS } from '../constants';

const Search = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.black }}>
      <Text style={{ color: 'white' }}>Search Component</Text>
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({});
