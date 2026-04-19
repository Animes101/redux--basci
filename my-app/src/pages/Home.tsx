import { useState } from "react";
import { useAppDispatch, useApppSelector } from "../redux/fetures/middlewere/hooks";
import { addTask, deleteTask, isComplated, selectTask } from "../redux/fetures/task/task.slice";

const Home = () => {
  const [title, setTitle] = useState("");
  const [des, setDes] = useState("");



  const tasks = useApppSelector(selectTask);
  const dispatch=useAppDispatch();


  // ✅ Add Task
  const handleAddTask = () => {
    if (!title) return;

    const newTask = {
      id: Date.now().toString(),
      title,
      des,
      isCompleted: false,
      createDate: new Date().toISOString().split("T")[0],
    };


    dispatch(addTask(newTask));

    setTitle("");
    setDes("");
  };

  // ✅ Toggle Complete / Uncomplete
  const handleToggle = (id: string) => {

    dispatch(isComplated(id))

  
  };

  // ✅ Delete Task
  const handleDelete = (id: string) => {

    dispatch(deleteTask(id))




    
    
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <h1 className="text-3xl font-bold text-center mb-6">
        📝 Task Manager
      </h1>

      {/* Input Box */}
      <div className="max-w-xl mx-auto flex flex-col gap-2 mb-6">

        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Task title..."
          className="px-4 py-2 border rounded-lg"
        />

        <input
          type="text"
          value={des}
          onChange={(e) => setDes(e.target.value)}
          placeholder="Task description..."
          className="px-4 py-2 border rounded-lg"
        />

        <button
          onClick={handleAddTask}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Add Task
        </button>
      </div>

      {/* Task List */}
      <div className="max-w-xl mx-auto space-y-3">
        {tasks.length === 0 ? (
          <p className="text-center text-gray-500">
            No tasks yet 🚀
          </p>
        ) : (
          tasks.map((t) => (
            <div
              key={t.id}
              className="flex justify-between items-center bg-white p-4 rounded-lg shadow"
            >
              <div>
                <h1
                  className={`font-semibold ${
                    t.isCompleted ? "line-through text-gray-400" : ""
                  }`}
                >
                  {t.title}
                </h1>

                <p>{t.des}</p>

                <h3 className="text-sm text-gray-500">
                  {t.createDate}
                </h3>

                <span
                  className={
                    t.isCompleted
                      ? "text-green-600"
                      : "text-red-600"
                  }
                >
                  {t.isCompleted ? "Completed" : "Pending"}
                </span>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => handleToggle(t.id)}
                  className="text-green-500 hover:underline"
                >
                  {t.isCompleted ? "Undo" : "Done"}
                </button>

                <button
                  onClick={() => handleDelete(t.id)}
                  className="text-red-500 hover:underline"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;