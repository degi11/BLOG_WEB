import { usestate, useRef, useState, useEffect } from "react";
import axios from "axios";

export const Text = () => {
  // const [count, setCount] = useState(10);
  // const [check, setCheck] = useState(false);

  // useEffect(() => {
  //   if (count <= 0) return;

  //   if (check) {
  //     const interval = setInterval(() => {
  //       setCount(count - 1);
  //     }, 1000);

  //     return () => clearInterval(interval);
  //   }
  // }, [count, check]);

  // const handlerClick = () => {
  //   setCheck(!check);
  // };

  let [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get("https://dev.to/api/articles").then((response) => {
      setArticles(response.data);
      console.log(articles, "articles");
    });
  }, []);

  return (
    // <div>
    //   <div>Time Remaining: {count}</div>
    //   <button onClick={handlerClick}>CLICK!</button>
    // </div>
    <div>
      <ul>
        {articles.map((articles) => (
          <li>{articles.title}</li>
        ))}
      </ul>
    </div>
  );
};
