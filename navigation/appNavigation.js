import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/homeScreen'
import OnBoardingScreen from '../screens/onBoardingScreen'
import { getItem } from '../utils/asyncScreen'

const Stack = createStackNavigator()

export default function AppNavigation () {

  const [showOnboarding, setShowOnBoarding] = useState(null)

  useEffect(() => {
    checkIfAlreadyOnboaded();
  }, [])

  const checkIfAlreadyOnboaded = async () => {
    let onboarded = await getItem('onboarded')
    if(onboarded == 1) {
      // hide
      setShowOnBoarding(false)
    } else {
      // show
      setShowOnBoarding(true)
    }
  }

  if(showOnboarding == null) {
    return null
  }

  if(showOnboarding) {
    return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName='OnBoarding'>
              <Stack.Screen name='OnBoarding' options={{headerShown: false}} component={OnBoardingScreen} />
              <Stack.Screen name='Home' options={{headerShown: false}} component={HomeScreen} />
          </Stack.Navigator>
      </NavigationContainer>
    )
  } else {
    return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName='Home'>
              <Stack.Screen name='OnBoarding' options={{headerShown: false}} component={OnBoardingScreen} />
              <Stack.Screen name='Home' options={{headerShown: false}} component={HomeScreen} />
          </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
