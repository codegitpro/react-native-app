import React, { Component } from "react";
import { Alert, Button, Image, StyleSheet, Text, View } from "react-native";
import logo from './assets/img/logo.svg'


class App extends Component {
  render() {
    return (
      <View style={styles.app}>
        <View style={styles.header}>
          <Image
            accessibilityLabel="React logo"
            source={logo}
            resizeMode="contain"
            style={styles.logo}
          />
          <Text style={styles.title}>Welcome to MYLO</Text>
        </View>
        {/* <Text style={styles.text}>
          This is an example of an app built with{" "}
          <Link href="https://github.com/facebook/create-react-app">
            Create React App
          </Link>{" "}
          and{" "}
          <Link href="https://github.com/necolas/react-native-web">
            React Native for Web
          </Link>
        </Text>
        <Text style={styles.text}>
          To get started, edit{" "}
          <Link href="https://codesandbox.io/s/q4qymyp2l6/" style={styles.code}>
            src/App.js
          </Link>
          .
        </Text> */}
        <Button style={styles.formButton} onPress={() => Alert.alert('Instant Fault Report')} title="Instant Fault Report" />
        <Button color="#f194ff" onPress={() => Alert.alert('Need login API')} title="Login" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    marginHorizontal: "auto",
    maxWidth: 500
  },
  logo: {
    height: 80
  },
  header: {
    padding: 20
  },
  title: {
    fontWeight: "bold",
    fontSize: "1.5rem",
    marginVertical: "1em",
    textAlign: "center"
  },
  text: {
    lineHeight: "1.5em",
    fontSize: "1.125rem",
    marginVertical: "1em",
    textAlign: "center"
  },
  link: {
    color: "#1B95E0"
  },
  code: {
    fontFamily: "monospace, monospace"
  },
  formButton: {
    color: "black",
    marginBottom: "2rem"
  }
});

export default App;
