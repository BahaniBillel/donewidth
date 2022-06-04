import React from 'react';
import { GestureHandlerRootView, TextInput } from 'react-native-gesture-handler';
import Screen from './app/components/Screen';
import { Switch } from 'react-native-gesture-handler';

export default function App() {
  const [isNew,setIsNew]=React.useState(false)
  return (
    <GestureHandlerRootView>
      <Screen>
        <Switch value={isNew} onValueChange={(newValue)=>setIsNew(newValue)}/>
      </Screen>
      
    </GestureHandlerRootView>
  );
}
