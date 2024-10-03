import { useRouter } from "next/router";
import { FormatDate, TrendingCardTag } from ".";
import moment from "moment";

export const CarouselCard = ({ article }) => {
  const router = useRouter();
  if (!article) {
    return null;
  }
  return (
    <div
      className="w-full h-[600px] bg-red-400 rounded-xl relative cursor-pointer"
      onClick={() => router.push(`/blog/${article.id}`)}
    >
      <img
        // src="/temp.jpg"
        src={article.social_image}
        width={1216}
        height={600}
        alt="cover"
        className="rounded-xl object-cover w-full h-full brightness-50"
      />
      <div
        className="bg-white border-[1px] border-[#E8E8EA] absolute left-5 bottom-5
                    w-[598px] rounded-xl p-10
                    flex flex-col gap-6"
      >
        <div className="flex flex-col gap-4">
          <div className="flex gap-2 flex-wrap">
            {/* {article.tag_list.map((tag, i) => {
              return <TrendingCardTag text={tag} key={i} />;
            })} */}
            {article.tags != "" && (
              <TrendingCardTag text={article.tag_list[0]} />
            )}
          </div>
          <h1 className="font-semibold text-4xl text-[#181A2A]">
            {article.title}
          </h1>
        </div>
        <span className="text-[#696A75]">
          {moment(article.published_at, "YYYYMMDD").format("LL")}
        </span>
      </div>
    </div>
  );
};
