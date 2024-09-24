import React from 'react';

function BlogCard({ blog }) {
  return (
    <div className="border p-4 rounded shadow-md">
      <h2 className="text-2xl font-bold">{blog.title}</h2>
      <p className="mt-2">{blog.content}</p>
    </div>
  );
}

export default BlogCard;
