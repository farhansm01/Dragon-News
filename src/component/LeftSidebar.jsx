import Link from "next/link";

export default function LeftSidebar({ categories, activeId }) {
  return (
    <div className="px-2">
      <h2 className="text-xl font-bold mb-4">All Caterogy</h2>

      {/* Dynamic list from API */}
      <ul className="space-y-3 mt-2">
        {categories.map((cat) => (
          <li
            key={cat.category_id}
            className={`${activeId === cat.category_id && "bg-slate-300"} text-gray-800 px-4 py-2 rounded-lg cursor-pointer hover:text-gray-800 transition-colors`}
          >
            <Link className="block" href={`/category/${cat.category_id}`}>
              {cat.category_name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
