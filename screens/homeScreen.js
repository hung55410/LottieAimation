
import React from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Lottie from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import { removeItem } from '../utils/asyncScreen';

const {width, height} = Dimensions.get("window")

export default function HomeScreen () {

  const navigation = useNavigation()

  const handleReset = async () => {
    await removeItem('onboarded');
    navigation.push('OnBoarding');
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.lottie}>
        <Lottie source={require('../assets/animations/animation_5.json')} autoPlay loop />
      </View>
      <Text style={styles.text}>Home Page</Text>
      <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
        <Text style={{color: '#FFF', fontSize: 14, fontWeight: '500'}}>Reset</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  lottie: {
      width: width * 0.9,
      height: width
  },
  text: {
    fontSize: 32,
    marginBottom: 20
  },
  resetButton: {
    backgroundColor: '#EA4C89',
    borderRadius: 8,
    borderStyle: 'none',
    paddingHorizontal: 24,
    paddingVertical: 16,
  }
})