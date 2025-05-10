import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function CreateEditPost() {
    const navigate = useNavigate();

    let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    let { blogId } = useParams();

    useEffect(() => {
        if (blogId) {
            getBlogById();
        }
    }, [])

    const getBlogById = () => {
        axios.get(`http://localhost:4200/blogs/${blogId}`).then((response) => {
            if (response.status === 200) {
                setBlog(response.data)
            } else {
                alert("Unable to get requested blog")
            }
        })
    }

    const [blog, setBlog] = useState({
        title: "",
        description: "",
        likes: [],
        dislikes: [],
        createdBy: loggedInUser.emailId,
        createdAt: new moment().format("LLL")
    })

    const handleBlogChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        let blogData = { ...blog };
        blogData[name] = value;
        setBlog(blogData);
    }

    const handleSaveBlog = () => {
        if (blogId) {
            axios.put(`http://localhost:4200/blogs/${blogId}`, blog).then((response) => {
                if (response.status === 200) {
                    navigate("/blogsList");
                }
                else {
                    alert("Unable to process your request")
                }
            })
        } else {
            axios.post("http://localhost:4200/blogs", blog).then((response) => {
                if (response.status === 201) {
                    navigate("/blogsList");
                }
                else {
                    alert("Unable to process your request")
                }
            })
        }
    }

    return (
        <div className="flex justify-center mt-10 rounded-[5px]">
            <div className="bg-white w-[70%] p-3">
                <div>
                    <input placeholder="Title" className="w-[100%] font-bold text-2xl border-b-2 border-slate-300 my-2 p-2" name="title" value={blog.title} onChange={handleBlogChange} />
                </div>
                <div>
                    <textarea placeholder="Description" className="w-[100%] border-2 border-slate-200 rounded-[5px] p-2" rows={10} name='description' value={blog.description} onChange={handleBlogChange}>

                    </textarea>
                </div>
                <div className="flex justify-end gap-2">
                    <button className="bg-blue-800 text-white px-2 py-1 rounded-[3px]" onClick={() => navigate(-1)}>Cancel</button>
                    <button className="bg-blue-800 text-white px-2 py-1 rounded-[3px]" onClick={handleSaveBlog}>Save</button>
                </div>
            </div>
        </div>
    )
}