import { FaFacebookF, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc"; // colored Google icon

const RightSidebar = () => {
  return (
    <div className="space-y-6">
      {/* Login With */}
      <div>
        <h2 className="text-xl font-bold mb-3">Login With</h2>
        <div className="flex flex-col gap-2">
          <button className="btn btn-outline w-full justify-start gap-2 border-gray-300 text-blue-600 hover:bg-blue-50 hover:border-blue-400 hover:text-blue-600">
            <FcGoogle className="text-lg" />
            Login with Google
          </button>

          <button className="btn btn-outline w-full justify-start gap-2 border-gray-300 text-gray-800 hover:bg-gray-100 hover:border-gray-400 hover:text-gray-800">
            <FaGithub className="text-lg" />
            Login with Github
          </button>
        </div>
      </div>

      {/* Find Us On */}
      <div>
        <h2 className="text-xl font-bold mb-3">Find Us On</h2>
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-200 hover:bg-gray-50 cursor-pointer">
            <FaFacebookF className="text-blue-600 text-lg" />
            <span className="text-gray-700">Facebook</span>
          </div>

          <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-200 hover:bg-gray-50 cursor-pointer">
            <FaTwitter className="text-sky-500 text-lg" />
            <span className="text-gray-700">Twitter</span>
          </div>

          <div className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 cursor-pointer">
            <FaInstagram className="text-pink-500 text-lg" />
            <span className="text-gray-700">Twitter</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
