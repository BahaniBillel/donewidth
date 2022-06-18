import React from "react";
import { GestureHandlerRootView, Switch } from "react-native-gesture-handler";
import AppPicker from "./app/components/AppPicker";
import AppTextInput from "./app/components/AppTextInput";
import Screen from "./app/components/Screen";
import LoginScreen from "./app/screens/LoginScreen";

const categories = [
  { label: "Founiture", value: "1" },
  { label: "Clothing", value: "2" },
  { label: "Cameras", value: "3" },
];

export default function App() {
  const [category, setCategory] = React.useState(categories[0]);

  return (
    <GestureHandlerRootView>
      <Screen>
        <LoginScreen/>
      </Screen>
    </GestureHandlerRootView>
  );
}

// stopped at course #7 forms
