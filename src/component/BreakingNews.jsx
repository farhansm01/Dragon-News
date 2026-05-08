import Marquee from "react-fast-marquee";
const breakingNews = [
  {
    id: 1,
    title: "Massive Storm Causes Flight Delays Across the Country | ",
  },
  {
    id: 2,
    title: "Tech Company Unveils New AI-Powered Device | ",
  },
  {
    id: 3,
    title: "Global Markets React to Sudden Oil Price Drop | ",
  },
  {
    id: 4,
    title: "Scientists Discover Possible Water Source on Mars | ",
  },
  {
    id: 5,
    title: "National Team Secures Dramatic Last-Minute Victory | ",
  },
];
const BreakingNews = () => {
  return (
    <div className="flex justify-between gap-4 items-center bg-gray-200 py-4 px-2 container mx-auto rounded-md">
      <button className="btn bg-pink-500 text-white rounded-lg">
        Latest News
      </button>
      <Marquee pauseOnHover={true} speed={100}>
        {breakingNews.map((n) => {
          return <span key={n.id}> {n.title} </span>;
        })}
      </Marquee>
    </div>
  );
};

export default BreakingNews;
