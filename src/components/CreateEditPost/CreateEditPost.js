import { useNavigate } from "react-router-dom";

export default function CreateEditPost() {
    const navigate = useNavigate();

    return (
        <div className="flex justify-center mt-10 rounded-[5px]">
            <div className="bg-white w-[70%] p-3">
                <div>
                    <input placeholder="Title" className="w-[100%] font-bold text-2xl border-b-2 border-slate-300 my-2 p-2" />
                </div>
                <div>
                    <textarea placeholder="Description" className="w-[100%] border-2 border-slate-200 rounded-[5px] p-2" rows={10}>

                    </textarea>
                </div>
                <div className="flex justify-end gap-2">
                    <button className="bg-blue-800 text-white px-2 py-1 rounded-[3px]" onClick={() => navigate(-1)}>Cancel</button>
                    <button className="bg-blue-800 text-white px-2 py-1 rounded-[3px]" onClick={() => navigate("/blogsList")}>Save</button>
                </div>
            </div>
        </div>
    )
}