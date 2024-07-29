import { useEffect, useState } from "react";
import { Section } from "./Section";
import { DetailData } from "./DetailData";
import { useParams } from "react-router-dom";
import axios from "axios";
import { computeHeadingLevel } from "@testing-library/react";

export const DetailPage = () => {
  const { id } = useParams();
  console.log(id);
  let [articles, setArticles] = useState({ user: {} });

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_ENDPOINT}/articles/${id}`)
      .then((response) => {
        setArticles(response.data);
        console.log(articles, "articles");
      });
  }, []);

  return (
    <Section>
      <DetailData
        title={articles.title}
        proImage={articles.user.profile_image || ""}
        userName={articles.user.username || ""}
        date={articles.published_at}
        image={articles.social_image}
        text1={articles.description}
      />
    </Section>
  );
};
