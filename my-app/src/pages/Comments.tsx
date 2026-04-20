import React, { useState } from "react";
import { useGetCommentQuery } from "../redux/api/baseApi";

const Comments = () => {
  const { data, isLoading, error } = useGetCommentQuery("");
  const [search, setSearch] = useState("");

  // 🔍 Filter logic
  const filteredComments = data?.filter((comment: any) =>
    comment.name.toLowerCase().includes(search.toLowerCase()) ||
    comment.email.toLowerCase().includes(search.toLowerCase())
  );

  if (isLoading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">Error...</p>;

  return (
    <div className="max-w-6xl mx-auto p-4">
      
      {/* 🔍 Search Input */}
      <input
        type="text"
        placeholder="Search by name or email..."
        className="w-full p-2 mb-6 border rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* 📦 Card Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredComments?.map((comment: any) => (
          <div
            key={comment.id}
            className="p-4 border rounded-2xl shadow hover:shadow-lg transition duration-300 bg-white"
          >
            <h2 className="font-semibold text-lg mb-1">
              {comment.name}
            </h2>
            <p className="text-sm text-gray-500 mb-2">
              {comment.email}
            </p>
            <p className="text-gray-700 text-sm">
              {comment.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;