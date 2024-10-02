import { useEffect, useState } from "react";

export default function test() {
  const [articles, setArticles] = useState([]);

  const fetchData = () => {
    fetch("https://dev.to/api/articles")
      .then((response) => response.json())
      .then((data) => setArticles(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(articles);

  return (
    <div>
      {articles.map((article) => {
        return <p>{article.title}</p>;
      })}
    </div>
  );
}
