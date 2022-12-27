import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import store from "./store";

import CategoryScreen from "./screens/CategoryScreen";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import RestaurantScreen from "./screens/RestaurantScreen";
import BasketScreen from "./screens/BasketScreen";
import PreparingOrderScreen from "./screens/PreparingOrderScreen";
import DeliveryScreen from "./screens/DeliveryScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Profile"
            component={ProfileScreen}
            options={{ headerShown: false, animation: "fade_from_bottom" }}
          />
          <Stack.Screen
            name="Restaurant"
            component={RestaurantScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Basket"
            component={BasketScreen}
            options={{
              presentation: "modal",
              headerShown: false,
              animation: "flip",
            }}
          />
          <Stack.Screen
            name="Delivery"
            component={DeliveryScreen}
            options={{
              headerShown: false,
              animation: "flip",
              presentation: "fullScreenModal",
            }}
          />
          <Stack.Screen
            name="Category"
            component={CategoryScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PreparingOrder"
            component={PreparingOrderScreen}
            options={{
              headerShown: false,
              animation: "flip",
              presentation: "fullScreenModal",
            }}
          />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
