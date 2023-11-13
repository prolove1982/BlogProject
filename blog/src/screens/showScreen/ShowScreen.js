import { Text, View } from "react-native";
import React from "react";
import { BlogContext } from "../../context/reducers/BlogContext";
import { useContext } from "react";
import styles from "./styles";

const ShowScreen = ({ route }) => {
  const { blogState } = useContext(BlogContext);
  const { id } = route.params;
  const blogPost = blogState.find((Post) => Post.id === id);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {blogPost ? blogPost.title : "BlogPost Not Found"}
      </Text>
      <Text style={styles.content}>
        {blogPost ? blogPost.content : "BlogPost Not Found"}
      </Text>
    </View>
  );
};

export default ShowScreen;
