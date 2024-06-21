import React, {useState} from 'react';

import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  GestureResponderEvent,
  useColorScheme,
  Dimensions,
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
  const isDark = useColorScheme() === 'dark';

  //get the height of the view port
  const {height} = Dimensions.get('window');
  const containerHeight = height;
  const resultHeight = height * 0.3;
  return (
    <View style={[styles.container, {height: containerHeight}]}>
      <View style={[styles.resultSection, {height: resultHeight}]}>
        <Text style={styles.resultSectionText}>19,134</Text>
      </View>
      <View style={styles.processView}>
        <Text style={styles.processViewText}>12,345 + 6,789</Text>
      </View>
      <View style={styles.keyboardArea}>
        <View>
          <CustomButton onPress={handleCount} title="AC" />
          <TouchableOpacity onPress={handleCount} style={styles.button}>
            <Text style={styles.buttonText}>1</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* <Text>You clicked {count} times</Text>
        <Button onPress={handleCount} title="click me!" />
        <CustomButton onPress={handleCount} title="click me!" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#161A20',
  },
  resultSection: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    paddingBottom: 20,
  },
  resultSectionText: {
    fontSize: 40,
    color: '#FFFFFF',
  },
  textColor: {
    color: '#FFFFFF',
  },
  processView: {
    backgroundColor: '#20252E',
    padding: 10,
    alignItems: 'flex-end',
  },
  processViewText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '300',
  },
  keyboardArea: {
    padding: 10,
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
