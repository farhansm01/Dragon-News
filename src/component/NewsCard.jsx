import Image from "next/image";
import Link from "next/link";
import {
  FaBookmark,
  FaEye,
  FaRegStar,
  FaShareAlt,
  FaStar,
} from "react-icons/fa";

export default function NewsCard({ news }) {
  const { title, author, thumbnail_url, details, rating, total_view } = news;
  const { name, published_date, img } = author;
  const publishedDate = new Date(published_date).toISOString().split("T")[0];

  const renderStars = (num) => {
    return Array.from({ length: 5 }, (_, i) =>
      i < Math.round(num) ? (
        <FaStar key={i} className="text-orange-400 text-sm" />
      ) : (
        <FaRegStar key={i} className="text-orange-400 text-sm" />
      ),
    );
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 mb-6">
      {/* Author Row */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <Image
            src={img}
            alt={name}
            width={40}
            height={40}
            className="rounded-full object-cover"
          />
          <div>
            <p className="font-semibold text-gray-800 text-sm">{name}</p>
            <p className="text-gray-400 text-xs">{publishedDate}</p>
          </div>
        </div>
        <div className="flex items-center gap-3 text-gray-400">
          <FaBookmark className="cursor-pointer hover:text-gray-600 text-sm" />
          <FaShareAlt className="cursor-pointer hover:text-gray-600 text-sm" />
        </div>
      </div>

      {/* Title */}
      <h2 className="text-lg font-bold text-gray-900 leading-snug mb-3">
        {title}
      </h2>

      {/* Thumbnail */}
      <div className="relative w-full h-62 mb-4">
        <Image
          src={thumbnail_url}
          alt={title}
          fill
          className="object-cover rounded-lg"
        />
      </div>

      {/* Details */}
      <p className="text-gray-500 text-sm leading-relaxed mb-1">
        {details.slice(0, 200)}...{" "}
        <Link
          href={`/news/${news._id}`}
          className="text-red-500 font-medium cursor-pointer hover:underline"
        >
          Read More
        </Link>
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-0.5">
            {renderStars(rating.number)}
          </div>
          <span className="text-gray-600 text-sm font-medium">
            {rating.number}
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-gray-400 text-sm">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
}
