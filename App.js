import * as React from 'react';
import { Platform, StyleSheet, Text, View, Image } from 'react-native';
import { Asset } from 'expo-asset';


const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});

const imageURI = Asset.fromModule(require('./face_id.png')).uri;

export default function App() {
  return (
    <View style={styles.container}>
      <Image
          source={{
            uri: Asset.fromModule(require('./face_id.png')).uri
          }}
          style={{ width: 400, height: 400 }}
      />
      <Text style={styles.welcome}>Welcome to React Native!</Text>
      <Text style={styles.instructions}>To get started, edit App.js</Text>
      <Text style={styles.instructions}>{instructions}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
