


import { useState } from "react";
import { useAppDispatch, useApppSelector } from "../redux/fetures/middlewere/hooks";
import {
  addUser,
  deleteUser,
  toggleActive,
  updateRole,
  selectUsers,
} from "../redux/fetures/users/user.slice";

const Users = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<"admin" | "user">("user");

  const users = useApppSelector(selectUsers);
  const dispatch = useAppDispatch();

  const handleAddUser = () => {
    if (!name || !email) return;

    const newUser = {
      id: Date.now().toString(),
      name,
      email,
      role,
      isActive: true,
      createDate: new Date().toISOString().split("T")[0],
    };

    dispatch(addUser(newUser));
    setName("");
    setEmail("");
    setRole("user");
  };

  const handleToggle = (id: string) => {
    dispatch(toggleActive(id));
  };

  const handleDelete = (id: string) => {
    dispatch(deleteUser(id));
  };

  const handleRoleChange = (id: string, newRole: "admin" | "user") => {
    dispatch(updateRole({ id, role: newRole }));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        👤 User Manager
      </h1>

      {/* Input Box */}
      <div className="max-w-xl mx-auto flex flex-col gap-2 mb-6">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="User name..."
          className="px-4 py-2 border rounded-lg"
        />

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="User email..."
          className="px-4 py-2 border rounded-lg"
        />

        <select
          value={role}
          onChange={(e) => setRole(e.target.value as "admin" | "user")}
          className="px-4 py-2 border rounded-lg bg-white"
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>

        <button
          onClick={handleAddUser}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Add User
        </button>
      </div>

      {/* User List */}
      <div className="max-w-xl mx-auto space-y-3">
        {users.length === 0 ? (
          <p className="text-center text-gray-500">No users yet 🚀</p>
        ) : (
          users.map((u) => (
            <div
              key={u.id}
              className="flex justify-between items-center bg-white p-4 rounded-lg shadow"
            >
              <div>
                <h1
                  className={`font-semibold ${
                    !u.isActive ? "line-through text-gray-400" : ""
                  }`}
                >
                  {u.name}
                </h1>

                <p className="text-sm text-gray-500">{u.email}</p>

                <p className="text-sm text-gray-500">{u.createDate}</p>

                <span
                  className={u.isActive ? "text-green-600" : "text-red-600"}
                >
                  {u.isActive ? "Active" : "Inactive"}
                </span>

                {/* Role changer */}
                <select
                  value={u.role}
                  onChange={(e) =>
                    handleRoleChange(u.id, e.target.value as "admin" | "user")
                  }
                  className="ml-3 text-sm border rounded px-1 py-0.5"
                >
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                </select>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => handleToggle(u.id)}
                  className="text-green-500 hover:underline"
                >
                  {u.isActive ? "Deactivate" : "Activate"}
                </button>

                <button
                  onClick={() => handleDelete(u.id)}
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

export default Users;