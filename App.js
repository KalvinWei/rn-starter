import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import StateExerciseScreen from "./src/screens/StateExerciseScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    StateExercise: StateExerciseScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
