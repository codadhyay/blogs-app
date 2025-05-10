import { useNavigate } from "react-router-dom";
import BlogCard from "../BlogCard/BlogCard";
import { useEffect, useState } from "react";
import axios from "axios";

export default function BlogsList() {
    const navigate = useNavigate();

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        getAllBlogs();
    }, [])


    const getAllBlogs = () => {
        axios.get("http://localhost:4200/blogs").then((response) => {
            if (response.status === 200) {
                setBlogs(response.data)
            } else {
                alert("Unable to process your request")
            }
        })
    }

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
                {blogs.map((singleBlog) => {
                    return <BlogCard blog={singleBlog} getAllBlogs={getAllBlogs}/>
                })}
            </div>
        </div>
    )
}