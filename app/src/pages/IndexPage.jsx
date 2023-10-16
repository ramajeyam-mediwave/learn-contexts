import React, { useContext, useState } from "react";
import Layout from "../components/Layout";
import {
  ThemeContext,
  setUserContext,
  UserContext,
} from "../contexts/DataContext";

const IndexPage = () => {
  const setUser = useContext(setUserContext);
  const userContext = useContext(UserContext);

  function handleOnChange(name, value) {
    const updatedUser = {
      ...userContext,
      [name]: value,
    };
    setUser(updatedUser);
  }

  function Click(e) {
    e.preventDefault();
    localStorage.setItem("dataKey", JSON.stringify(userContext));
  }

  return (
    <Layout title="My context app">
      <form onSubmit={(e) => Click(e)}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          placeholder="Name"
          name="name"
          onChange={(e) => handleOnChange("name", e.target.value)}
        />
        <label htmlFor="image">Proifle pic</label>
        <input
          id="image"
          type="text"
          placeholder="url"
          name="image"
          onChange={(e) => handleOnChange("image", e.target.value)}
        />
        <button type="submit">Click</button>
      </form>
    </Layout>
  );
};

export default IndexPage;
