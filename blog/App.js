import React from "react";
import AppContainer from "./src/navigations";
import { BlogProvider } from "./src/context/reducers/BlogContext";

export default function App() {
  return (
    <>
      <BlogProvider>
        <AppContainer />
      </BlogProvider>
    </>
  );
}
