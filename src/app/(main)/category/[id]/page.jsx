import LeftSidebar from "@/component/LeftSidebar";
import NewsCard from "@/component/NewsCard";
import RightSidebar from "@/component/RightSidebar";
import { getCategories, getNewsByCategoryId } from "@/lib/data";

export default async function NewsCategoryPage({ params }) {
  const { id } = await params;

  const categories = await getCategories();

  const news = await getNewsByCategoryId(id);

  return (
    <div className="grid grid-cols-12 gap-4 container mx-auto">
      <div className="col-span-3">
        <LeftSidebar categories={categories} activeId={id} />
      </div>

      <div className=" px-2 py-3 font-bold  col-span-6">
        {news.length > 0 ? (
          news.map((n) => {
            return <NewsCard news={n} key={n._id}></NewsCard>;
          })
        ) : (
          <h2 className="font-bold text-4xl text-center my-7">
            No News Found!!
          </h2>
        )}
      </div>

      <div className=" col-span-3">
        <RightSidebar />
      </div>
    </div>
  );
}
