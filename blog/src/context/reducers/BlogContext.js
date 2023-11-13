import { createContext, useReducer } from "react";
import blogReducer from "./blogReducer";
import blogInitialState from "../initialStates/blogInitialState";
import jsonServer from "../../api/jsonServer";

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [blogState, blogDispatch] = useReducer(blogReducer, blogInitialState);

  const getBlogPost = async () => {
    const response = await jsonServer.get("/blogPosts");
    blogDispatch({ type: "get_blogPost", payload: response.data });
  };

  const addBlogPost = async (title, content, callBack) => {
    await jsonServer.post("/blogPosts", { title, content });
    // blogDispatch({ type: "add_blogPost", payload: { title, content } });
    if (callBack) {
      callBack();
    }
  };

  const deleteBlogPost = async (id) => {
    await jsonServer.delete(`/blogPosts/${id}`);
    blogDispatch({ type: "delete_blogPost", payload: id });
  };

  const editBlogPost = async (id, title, content, callBack) => {
    await jsonServer.put(`/blogPosts/${id}`, { title, content });
    blogDispatch({ type: "edit_blogPost", payload: { id, title, content } });
    if (callBack) {
      callBack();
    }
  };

  return (
    <BlogContext.Provider
      value={{
        blogState,
        editBlogPost,
        deleteBlogPost,
        getBlogPost,
        addBlogPost,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};
