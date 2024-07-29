import { AllBlogPost } from "./component/AllBlogPost";
import { Text } from "./component/Text";
import { PageNotFound } from "./component/PageNotFound";
import { ContactSection } from "./component/ContactSection";
import { Navigate, Route, Routes } from "react-router-dom";
import { BasicLayout } from "./Layout/BasicLayout";
import { DetailPage, Home } from "./component";
import { AllBlog } from "./component";
import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";

function App() {
  let [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_ENDPOINT}/articles/`)
      .then((response) => {
        setArticles(response.data);
        console.log(articles, "articles");
      });
  }, []);

  return (
    <BasicLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<AllBlogPost articles={articles} />} />
        <Route path="/contactus" element={<ContactSection />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/allblogs" element={<AllBlog articles={articles} />} />
        <Route path=":id" element={<DetailPage />} />
      </Routes>
      {/* <Text /> */}
    </BasicLayout>
  );
}

export default App;
