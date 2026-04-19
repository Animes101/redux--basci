import { useState, useRef } from "react";
import { useAppDispatch, useApppSelector } from "../redux/fetures/middlewere/hooks";
import {
  addTask,
  deleteTask,
  isComplated,
  selectTask,
  assignTask,
  reorderTasks,
} from "../redux/fetures/task/task.slice";
import { selectUsers } from "../redux/fetures/users/user.slice";

const Home = () => {
  const [title, setTitle] = useState("");
  const [des, setDes] = useState("");
  const [assignedTo, setAssignedTo] = useState("");
  const [priority, setPriority] = useState<"low" | "medium" | "high">("medium");

  const tasks = useApppSelector(selectTask);
  const users = useApppSelector(selectUsers);
  const dispatch = useAppDispatch();

  // drag refs
  const dragIndex = useRef<number | null>(null);
  const dragOverIndex = useRef<number | null>(null);

  const handleAddTask = () => {
    if (!title) return;
    dispatch(
      addTask({
        id: Date.now().toString(),
        title,
        des,
        isCompleted: false,
        createDate: new Date().toISOString().split("T")[0],
        assignedTo,
        priority,
      })
    );
    setTitle("");
    setDes("");
    setAssignedTo("");
    setPriority("medium");
  };

  // drag handlers
  const handleDragStart = (index: number) => {
    dragIndex.current = index;
  };

  const handleDragEnter = (index: number) => {
    dragOverIndex.current = index;
  };

  const handleDragEnd = () => {
    if (dragIndex.current === null || dragOverIndex.current === null) return;
    if (dragIndex.current === dragOverIndex.current) return;

    const reordered = [...tasks];
    const dragged = reordered.splice(dragIndex.current, 1)[0];
    reordered.splice(dragOverIndex.current, 0, dragged);
    dispatch(reorderTasks(reordered));

    dragIndex.current = null;
    dragOverIndex.current = null;
  };

  const priorityColor = {
    low: "text-blue-500",
    medium: "text-yellow-500",
    high: "text-red-500",
  };

  const getUserName = (userId: string) => {
    const user = users.find((u) => u.id === userId);
    return user ? user.name : "Unassigned";
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">📝 Task Manager</h1>

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

        {/* Assign to user */}
        <select
          value={assignedTo}
          onChange={(e) => setAssignedTo(e.target.value)}
          className="px-4 py-2 border rounded-lg bg-white"
        >
          <option value="">-- Assign to user --</option>
          {users.map((u) => (
            <option key={u.id} value={u.id}>
              {u.name} ({u.role})
            </option>
          ))}
        </select>

        {/* Priority */}
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value as "low" | "medium" | "high")}
          className="px-4 py-2 border rounded-lg bg-white"
        >
          <option value="low">🔵 Low Priority</option>
          <option value="medium">🟡 Medium Priority</option>
          <option value="high">🔴 High Priority</option>
        </select>

        <button
          onClick={handleAddTask}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Add Task
        </button>
      </div>

      {/* Task List — drag & drop */}
      <div className="max-w-xl mx-auto space-y-3">
        {tasks.length === 0 ? (
          <p className="text-center text-gray-500">No tasks yet 🚀</p>
        ) : (
          tasks.map((t, index) => (
            <div
              key={t.id}
              draggable
              onDragStart={() => handleDragStart(index)}
              onDragEnter={() => handleDragEnter(index)}
              onDragEnd={handleDragEnd}
              onDragOver={(e) => e.preventDefault()}
              className="flex justify-between items-center bg-white p-4 rounded-lg shadow cursor-grab active:cursor-grabbing border-l-4"
              style={{
                borderLeftColor:
                  t.priority === "high"
                    ? "#ef4444"
                    : t.priority === "medium"
                    ? "#eab308"
                    : "#3b82f6",
              }}
            >
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-gray-400 text-sm">⠿</span>
                  <h1
                    className={`font-semibold ${
                      t.isCompleted ? "line-through text-gray-400" : ""
                    }`}
                  >
                    {t.title}
                  </h1>
                  <span className={`text-xs font-medium ${priorityColor[t.priority]}`}>
                    {t.priority}
                  </span>
                </div>

                <p className="text-sm text-gray-600 mt-1">{t.des}</p>

                <div className="flex items-center gap-3 mt-1">
                  <span className="text-xs text-gray-400">{t.createDate}</span>

                  {/* Inline user reassign */}
                  <select
                    value={t.assignedTo}
                    onChange={(e) =>
                      dispatch(
                        assignTask({ taskId: t.id, userId: e.target.value })
                      )
                    }
                    className="text-xs border rounded px-1 py-0.5 bg-gray-50"
                  >
                    <option value="">Unassigned</option>
                    {users?.map((u) => (
                      <option key={u.id} value={u.id}>
                        {u.name}
                      </option>
                    ))}
                  </select>

                  <span className="text-xs text-purple-600 font-medium">
                    👤 {getUserName(t.assignedTo)}
                  </span>
                </div>

                <span
                  className={
                    t.isCompleted ? "text-green-600 text-sm" : "text-red-500 text-sm"
                  }
                >
                  {t.isCompleted ? "✅ Completed" : "⏳ Pending"}
                </span>
              </div>

              <div className="flex flex-col gap-2 ml-4">
                <button
                  onClick={() => dispatch(isComplated(t.id))}
                  className="text-green-500 hover:underline text-sm"
                >
                  {t.isCompleted ? "Undo" : "Done"}
                </button>
                <button
                  onClick={() => dispatch(deleteTask(t.id))}
                  className="text-red-500 hover:underline text-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {tasks.length > 1 && (
        <p className="text-center text-gray-400 text-sm mt-4">
          ☝️ টেনে ধরে উপরে-নিচে সরান
        </p>
      )}
    </div>
  );
};

export default Home;