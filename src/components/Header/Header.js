import { useNavigate } from "react-router-dom"

export default function Header() {
    const navigate = useNavigate();
    return (
        <div className="bg-blue-800 text-white flex justify-between p-2 font-bold">
            {/* Left side */}
            <div className="text-xl cursor-pointer" onClick={() => navigate("/")}>
                Blogs
            </div>

            {/* Right side */}
            {false ? <div className="flex justify-between gap-3">
                <div onClick={() => navigate("/login")} className=" cursor-pointer">Login</div>
                <div className=" cursor-pointer">Register</div>
            </div>
                : <div className="flex justify-between gap-3">
                    <div className=" cursor-pointer">Ishwari Kanase</div>
                    <div className=" cursor-pointer" onClick={() => navigate("/login")}><i class="fa fa-arrow-circle-o-right" aria-hidden="true" /> Logout</div>
                </div>}
        </div>
    )
}