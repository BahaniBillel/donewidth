import React from 'react';
import { GestureHandlerRootView,Switch } from 'react-native-gesture-handler';
import Screen from './app/components/Screen';
import { Picker} from 'react-native';

export default function App() {
  const [isNew,setIsNew]=React.useState(false)
  return (git 
    <GestureHandlerRootView>
      <Screen>
        <Switch value={isNew} onValueChange={(newValue)=>setIsNew(newValue)}/>
      </Screen>
      
    </GestureHandlerRootView>
  );
}
