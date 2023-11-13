const blogReducer = (state, action) => {
  switch (action.type) {
    case "get_blogPost":
      return action.payload;

    case "edit_blogPost":
      return state.map((Post) =>
        Post.id === action.payload.id ? { ...Post, ...action.payload } : Post
      );

    // case "add_blogPost":
    //   return [
    //     ...state,
    //     {
    //       id: Math.floor(Math.random() * 10000),
    //       title: action.payload.title,
    //       content: action.payload.content,
    //     },
    //   ];

    case "delete_blogPost":
      return state.filter((item) => item.id !== action.payload);

    default:
      return state;
  }
};

export default blogReducer;
