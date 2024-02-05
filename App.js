import { StyleSheet, Text, View, SafeAreaView, ImageBackground } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
// import Colors from './constants/colors'
import GameScreen from './screens/GameScreen';
export default function App() {
  const [fontsLoaded]=useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.tff"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.tff"),
  });
  if(!fontsLoaded){
    return <AppLoading />; //if it's still not loaded, call the component
  }
  return (
    <LinearGradient style={styles.container} colors={["#4e0329", "#ddb52f"]}>
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.container}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={{ flex: 1 }}>
          <StartGameScreen />
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});