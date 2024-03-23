import React from 'react';
import { View, FlatList, StyleSheet, Alert, Text} from 'react-native';
import MovieItem from './MovieItem';

export default function MovieList({ movies }) {
  const renderMovieItem = ({ item }) => (
    <MovieItem title={item.title} imageUrl={item.imageUrl} sinopse={item.sinopse} />
  );

  return (
    <View style={styles.movieListContainer}>
      <FlatList
        data={movies}
        renderItem={renderMovieItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  movieListContainer: {
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 100,
    marginLeft: 20,
  },
});
