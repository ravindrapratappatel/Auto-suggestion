import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
function App() {
  const listitem = ['Milk', 'Coffee', 'Oranges', 'Bread'];
  const [list, setlist] = useState(listitem);
  const [input, setinput] = useState('');
  function handlechange(val) {
    setinput(val);
    if (val === '') {
      setlist(listitem);
    } else {
      const lowercase = val.toLowerCase();
      setlist(list.filter(x => x.toLowerCase().match(lowercase)));
    }
  }
  function handle_click() {
    const randomString = Math.random().toString(36).substring(2,7);
    setlist(oldArray => [...oldArray, randomString]);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <View style={styles.inputbox}>
          <TextInput
            style={styles.input}
            placeholder="Search"
            Value={input}
            onChangeText={val => {
              handlechange(val);
            }}
          />
        </View>
        <View style={styles.plus_icon}>
          <TouchableOpacity onPress={handle_click}>
            <Text>
              <Icon name="add" size={40} color="black" />
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: 1,
        }}
      />
      <View style={styles.bottom}>
        {list.map((item, index) => {
          return (
            <View key={index} style={styles.item}>
              <Text>{item}</Text>
              <View
                style={{
                  borderBottomColor: 'black',
                  borderBottomWidth: 1,
                }}
              />
            </View>
          );
        })}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 10,
  },
  top: {
    margin: 10,
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  inputbox: {
    paddingLeft: 5,
    flex: 0.85,
  },
  input: {
    borderWidth: 1,
  },
  plus_icon: {
    paddingTop: 0,
    flex: 0.15,
  },
  bottom: {
    flex: 0.9,
    margin: 10,
    paddingTop: 0,
  },
  item: {
    marginTop: 10,
  },
});

export default App;
