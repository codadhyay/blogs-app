import { useNavigate } from "react-router-dom";
import BlogCard from "../BlogCard/BlogCard";

export default function BlogsList() {
    const navigate = useNavigate();

    return (
        <div className="flex justify-center">
            <div className=" w-[70%]">
                {/* Info and Create new post button */}
                <div className=" mt-5">
                    <div className="flex justify-between my-2">
                        <div className="text-2xl font-bold">Blogs</div>
                        <button className="bg-blue-800 text-white px-2 py-1 rounded-[3px] font-bold" onClick={() => navigate("/blog")}><i class="fa fa-plus-circle mx-1" aria-hidden="true" />Create new post</button>
                    </div>
                    <div>
                        <div>Publish your passions, your way...</div>
                    </div>
                    <hr className="border-gray-500" />
                </div>
                <BlogCard />
            </div>
        </div>
    )
}