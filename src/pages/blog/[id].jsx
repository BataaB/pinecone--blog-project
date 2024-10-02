import { Footer, FormatDate, Header, Profile } from "@/components";
import Loading from "@/components/Loading";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const SinglePost = () => {
  const [article, setArticle] = useState(null);
  const router = useRouter();
  const id = router.query.id;

  const fetchData = () => {
    fetch(`https://dev.to/api/articles/${id}`)
      .then((response) => response.json())
      .then((data) => setArticle(data));
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  if (!article) {
    return <Loading />;
  }
  return (
    <div className="flex flex-col gap-[100px]">
      <Header />
      {/* <Link href={article.canonical_url}>Original</Link> */}
      <div className="flex flex-col gap-8 w-[800px] mx-auto">
        <div className="flex flex-col gap-5">
          <h1 className="font-semibold text-4xl text-[#181A2A]">
            {article.title}
          </h1>
          <div className="flex items-center gap-6">
            <Profile size={28} user={article.user} color="#696A75" />
            <FormatDate date={article.published_at} color="#696A75" />
          </div>
        </div>
        <img
          // src="/temp.jpg"
          src={article.social_image}
          alt="cover image"
          className="w-full rounded-xl"
        />
        <div dangerouslySetInnerHTML={{ __html: article.body_html }}></div>
      </div>
      <Footer />
    </div>
  );
};

export default SinglePost;
