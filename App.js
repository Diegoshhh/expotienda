import React from "react";
import Root from "./src";
import { useFonts } from "expo-font";
import { ActivityIndicator } from "react-native";
import { Provider } from "react-redux";
import store from "./src/store";

 

export default function App() {

  let [fontLoaded] = useFonts({
    'Lato-Black': require('./assets/fonts/Lato-Black.ttf'),
    'Lato-Regular': require('./assets/fonts/Lato-Regular.ttf')
  })

  if(!fontLoaded){
    return <ActivityIndicator/>
  }

  return (
    <Provider store={store}> 
      <Root/>
    </Provider>
  );
}

