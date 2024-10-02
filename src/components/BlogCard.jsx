import Image from "next/image";
import BlogCardTag from "./BlogCardTag";
import { FormatDate, Profile } from ".";
import { useRouter } from "next/router";

export const BlogCard = ({ article, showUser }) => {
  const router = useRouter();
  return (
    <div
      className=" p-4 flex flex-col gap-4 rounded-xl border-2 border-[#E8E8EA] w-[392px] cursor-pointer
                 hover:bg-[#E8E8EA]"
      onClick={() => router.push(`/blog/${article.id}`)}
    >
      <img
        // src={"/temp.jpg"}
        src={article.social_image}
        width={360}
        height={240}
        alt="img"
        className="rounded-md w-full"
      />
      <div className="flex flex-col justify-between gap-5 h-full">
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap gap-2">
            {/* {article.tag_list.map((tag, i) => {
              return <BlogCardTag text={tag} key={i} />;
            })} */}
            <BlogCardTag text={article.tag_list[0]} />
          </div>
          <h1 className="font-semibold text-2xl text-[#181A2A]">
            {article.title}
          </h1>
        </div>
        <div className="flex gap-5 items-center">
          {showUser && (
            <Profile size={36} username={article.user} color="#97989F" />
          )}
          <FormatDate date={article.published_at} color="#97989F" />
        </div>
      </div>
    </div>
  );
};
