import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { AllBlogPost } from "./AllBlogPost";
import { Header } from "./Header";
import { Trending } from "./Trending";

export const Home = () => {
  let [articles, setArticles] = useState([]);

  useEffect(() => {
    console.log(process.env);
    axios
      .get(`${process.env.REACT_APP_BACKEND_ENDPOINT}/articles`)
      .then((response) => {
        setArticles(response.data);
        console.log(articles, "articles");
      });
  }, []);

  return (
    <>
      <Header />
      <Trending />
      <AllBlogPost articles={articles} />
    </>
  );
};
