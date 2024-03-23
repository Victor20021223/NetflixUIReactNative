import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import NavBar from './NavBar';
import MovieList from './MovieList';


export default function App() {
  const trendingMovies = [
    {
      id: '1',
      title: 'Stranger Things',
      imageUrl : require ('./imagens/Stranger.png'),
      sinopse : 'Teste de sinopse em filmes',
    },
    {
      id: '2',
      title: 'Black Mirror',
      imageUrl: require ('./imagens/BlackM.jpg'),
      sinopse : 'Teste de sinopse em filmes',
    },
    {
      id: '3',
      title: 'Breaking Bad',
      imageUrl: require ('./imagens/BreakingBad.jpg'),
      sinopse : 'Teste de sinopse em filmes',
    },
   
  ];

  const actionMovies = [
    {
      id: '4',
      title: 'The Dark Knight',
      imageUrl: require ('./imagens/TheDark.jpeg'),
      sinopse : 'Teste de sinopse em filmes',
    },
    {
      id: '5',
      title: 'Inception',
      imageUrl: require ('./imagens/Inception.jpg'),
      sinopse : 'Teste de sinopse em filmes',
    },
    {
      id: '6',
      title: 'Matrix',
      imageUrl: require ('./imagens/Matrix.jpg'),
      sinopse : 'Teste de sinopse em filmes',
    },
  
  ];

  const comedyMovies = [
    {
      id: '7',
      title: 'The Hangover',
      imageUrl: require ('./imagens/Hangover.jpg'),
      sinopse : 'Teste de sinopse em filmes',
    },
    {
      id: '8',
      title: 'Superbad',
      imageUrl: require ('./imagens/superbad.jpg'),
      sinopse : 'Teste de sinopse em filmes',
    },
    {
      id: '9',
      title: 'Anchorman',
      imageUrl: require ('./imagens/Anchorman.jpg'),
      sinopse : 'Teste de sinopse em filmes',
    },
  
  ];

  return (
    <View style={styles.container}>
      <NavBar />
      <ScrollView>
        <MovieList movies={trendingMovies} title="Trending Now" />
        <MovieList movies={actionMovies} title="Action Movies" />
        <MovieList movies={comedyMovies} title="Comedy Movies" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#000',
  },
});
