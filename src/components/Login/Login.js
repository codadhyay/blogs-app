import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom"

export default function Login() {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        emailId: "",
        password: ""
    });

    const handleUserChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        let userData = { ...user };
        userData[name] = value;
        setUser(userData)
    }

    const getAllUsers = async () => {
        let dbUsers = []
        await axios.get("http://localhost:4200/users").then((response) => {
            console.log('response: ', response);
            if (response.status === 200) {
                dbUsers = response.data;
            } else {
                alert("Error in getting users")
            }
        })
        return dbUsers;
    }

    const handleLogin = async () => {
        const dbUsers = await getAllUsers();

        const matchedUser = await dbUsers.find((singleDbUser) => {
            if (singleDbUser.emailId === user.emailId) {
                return singleDbUser;
            }
        });

        if (!user.emailId || !user.password) {
            alert("Please fill the required fields")
        } else if (!matchedUser) {
            alert("User not found")
        } else if (matchedUser) {
            navigate("/blogsList")
            localStorage.setItem("loggedInUser", JSON.stringify(matchedUser))
        }
    }

    return (
        <div className="bg-[#dcdcdc] flex justify-center mt-20">
            <div className="w-[25%] bg-gray-200 h-[60%]  px-2 py-4 rounded-[5px]">
                <div className="text-2xl font-bold">Blogs</div>
                <div>Publish your passions, your way ...</div>
                <hr className="border-gray-300" />
                <div className="text-blue-800 font-bold text-2xl text-center mt-4">Login</div>
                <div className="my-4">
                    <div>
                        <label>Email id</label>
                    </div>
                    <div>
                        <input placeholder="test@gmail.com" type="text" className="w-[100%] rounded-[3px] p-1" name="emailId" value={user.emailId} onChange={handleUserChange} />
                    </div>
                </div>
                <div className="my-4">
                    <div>
                        <label>Password</label>
                    </div>
                    <div>
                        <input placeholder="Test@123" type="password" className="w-[100%] rounded-[3px] p-1" name="password" value={user.password} onChange={handleUserChange} />
                    </div>
                </div>
                <div className="my-8">
                    <button className="w-[100%] bg-blue-800 text-white underline rounded-[3px] p-1 font-bold" onClick={handleLogin}>Login</button>
                </div>
            </div>
        </div>
    )
}