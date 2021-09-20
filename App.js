import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {  StyleSheet, Text, Image, ImageBackground, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./assets/image/fondo.jpg')}
        style={styles.imageFondo}
      >
        <Image
          style={styles.image}
          source={require('./assets/image/restaurantlogo.png')}
        />
        <Text style={styles.titulo}> NUESTRA CARTA </Text>
        <StatusBar style="auto" />
        <View style={styles.overlayContainer}>
          <View style={styles.menuContainer}>
            <View style={styles.menuItems}>
              <Image
                style={styles.imageItems}
                source={require('./assets/image/carnes.jpg')}
              />
              <Text style={styles.tituloMenu}> CARNES </Text>
            </View>
            <View style={styles.menuItems}>
              <Image
                style={styles.imageItems}
                source={require('./assets/image/mariscos.jpg')}
              />
              <Text style={styles.tituloMenu}> MARISCOS </Text>
            </View>
            <View style={styles.menuItems}>
              <Image
                style={styles.imageItems}
                source={require('./assets/image/ensaladas.jpg')}
              />
              <Text style={styles.tituloMenu}> ENSALADAS </Text>
            </View>
            <View style={styles.menuItems}>
              <Image
                style={styles.imageItems}
                source={require('./assets/image/bebidas.jpg')}
              />
              <Text style={styles.tituloMenu}> BEBIDAS </Text>
            </View> 
          </View>
        <Text style={styles.footer}> GUILLERMO JOSUÉ HERNÁNDEZ ANDRADE   -   073118 </Text>
        </View>
      </ImageBackground>
      <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:               1,
    width:              '100%',
    height:             '100%',
    alignItems:         'center',
    justifyContent:     'center',
    
  },
  imageFondo: {
    flex:               1,
    width:              '100%',
    height:             '100%',
    alignItems:         'center',
    justifyContent:     'center',
    opacity: 0.8,
  },
  image: {
    width:              150,
    height:             150,
    justifyContent:     'center',
    alignItems:         'center',
    marginBottom:       20,
    marginTop:          120,
    opacity:            1,
  },
  titulo: {
    paddingTop:         10,
    fontSize:           25,
    color:              '#800000',
    fontWeight:         'bold',
    textShadowColor:    '#CDCDCD',
    textShadowOffset:   {width: 1, height: 1},
    textShadowRadius:   5,
  },
  overlayContainer: {
    marginTop:          20,
  },
  menuContainer: {
    height:             '60%',
    flexDirection:      'row',
    flexWrap:           'wrap',
  },
  menuItems: {
    width:              '50%',
    height:             '50%',
    padding:            10,
  },
  imageItems: {
    width:              '90%',
    height:             '80%',
    borderColor:        '#fff',
    borderWidth:        5,
    borderRadius:       10,
    alignSelf:          'center',
    opacity:            1,
  },
  tituloMenu: {
    fontSize:           20,
    color:              '#FFD700',
    fontWeight:         'bold',
    textAlign:          'center',
    marginTop:          13,
    textShadowColor:    'black',
    textShadowOffset:   {width: 1, height: 1},
    textShadowRadius:   7,
  },
  footer: {
    fontSize:           15,
    color:              'white',
    marginTop:          90,
    textAlign:          'center',
    fontWeight:         'bold',
    textShadowColor:    'black',
    textShadowOffset:   {width: 1, height: 1},
    textShadowRadius:   7,
  },
});
