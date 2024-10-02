import { useRouter } from "next/router";
import { TrendingCardTag } from ".";

export const TrendingCard = ({ article }) => {
  const router = useRouter();
  return (
    <div
      className="w-[293px] h-[320px] rounded-xl overflow-hidden bg-green-500 relative cursor-pointer"
      onClick={() => router.push(`/blog/${article.id}`)}
    >
      <img
        // src="/temp.jpg"
        src={article.social_image}
        alt="cover"
        className="object-cover h-full brightness-50 relative"
      />
      <div className="flex flex-col gap-4 absolute bottom-7 w-[230px] left-1/2 -translate-x-1/2">
        <div className="flex flex-wrap gap-2">
          {/* {article &&
            article.tag_list.map((tag, i) => {
              return <TrendingCardTag text={tag} key={i} />;
            })} */}
          {article.tags != "" && <TrendingCardTag text={article.tag_list[0]} />}
        </div>
        <h2 className="font-semibold text-lg text-white">
          {article && article.title}
        </h2>
      </div>
    </div>
  );
};
