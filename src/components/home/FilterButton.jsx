const FilterButton = ({ text, handleClick, blogFilter }) => {
  return (
    <button
      onClick={handleClick}
      className={`${
        blogFilter == text ? "text-[#D4A373]" : "text-[#495057]"
      } font-bold text-xs`}
    >
      {text}
    </button>
  );
};

export default FilterButton;
