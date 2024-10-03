import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const SinglePost = () => {
  const [article, setArticle] = useState({});
  const searchParam = useSearchParams();
  const value = searchParam.get("selectedId");

  const fetchData = () => {
    fetch(`https://dev.to/api/articles/${value}`)
      .then((response) => response.json())
      .then((data) => setArticle(data));
  };

  useEffect(() => {
    fetchData;
  }, []);
  return (
    <div>
      <div></div>
    </div>
  );
};

export default SinglePost;
