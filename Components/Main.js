import { useCallback, useEffect, useState } from "react";
import useBlockchain from "../hooks/use-blockchain";
import TaskList from "./TaskList";

function Main() {
    const { contract, signer } = useBlockchain();
    const [tasks, setTasks] = useState([]);

    const loadTasks = useCallback(async () => {
        if (!contract) {
            return;
        }

        const count = (await contract.getTasksCount()).toNumber();

        if (!count) {
            setTasks([]);
            return;
        }

        const loadedTasks = [];

        for (let index = 0; index < count; index++) {
            const task = await contract.getTask(index);
            loadedTasks.push(task);
        }

        setTasks(loadedTasks);
    }, [contract]);

    useEffect(() => {
        loadTasks();
    }, [loadTasks]);

    async function handleFormSubmit(event) {
        event.preventDefault();
        const input = event?.target?.content;
        const value = input?.value;

        if (input) {
            input.value = "";
        }

        const response = await contract.createTask(value);
        await response.wait();
        loadTasks();
    }

    return (
        <main className="Main">
            {signer ? (
                <>
                    <form onSubmit={handleFormSubmit}>
                        <input
                            placeholder="Add a new task..."
                            type="text"
                            name="content"
                            className="placeholder-white
                            bg-gradient-to-r from-purple-700 via-purple-400 to-pink-500 
                            flex w-full rounded-md space-x-2 px-10 py-5 shadow-lg text-2xl mb-5
                            active: text-white  
                           "
                        />
                        <button hidden type="submit">
                            Submit
                        </button>
                    </form>
                    <TaskList tasks={tasks} loadTasks={loadTasks} />
                </>
            ) : (
                <p className="text-2xl">Please connect to your wallet.</p>
            )}
        </main>
    );
}

export default Main;