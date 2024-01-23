import React from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  SafeAreaView,
} from "react-native";
const Spinner = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Carregando...</Text>

      <ActivityIndicator
        style={[styles.horizontal]}
        size="large"
        color="#0000ff"
      />
    </SafeAreaView>
  );
};

export default Spinner;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
});

/*]

 {Platform.OS !== 'web' ? (
        <LottieView
          //style={styles.horizontal}
          source={require('../../styles/animations/66961-fluid-load.json')}
          resizeMode="contain"
          autoSize
          autoPlay
          loop
        />
      ) : (




*/
