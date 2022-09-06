import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Router from './src/navigations/Routes'
import {Provider} from 'react-redux'
import { Store } from './src/config/utils/utils/Store'

function App() {
  return (
    <NavigationContainer>
      <Provider store={Store}>
      <Router />
      </Provider>
    </NavigationContainer>
  )
}

export default App