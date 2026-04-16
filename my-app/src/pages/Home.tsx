import React, { useState } from "react";



const Home = () => {
  const [task, setTask] = useState("");

  const handleAddTask = () => {

    console.log(task)


    // dispatch(addTask(task));
    setTask("");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      {/* Header */}
      <h1 className="text-3xl font-bold text-center mb-6">
        📝 Task Manager
      </h1>

      {/* Input Box */}
      <div className="max-w-xl mx-auto flex gap-2 mb-6">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter your task..."
          className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          onClick={handleAddTask}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Add
        </button>
      </div>

      {/* Task List */}
      {/* <div className="max-w-xl mx-auto space-y-3">

        {tasks.length === 0 ? (
          <p className="text-center text-gray-500">
            No tasks yet 🚀 Add your first task
          </p>
        ) : (
          tasks.map((t, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-white p-4 rounded-lg shadow"
            >
              <span>{t}</span>

              <div className="flex gap-2">
                <button className="text-green-500 hover:underline">
                  Done
                </button>
                <button className="text-red-500 hover:underline">
                  Delete
                </button>
              </div>
            </div>
          ))
        )}

      </div> */}
    </div>
  );
};

export default Home;