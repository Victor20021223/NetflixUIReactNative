import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Modal } from 'react-native';

export default function MovieItem({ title, imageUrl, sinopse}) {
  const [isZoomed, setIsZoomed] = useState(false);

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <TouchableOpacity onPress={toggleZoom}>
      <View style={styles.movieItem}>
        <Image source={imageUrl} style={isZoomed ? styles.zoomedMovieImage : styles.movieImage} />
        <Text style={styles.movieTitle}>{title}</Text>
      </View>
      <Modal
        visible={isZoomed}
        transparent={true}
        animationType="slide"
        onRequestClose={toggleZoom}
      >
        <View style={styles.modalContainer}>
          <Image source={imageUrl} style={styles.fullScreenImage} />
          <Image source={require('./imagens/botao-play.png')}  style={styles.ImagemPlay}/>
          <Text style={styles.TextoSinapse}>{sinopse}</Text>
          <TouchableOpacity style={styles.closeButton} onPress={toggleZoom}>
            <Text style={styles.closeButtonText}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  movieItem: {
    marginRight: 25,
    alignItems: 'center',
  },
  movieImage: {
    width: 150,
    height: 225,
    marginBottom: 5,
    borderRadius: 25,
  },
  movieTitle: {
    color: '#FFF',
    fontSize: 12,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullScreenImage: {
    width: '100%',
    height: '100%',
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    padding: 10,
  },
  closeButtonText: {
    color: '#FFF',
    fontSize: 16,
  },
  TextoSinapse: {
    position: 'absolute',
    marginTop: 100,
    color: 'red',
    textDecorationStyle: 'solid',
    opacity: 0.5,
  },
  ImagemPlay: {
    position:  'absolute',
    marginTop: 200,
    alignItems: 'center',
    opacity: 0.5,
  },
});
