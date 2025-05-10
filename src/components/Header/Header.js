import { useNavigate } from "react-router-dom"

export default function Header() {
    const navigate = useNavigate();
    let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    const handleLogout = () => {
        localStorage.removeItem("loggedInUser");
        navigate("/login")
    }
    return (
        <div className="bg-blue-800 text-white flex justify-between p-2 font-bold">
            {/* Left side */}
            <div className="text-xl cursor-pointer" onClick={() => navigate("/")}>
                Blogs
            </div>

            {/* Right side */}
            {!loggedInUser ?
                <div className="flex justify-between gap-3">
                    <div onClick={() => navigate("/login")} className=" cursor-pointer">Login</div>
                    <div onClick={() => navigate("/register")} className=" cursor-pointer">Register</div>
                </div>
                :
                <div className="flex justify-between gap-3">
                    <div className=" cursor-pointer">{loggedInUser.name}</div>
                    <div className=" cursor-pointer" onClick={handleLogout}><i class="fa fa-arrow-circle-o-right" aria-hidden="true" /> Logout</div>
                </div>
            }
        </div>
    )
}