import { useNavigate } from "react-router-dom"

export default function Dashboard() {

    const navigate = useNavigate();

    return (
        <div className="bg-[#dcdcdc] h-screen flex justify-center">
            <div className="w-[70%] bg-white h-[20%] mt-10 px-2 py-4 rounded-[5px]">
                <div className="text-2xl font-bold">Blogs!</div>
                <div>Publish your passions, your way ...</div>
                <hr className="border-gray-300" />
                <div className="flex justify-end gap-2 mt-2">
                    <button className="bg-blue-800 text-white py-1 px-2 rounded-[3px]" onClick={() => navigate("/login")}>Login</button>
                    <button className="bg-blue-800 text-white py-1 px-2 rounded-[3px]" onClick={() => navigate("/register")}>Register</button>
                </div>
            </div>
        </div>
    )
}