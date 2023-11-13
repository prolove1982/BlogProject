import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import IndexScreen from "../screens/indexScreen/IndexScreen";
import ShowScreen from "../screens/showScreen/ShowScreen";
import EditScreen from "../screens/editScreen/EditScreen";
import CreateScreen from "../screens/createScreen/CreateScreen";
import { AntDesign, EvilIcons } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity, View } from "react-native";

const HomeNavigator = () => {
  const HomeStack = createStackNavigator();

  return (
    <HomeStack.Navigator
      screenOptions={{ headerTitle: "Blogs" }}
      initialRouteName="Home"
    >
      <HomeStack.Screen
        options={({ navigation }) => ({
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("Create Screen")}
            >
              <View style={styles.iconContainer}>
                <AntDesign
                  name="plus"
                  style={styles.headerIcon}
                  color="black"
                />
              </View>
            </TouchableOpacity>
          ),
        })}
        name="Home"
        component={IndexScreen}
      />
      <HomeStack.Screen
        name="Show Screen"
        component={ShowScreen}
        options={({ route, navigation }) => ({
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                const { id } = route.params;
                navigation.navigate("Edit Screen", { id });
              }}
            >
              <View style={styles.iconContainer}>
                <EvilIcons
                  name="pencil"
                  style={styles.headerIcon}
                  color="black"
                />
              </View>
            </TouchableOpacity>
          ),
        })}
      />
      <HomeStack.Screen name="Edit Screen" component={EditScreen} />
      <HomeStack.Screen name="Create Screen" component={CreateScreen} />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;

const styles = StyleSheet.create({
  headerIcon: {
    fontSize: 30,
  },
  iconContainer: {
    paddingRight: 20,
  },
});
