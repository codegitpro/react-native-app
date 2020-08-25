import React, { Component } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import { FormButton, PlusIcon } from "./components";
import logo from "./assets/img/logo.svg";

class App extends Component {
  constructor() {
    super();
    // this.handleLogin = this.handleLogin.bind(this);
    // this.handleReport = this.handhandleReportleLogin.bind(this);
  }
  // handleReport() {
  //   console.log("click report button");
  // }
  // handleLogin() {
  //   console.log("click login button");
  // }
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

        <FormButton
          title="Instant Fault Report"
          size="sm"
          backgroundColor="#FFFFFF"
          color="#585A5C"
          icon={<PlusIcon />}
          // onPress={this.handleReport}
        />
        <FormButton
          title="Login"
          size="sm"
          backgroundColor="#F7B124"
          color="white"
          // onPress={this.handleLogin}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    marginHorizontal: "auto",
    maxWidth: 500,
  },
  logo: {
    margin: "auto",
    width: 124,
    height: 42,
  },
  header: {
    padding: 20,
  },
  title: {
    fontWeight: "bold",
    fontFamily: "Arial Hebrew Scholar",
    fontSize: "1.5rem",
    marginTop: 100,
    marginBottom: 80,
    marginVertical: "1em",
    textAlign: "center",
    color: "#737171",
  },
  text: {
    lineHeight: "1.5em",
    fontSize: "1.125rem",
    marginVertical: "1em",
    textAlign: "center",
  },
  link: {
    color: "#1B95E0",
  },
  code: {
    fontFamily: "monospace, monospace",
  },
});

export default App;
