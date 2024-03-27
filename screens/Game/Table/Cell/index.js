import { View, Image, Pressable, StyleSheet } from 'react-native';
import React, { useState } from 'react';

const Cell = ({ id, cellState, onClick }) => {
    const imgName = cellState === 1 ?
      '../../../../assets/pieces/peca1.png' :
      '../../../../assets/pieces/peca2.png'
    
    const [longPressOccurred, setLongPressOccurred] = useState(false);

    const handleLongPress = () => {
      setLongPressOccurred(true);
      console.log("Toque longo");
    };

    const handlePressIn = () => {
      console.log("Pressionado");
    };

    const handlePressOut = () => {
      console.log("Toque acabado");
      if (!longPressOccurred) {
        onClick(id);
      }
      setLongPressOccurred(false);
    };
    
    return (
      <View style={styles.container}>
        <Pressable
          style={styles.container}
          onLongPress={handleLongPress}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
        >
          {cellState !== 0 && 
            <Image
              style={styles.image}
              source={imgName}
            />
          }
        </Pressable>  
      </View>
    );
  }

const styles = StyleSheet.create({
  image: {
    width: '50%',
    height: '50%'
  },
  container: {
    flex: 1,
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
})

export default Cell;
