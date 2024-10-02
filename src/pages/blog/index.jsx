import { Header, Footer, BlogCardContainer } from "@/components";
import Head from "next/head";
import { useState, useEffect } from "react";

const Blog = () => {
  const [articles, setArticles] = useState([]);
  const [blogFilter, setBlogFilter] = useState("All");
  const [blogLimit, setBlogLimit] = useState(12);
  const [searchValue, setSearchValue] = useState("");

  const filterArticles = articles.filter((article) => {
    return article.title.toLowerCase().includes(searchValue.toLowerCase());
  });

  const updateSearchValue = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  const filters = [
    "All",
    "Design",
    "Travel",
    "Fashion",
    "Technology",
    "Branding",
  ];

  const fetchData = (filter = blogFilter, limit = blogLimit) => {
    fetch(
      `https://dev.to/api/articles?per_page=${limit}${
        filter != "All" && `&tag=${filter.toLowerCase()}`
      }`
    )
      .then((response) => response.json())
      .then((data) => setArticles(data));
  };

  const increaseBlogLimit = () => {
    const newLimit = blogLimit + 3;
    setBlogLimit(newLimit);
    fetchData(blogFilter, newLimit);
  };

  const changeBlogFilter = (filter) => {
    setBlogFilter(filter);
    fetchData(filter, blogLimit);
  };

  useEffect(() => {
    fetchData(blogFilter, blogLimit);
  }, []);

  return (
    <>
      <Head>
        <title>MetaBlog | Blog</title>
      </Head>
      <div className="flex flex-col gap-12">
        <Header handleChange={updateSearchValue} />
        <div className="max-w-screen-xl mx-auto">
          <BlogCardContainer
            articles={searchValue == "" ? articles : filterArticles}
            blogFilter={blogFilter}
            changeBlogFilter={changeBlogFilter}
            filters={filters}
            handleClick={increaseBlogLimit}
            showUser={true}
            showFilterOptions={false}
          />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Blog;
