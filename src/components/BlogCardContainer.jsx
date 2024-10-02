import { BlogCard } from ".";
import FilterButton from "./home/FilterButton";

export const BlogCardContainer = ({
  articles,
  blogFilter,
  changeBlogFilter,
  filters,
  handleClick,
  showUser,
  showFilterOptions,
}) => {
  if (articles.length == 0) {
    return (
      <div className="font-semibold text-5xl my-10 text-black">
        No Result Found
      </div>
    );
  } else {
    return (
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-8">
          <h1 className="font-bold text-2xl text-[#181A2A]">All Blog Post</h1>
          {showFilterOptions && (
            <div className="flex justify-between">
              <div className="flex gap-5">
                {filters.map((filter, i) => {
                  return (
                    <FilterButton
                      text={filter}
                      handleClick={() => changeBlogFilter(filter)}
                      blogFilter={blogFilter}
                      key={i}
                    />
                  );
                })}
                {/* <FilterButton
                text="All"
                handleClick={() => {}}
                blogFilter={blogFilter}
                setBlogFilter={setBlogFilter}
              />
              <FilterButton
                text="Design"
                handleClick={() => {}}
                blogFilter={blogFilter}
                setBlogFilter={setBlogFilter}
              />
              <FilterButton
                text="Travel"
                handleClick={() => {}}
                blogFilter={blogFilter}
                setBlogFilter={setBlogFilter}
              />
              <FilterButton
                text="Fashion"
                handleClick={() => {}}
                blogFilter={blogFilter}
                setBlogFilter={setBlogFilter}
              />
              <FilterButton
                text="Technology"
                handleClick={() => {}}
                blogFilter={blogFilter}
                setBlogFilter={setBlogFilter}
              />
              <FilterButton
                text="Branding"
                handleClick={() => {}}
                blogFilter={blogFilter}
                setBlogFilter={setBlogFilter}
              /> */}
              </div>
              <button className="text-[#495057] font-bold text-xs">
                View All
              </button>
            </div>
          )}
        </div>
        <div className="flex flex-wrap gap-5 justify-center">
          {articles.map((article, i) => {
            return (
              <BlogCard
                article={article}
                key={"article-" + i}
                showUser={showUser}
              />
            );
          })}
        </div>
        <button
          className="text-[#696A75] hover:bg-[#696A75] hover:text-white
                      font-medium py-3 px-5 border-2 border-[#696A754D] rounded-md w-[123px] mx-auto"
          onClick={() => handleClick()}
        >
          Load More
        </button>
      </div>
    );
  }
};
