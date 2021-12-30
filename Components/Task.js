
function Task({ task, handleTaskCheck, handleTaskDelete }) {
    return (
        <div className="items-center bg-white  flex rounded-md space-x-2 px-10 py-5 shadow-lg text-2xl">
            <button className="bg-red-500 text-white px-[15px] 
            hover:bg-red-600
            py-[5px] rounded-md text-xl ml-5" onClick={handleTaskDelete}>
                X
            </button>
            <input
                className="w-[40px] h-[35px] accent-purple-500 "
                type="checkbox"
                checked={task.completed}
                onClick={() => !task.completed && handleTaskCheck()}
                readOnly
            />
            <p className={task.completed ? 
                "font-semibold text-green-400" : 
                "text-red-500 font-semibold"}>
                    {task.content}</p>
            <div className="flex justify-end">
            
            </div>
        </div>
    );
}

export default Task;