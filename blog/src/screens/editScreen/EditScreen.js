import { View } from "react-native";
import React, { useContext } from "react";
import { BlogContext } from "../../context/reducers/BlogContext";
import { styles } from "./styles";
import BlogPostForm from "../../components/BlogPostForm";

const EditScreen = ({ route, navigation }) => {
  const { blogState, editBlogPost } = useContext(BlogContext);
  const { id } = route.params;
  const blogPost = blogState.find((Post) => Post.id === id);

  return (
    <View style={styles.container}>
      <BlogPostForm
        initialValues={{ title: blogPost.title, content: blogPost.content }}
        onSubmit={(title, content) => {
          editBlogPost(id, title, content, () => navigation.pop());
        }}
      />
    </View>
  );
};

export default EditScreen;
