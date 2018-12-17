import { createStackNavigator } from "react-navigation";

import HomeScreen from "../HomePage/index";
import ListScreen from "../CoffeeList/index";
import DetailScreen from "../CoffeeDetail/index";
import Login from "../Login/index";
import CoffeeCart from "../CoffeeCart";

const OurStack = createStackNavigator(
  {
    Login: Login,
    Home: HomeScreen,
    List: ListScreen,
    Detail: DetailScreen,
    Cart: CoffeeCart
  },
  {
    initialRouteName: "Login",
    cardStyle: {
      backgroundColor: "rgb(20,90,100)"
    },
    navigationOptions: {
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "transparent"
      },
      headerTextStyle: {
        fontWeight: "bold"
      }
    }
  }
);

export default OurStack;
