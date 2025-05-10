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

    const handleLikesDislikes = (reaction) => {
        let users = [...blog[reaction]];
        if (users.includes(loggedInUser.id)) {
            return;
        } else {
            users.push(loggedInUser.id)
            let request = {
                [reaction]: users
            }
            axios.patch(`http://localhost:4200/blogs/${blog.id}`, request).then((response) => {
                if (response.status === 200) {
                    getAllBlogs();
                } else {
                    alert(`Unable to ${reaction} the blog`)
                }
            })
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
                        <button className="bg-green-500 text-white px-2 py-1 rounded-[3px]" onClick={() => handleLikesDislikes("likes")}><i class="fa fa-thumbs-up mx-1" aria-hidden="true" />{blog.likes.length}</button>
                        <button className="bg-yellow-400 text-white px-2 py-1 rounded-[3px]" onClick={() => handleLikesDislikes("dislikes")}><i class="fa fa-thumbs-down mx-1" aria-hidden="true" />{blog.dislikes.length}</button>
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