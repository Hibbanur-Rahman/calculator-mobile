import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

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
  const [calculation, setCalculation] = useState('');
  const [result,setResult]=useState('0');
  const handleCalculation = (value:any) => {
    setCalculation(calculation+value)
  };
  const handleResult=()=>{
      setResult(eval(calculation))
  }

  const handleReset=()=>{
    setCalculation('');
    setResult('0');
  }
  const isDark = useColorScheme() === 'dark';

  //get the height of the view port
  const {height} = Dimensions.get('window');
  const containerHeight = height;
  const resultHeight = height * 0.4;
  return (
    <View style={[styles.container, {height: containerHeight}]}>
      <View style={[styles.resultSection, {height: resultHeight}]}>
        <Text style={styles.resultSectionText}>{result}</Text>
      </View>
      <View style={styles.processView}>
        <Text style={styles.processViewText}>{calculation}</Text>
      </View>
      <View style={styles.keyboardArea}>
        <View
          style={[styles.row]}>
          <TouchableOpacity onPress={handleReset} style={[styles.button,{backgroundColor:'#363E4D',borderTopLeftRadius:15}]}>
            <Text style={styles.buttonText}>AC</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{handleCalculation(7)}} style={[styles.button,{backgroundColor:'#363E4D'}]}>
            <Text style={styles.buttonText}>+/-</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{handleCalculation("%")}} style={[styles.button,{backgroundColor:'#363E4D'}]}>
            <Text style={styles.buttonText}>%</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{handleCalculation("/")}} style={[styles.button,{backgroundColor:'#0060E5',borderTopRightRadius:15}]}>
            <Text style={styles.buttonText}>/</Text>
            {/* <Icon name='divide' size={26} color="#900" /> */}
          </TouchableOpacity>
        </View>
        <View
          style={[styles.row]}>
          <TouchableOpacity onPress={()=>{handleCalculation('7')}} style={[styles.button,{backgroundColor:'#242933'}]}>
            <Text style={styles.buttonText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{handleCalculation('8')}} style={[styles.button,{backgroundColor:'#242933'}]}>
            <Text style={styles.buttonText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{handleCalculation('9')}} style={[styles.button,{backgroundColor:'#242933'}]}>
            <Text style={styles.buttonText}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{handleCalculation('*')}} style={[styles.button,{backgroundColor:'#0060E5'}]}>
            <Text style={styles.buttonText}>X</Text>
          </TouchableOpacity>
        </View>
        <View
          style={[styles.row]}>
          <TouchableOpacity onPress={()=>{handleCalculation('4')}} style={[styles.button,{backgroundColor:'#242933'}]}>
            <Text style={styles.buttonText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{handleCalculation('5')}} style={[styles.button,{backgroundColor:'#242933'}]}>
            <Text style={styles.buttonText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{handleCalculation('6')}} style={[styles.button,{backgroundColor:'#242933'}]}>
            <Text style={styles.buttonText}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{handleCalculation('-')}} style={[styles.button,{backgroundColor:'#0060E5'}]}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        </View>
        <View
          style={[styles.row]}>
          <TouchableOpacity onPress={()=>{handleCalculation('1')}} style={[styles.button,{backgroundColor:'#242933'}]}>
            <Text style={styles.buttonText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{handleCalculation('2')}} style={[styles.button,{backgroundColor:'#242933'}]}>
            <Text style={styles.buttonText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{handleCalculation('3')}} style={[styles.button,{backgroundColor:'#242933'}]}>
            <Text style={styles.buttonText}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{handleCalculation('+')}} style={[styles.button,{backgroundColor:'#0060E5'}]}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
        <View
          style={[styles.row]}>
          <TouchableOpacity onPress={()=>{handleCalculation('0')}} style={[styles.button,{backgroundColor:'#242933',width:'50%',borderBottomLeftRadius:15}]}>
            <Text style={styles.buttonText}>0</Text>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={()=>{handleCalculation('.')}} style={[styles.button,{backgroundColor:'#242933'}]}>
            <Text style={styles.buttonText}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleResult} style={[styles.button,{backgroundColor:'#0060E5',borderBottomRightRadius:15}]}>
            <Text style={styles.buttonText}>=</Text>
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
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#1E90FF',
    padding: 20,
    borderRadius: 5,
    marginTop: 10,
    width:'23%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 26,
    textAlign: 'center',
  },
});

export default App;
