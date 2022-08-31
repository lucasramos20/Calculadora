import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class App extends Component{
  render(){
    return(
      <View style = {estilos.container}>
        <View style = {estilos.box}><Text style = {estilos.textbox}> CALCULADORA </Text></View>
        <Text style = {estilos.texto}> 0 </Text>
        <div style ={estilos.organizar}>
          <div style = {estilos.quadrado_cinza}><Text style={estilos.tquadrado}> % </Text> </div>
          <div style = {estilos.quadrado_cinza}><Text style={estilos.tquadrado}> CE </Text> </div>
          <div style = {estilos.quadrado_cinza}><Text style={estilos.tquadrado}> C </Text> </div>
          <div style = {estilos.quadrado_cinza}><Text style={estilos.tquadrado}> DEL </Text> </div>
        </div>
        <div style ={estilos.organizar}>
          <div style = {estilos.quadrado_preto}><Text style={estilos.tquadrado}> 7 </Text> </div>
          <div style = {estilos.quadrado_preto}><Text style={estilos.tquadrado}> 8 </Text> </div>
          <div style = {estilos.quadrado_preto}><Text style={estilos.tquadrado}> 9 </Text> </div>
          <div style = {estilos.quadrado_cinza}><Text style={estilos.tquadrado}> X </Text> </div>
        </div>
        <div style ={estilos.organizar}>
          <div style = {estilos.quadrado_preto}><Text style={estilos.tquadrado}> 4 </Text> </div>
          <div style = {estilos.quadrado_preto}><Text style={estilos.tquadrado}> 5 </Text> </div>
          <div style = {estilos.quadrado_preto}><Text style={estilos.tquadrado}> 6 </Text> </div>
          <div style = {estilos.quadrado_cinza}><Text style={estilos.tquadrado}> - </Text> </div>
        </div>
        <div style ={estilos.organizar}>
          <div style = {estilos.quadrado_preto}><Text style={estilos.tquadrado}> 1 </Text> </div>
          <div style = {estilos.quadrado_preto}><Text style={estilos.tquadrado}> 2 </Text> </div>
          <div style = {estilos.quadrado_preto}><Text style={estilos.tquadrado}> 3 </Text> </div>
          <div style = {estilos.quadrado_cinza}><Text style={estilos.tquadrado}> + </Text> </div>
        </div>
        <div style ={estilos.organizar}>
          <div style = {estilos.quadrado_preto}><Text style={estilos.tquadrado}> +/- </Text> </div>
          <div style = {estilos.quadrado_preto}><Text style={estilos.tquadrado}> 0 </Text> </div>
          <div style = {estilos.quadrado_preto}><Text style={estilos.tquadrado}> , </Text> </div>
          <div style = {estilos.quadrado_cinza}><Text style={estilos.tquadrado}> = </Text> </div>
        </div>
      </View>  
    );
  }
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4F4F4F',
    borderColor: 'white'    
  },
  textbox:{color: 'white', fontSize: 15, alignSelf: 'center'},
  box: {
    width: '350px',
    height: '20px',
    backgroundColor: '#1C1C1C'
  },
  quadrado_cinza:{
    backgroundColor: '#363636',
    width: 110,
    height: 90, 
    margin: 1.5,
    justifyContent: 'center'
  },
  quadrado_preto:{
    backgroundColor: '#1C1C1C',
    width: 110,
    height: 90, 
    margin: 1.5,
    justifyContent: 'center'
  },
  organizar:{ display: 'flex', justifyContent: 'flex-end'},
  texto:{
    color: 'white',
    textAlign: "right",
    fontSize: 40,
    marginVertical: 20,
  },
  tquadrado:{
    color: 'white',
    alignSelf: 'center',
    fontSize: 25
  }
})