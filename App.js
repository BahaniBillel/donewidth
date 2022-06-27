import React from 'react';
import { GestureHandlerRootView, Switch } from 'react-native-gesture-handler';
import AppPicker from './app/components/AppPicker';
import AppTextInput from './app/components/AppTextInput';
import Screen from './app/components/Screen';
import ListingEditScreen from './app/screens/ListingEditScreen';
import LoginScreen from './app/screens/LoginScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import MessagesScreen from './app/screens/MessagesScreen';

const categories = [
  { label: 'Founiture', value: '1' },
  { label: 'Clothing', value: '2' },
  { label: 'Cameras', value: '3' },
];

export default function App() {
  const [category, setCategory] = React.useState(categories[0]);

  return (
    <GestureHandlerRootView>
      <Screen>
        {/* <MessagesScreen /> */}
        <ListingEditScreen/>
      </Screen>
    </GestureHandlerRootView>
  );
}

// restart the lesson 8-building categorypickerItem from additiona; improvements folder
