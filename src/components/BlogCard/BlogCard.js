import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function BlogCard({ blog, getAllBlogs }) {
    const navigate = useNavigate();
    let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    const handleBlogDelete = () => {
        if (loggedInUser.emailId === blog.createdBy) {
            axios.delete(`http://localhost:4200/blogs/${blog.id}`).then((response) => {
                if (response.status === 200) {
                    getAllBlogs();
                } else {
                    alert("Unable to delete the blog")
                }
            })
        } else {
            alert("Access denied")
        }
    }

    return (
        <div>
            <div className=" border border-gray-400 p-2 my-2 bg-white rounded-[3px]">
                <div className="text-2xl font-bold">{blog.title}</div>
                <div><strong>Created By </strong> <em className="text-gray-500">{blog.createdBy}</em></div>
                <div><strong>Created At </strong> <em className="text-gray-500">{blog.createdAt}</em></div>
                <hr className="border-gray-500" />
                <div>{blog.description}</div>
                <div className="flex justify-between my-2">
                    <div className="flex gap-2">
                        <button className="bg-green-500 text-white px-2 py-1 rounded-[3px]"><i class="fa fa-thumbs-up mx-1" aria-hidden="true" />{blog.likes}</button>
                        <button className="bg-yellow-400 text-white px-2 py-1 rounded-[3px]"><i class="fa fa-thumbs-down mx-1" aria-hidden="true" />{blog.dislikes}</button>
                    </div>
                    {loggedInUser.emailId === blog.createdBy && <div className="flex gap-2">
                        <button className="bg-gray-400 text-white px-2 py-1 rounded-[3px]"><i class="fa fa-pencil mx-1" aria-hidden="true" onClick={() => navigate(`/blog/${blog.id}?`)} />Edit</button>
                        <button className="bg-red-500 text-white px-2 py-1 rounded-[3px]"><i class="fa fa-trash mx-1" aria-hidden="true" onClick={handleBlogDelete} />Delete</button>
                    </div>}
                </div>
            </div>
        </div>
    )
}