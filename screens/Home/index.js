import React from 'react';
import { Button, View, Text , Image, StyleSheet} from 'react-native';
import logo from '../../assets/pieces/JogoDaVelha.png';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.centeredView}>
      <Text style={styles.modalTitle}>
        Jogo da Velha
      </Text>

      <Image source={logo} style={styles.modalImage}/>

      <Button style={styles.button}
        title="Jogar"
        color='#00008B'
        onPress={() => navigation.navigate('Game')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
centeredView: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 22,
  margin: 20,
  backgroundColor: '#778899',
  borderRadius: 20,
  padding: 35,
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 5,
},
button: {
  borderRadius: 7,
  padding: 10,
  elevation: 3,
  color: 'white',
  fontWeight: 'bold',
  textAlign: 'center',
},
modalTitle: {
  marginBottom: 17,
  fontSize: 27,
  fontWeight: 'bold',
  textAlign: 'center',
  fontFamily: 'Times New Roman',
},
modalImage:{
  width: '250px',
  height: '250px'
}
})

export default HomeScreen;