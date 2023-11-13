import React, { useContext, useEffect } from "react";
import { FlatList, Pressable, Text, View } from "react-native";
import { BlogContext } from "../../context/reducers/BlogContext";
import { Feather } from "@expo/vector-icons";
import styles from "./styles";

const IndexScreen = ({ navigation }) => {
  const { blogState, deleteBlogPost, getBlogPost } = useContext(BlogContext);

  useEffect(() => {
    getBlogPost();
    const listener = navigation.addListener("focus", () => {
      getBlogPost();
    });
    return () => {
      listener.remove();
    };
  }, []);

  return (
    <View>
      <FlatList
        keyExtractor={(item) => item.id}
        data={blogState}
        renderItem={({ item }) => {
          return (
            <Pressable
              onPress={() =>
                navigation.navigate("Show Screen", { id: item.id })
              }
            >
              <View style={styles.container}>
                <Text style={styles.title}>
                  {item.title}-{item.id}
                </Text>
                <Pressable onPress={() => deleteBlogPost(item.id)}>
                  <Feather name="trash" color="black" style={styles.icon} />
                </Pressable>
              </View>
            </Pressable>
          );
        }}
      />
    </View>
  );
};

export default IndexScreen;
