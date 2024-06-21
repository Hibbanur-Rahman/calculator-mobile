/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {

  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  GestureResponderEvent,
} from 'react-native';

//Define the type for the custom button props
type CustomButtonProps = {
  onPress: (event: GestureResponderEvent) => void;
  title: string;
};

const CustomButton: React.FC<CustomButtonProps> = ({onPress, title}) => (
  <TouchableOpacity onPress={onPress} style={styles.button}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

function App(): React.JSX.Element {
  const [count, setCount] = useState(0);
  const handleCount = () => {
    setCount(count + 1);
  };
  return (
    <View style={styles.container}>
      <Text>You clicked {count} times</Text>
      <Button onPress={handleCount} title="click me!" />
      <CustomButton onPress={handleCount} title='click me!'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#1E90FF',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default App;
