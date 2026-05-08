import { getNewsById } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export const generateMetadata = async ({ params }) => {
  const { id } = await params;
  const news = await getNewsById(id);

  return {
    title: news.title,
    description: news.details,
  };
};

const NewsDetails = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/${id}`,
  );
  const data = await res.json();
  const news = data.data[0];

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <h2 className="text-lg font-bold mb-3">Dragon News</h2>

      <div className=" rounded p-4">
        {/* Thumbnail */}
        <div className="relative w-full h-72 mb-4">
          <Image
            src={news.image_url}
            alt={news.title}
            fill
            className="object-cover rounded"
          />
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold mb-3">{news.title}</h1>

        {/* Meta */}
        <p className="text-sm text-gray-500 mb-3">
          {news.author?.published_date} | Rating:{" "}
          <span className="font-semibold text-yellow-500">
            ⭐ {news.rating?.number} ({news.rating?.badge})
          </span>{" "}
          | Views: {news.total_view}
        </p>

        {/* Body */}
        <p className="text-gray-700 text-sm leading-relaxed mb-6">
          {news.details}
        </p>

        {/* Back button */}
        <Link
          href={`/category/${news.category_id}`}
          className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded text-sm font-medium transition"
        >
          <FaArrowLeft /> All news in this category
        </Link>
      </div>
    </div>
  );
};

export default NewsDetails;
