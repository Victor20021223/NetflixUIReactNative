import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function NavBar() {
  return (
    <View style={styles.navBar}>
      <Text style={styles.navBarTitle}>Netflix</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: '#E50914',
    paddingTop: 20,
    paddingBottom: 20,
    alignItems: 'center',
    borderBottomWidth: 3,
    borderBottomColor: '#8b0000',
    borderRadius: 5,
  },
  navBarTitle: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
