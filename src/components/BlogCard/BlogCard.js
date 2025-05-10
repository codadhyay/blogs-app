import { useNavigate } from "react-router-dom";

export default function BlogCard() {
    const navigate = useNavigate();

    return (
        <div>
            <div className=" border border-gray-400 p-2 my-2 bg-white rounded-[3px]">
                <div className="text-2xl font-bold">Hello World</div>
                <div><strong>Created By </strong> <em className="text-gray-500">ishwari.kanase@gmail.com</em></div>
                <div><strong>Created At </strong> <em className="text-gray-500">10<sup>th</sup> May, 2025</em></div>
                <hr className="border-gray-500" />
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                <div className="flex justify-between my-2">
                    <div className="flex gap-2">
                        <button className="bg-green-500 text-white px-2 py-1 rounded-[3px]"><i class="fa fa-thumbs-up mx-1" aria-hidden="true" />0</button>
                        <button className="bg-yellow-400 text-white px-2 py-1 rounded-[3px]"><i class="fa fa-thumbs-down mx-1" aria-hidden="true" />0</button>
                    </div>
                    <div className="flex gap-2">
                        <button className="bg-gray-400 text-white px-2 py-1 rounded-[3px]"><i class="fa fa-pencil mx-1" aria-hidden="true" onClick={() => navigate("/blog")} />Edit</button>
                        <button className="bg-red-500 text-white px-2 py-1 rounded-[3px]"><i class="fa fa-trash mx-1" aria-hidden="true" />Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}