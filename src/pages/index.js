import {
  Header,
  CarouselCard,
  TrendingCard,
  BlogCardContainer,
  Footer,
} from "@/components";
import SliderButtonLogos from "@/icons/SliderButtonLogos";
import Head from "next/head";
import { useState, useEffect } from "react";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [blogFilter, setBlogFilter] = useState("All");
  const [blogLimit, setBlogLimit] = useState(9);
  const [trendingArticles, setTrendingArticles] = useState([]);

  const [carouselArticles, setCarouselArticles] = useState([]);
  const [carouselIndex, setCarouselIndex] = useState(0);

  // const filters = [
  //   "All",
  //   "Design",
  //   "Travel",
  //   "Fashion",
  //   "Technology",
  //   "Branding",
  // ];
  const filters = ["All", "JavaScript", "CSS", "Design"];

  const fetchCarouselData = () => {
    fetch(`https://dev.to/api/articles?per_page=4&state=fresh`)
      .then((response) => response.json())
      .then((data) => setCarouselArticles(data));
  };

  const fetchTrendingData = () => {
    fetch(`https://dev.to/api/articles?per_page=4&tag=trending`)
      .then((response) => response.json())
      .then((data) => setTrendingArticles(data));
  };

  const fetchData = () => {
    fetch(
      `https://dev.to/api/articles?per_page=${blogLimit}${
        blogFilter != "All" && `&tag=${blogFilter.toLowerCase()}`
      }`
    )
      .then((response) => response.json())
      .then((data) => setArticles(data));
  };

  const increaseBlogLimit = () => {
    const newLimit = blogLimit + 3;
    setBlogLimit(newLimit);
  };

  const moveSlide = (type) => {
    let newIndex;
    if (type == "back") {
      newIndex = carouselIndex - 1;
    } else {
      newIndex = carouselIndex + 1;
    }
    setCarouselIndex(newIndex % 4);
  };

  useEffect(() => {
    fetchTrendingData();
    fetchCarouselData();
  }, []);

  useEffect(() => {
    fetchData();
  }, [blogFilter, blogLimit]);
  // console.log(carouselArticles[0]);
  return (
    <>
      <Head>
        <title>MetaBlog | Home</title>
      </Head>
      <div className="flex flex-col gap-[100px]">
        <Header />
        <div className="flex flex-col gap-[100px] max-w-screen-xl  mx-auto">
          <div className="">
            <CarouselCard article={carouselArticles[carouselIndex]} />
            <div className="flex justify-end gap-2 mt-3">
              <button
                onClick={() => moveSlide("back")}
                disabled={carouselIndex == 0}
                className="disabled:bg-[#696A75] rounded-[6px]"
              >
                <SliderButtonLogos type={"back"} />
              </button>
              <button
                onClick={() => moveSlide("forward")}
                disabled={carouselIndex == carouselArticles.length - 1}
                className="disabled:bg-[#696A75] rounded-[6px]"
              >
                <SliderButtonLogos type={"forward"} />
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-8 ">
            <h1 className="font-bold text-2xl text-[#181A2A]">Trending</h1>
            <div className="flex gap-5">
              {trendingArticles.map((article, i) => {
                return <TrendingCard article={article} key={i} />;
              })}
            </div>
          </div>
          <BlogCardContainer
            articles={articles}
            blogFilter={blogFilter}
            changeBlogFilter={setBlogFilter}
            filters={filters}
            handleClick={increaseBlogLimit}
            showUser={false}
            showFilterOptions={true}
          />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
