export const FormatDate = ({ date, color }) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "Octoboer",
    "November",
    "December",
  ];
  if (!date) {
    return null;
  }
  const [year, month, day] = date.split("T")[0].split("-");
  return (
    <p className={`text-[${color}]`}>{`${
      months[parseInt(month) - 1]
    } ${day}, ${year}`}</p>
  );
};
