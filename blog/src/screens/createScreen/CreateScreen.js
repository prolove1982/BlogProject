import { View } from "react-native";
import React, { useContext } from "react";
import { BlogContext } from "../../context/reducers/BlogContext";
import { styles } from "./styles";
import BlogPostForm from "../../components/BlogPostForm";

const CreateScreen = ({ navigation }) => {
  const { addBlogPost } = useContext(BlogContext);

  return (
    <View style={styles.container}>
      <BlogPostForm
        onSubmit={(title, content) => {
          addBlogPost(title, content, () => navigation.navigate("Home"));
        }}
      />
    </View>
  );
};

export default CreateScreen;
