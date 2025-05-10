import { useNavigate } from "react-router-dom"

export default function Register() {
    const navigate = useNavigate()

    return (
        <div className="bg-[#dcdcdc] flex justify-center mt-20">
            <div className="w-[25%] bg-gray-200 h-[70%] px-2 py-4 rounded-[5px]">
                <div className="text-2xl font-bold">Blogs!</div>
                <div>Publish your passions, your way ...</div>
                <hr className="border-gray-300" />
                <div className="text-blue-800 font-bold text-2xl text-center mt-4">Register</div>
                <div className="my-4">
                    <div>
                        <label>Name</label>
                    </div>
                    <div>
                        <input placeholder="Firstname Lastname" type="text" className="w-[100%] rounded-[3px] p-1" />
                    </div>
                </div>
                <div className="my-4">
                    <div>
                        <label>Email id</label>
                    </div>
                    <div>
                        <input placeholder="test@gmail.com" type="text" className="w-[100%] rounded-[3px] p-1" />
                    </div>
                </div>
                <div className="my-4">
                    <div>
                        <label>Password</label>
                    </div>
                    <div>
                        <input placeholder="Test@123" type="password" className="w-[100%] rounded-[3px] p-1" />
                    </div>
                </div>
                <div className="my-8">
                    <button className="w-[100%] bg-blue-800 text-white underline rounded-[3px] p-1 font-bold" onClick={() => navigate("/login")}>Register</button>
                </div>
            </div>
        </div>

    )
}