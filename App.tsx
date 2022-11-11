import {StyleSheet, Text, View} from 'react-native';
import React, {Component} from 'react';

export default class App extends Component {
  render() {
    return (
      <View style={estilos.contenedor}>
        <Text style={estilos.textoMensaje}>Hola mundo desde React Native</Text>
      </View>
    );
  }
}
const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textoMensaje: {
    fontSize: 40,
  },
});
