import * as React from 'react';
import {View} from 'react-native';
import WelcomeScreen from './screens/SigningIn'
import {createSwitchNavigator,createAppContainer} from 'react-navigation';
import appTab from './screens/appTab.js';

export default class App extends React.Component {
  render(){
         return (

              <AppContainer/>
          
          );
  }
}

const switchNavigator=createSwitchNavigator({
  Welcome:{screen:WelcomeScreen},
  HomeScreen : {screen:appTab}
})

const AppContainer = createAppContainer(switchNavigator);