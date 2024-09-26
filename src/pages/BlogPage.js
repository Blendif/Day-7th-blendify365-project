import React, { useState, useEffect } from 'react';
import BlogCard from '../components/BlogCard';

function BlogPage() {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    // Fetch blog articles (mocked)
    setBlogs([
      { id: 1, title: "Blog 1", content: "This is blog 1" },
      { id: 2, title: "Blog 2", content: "This is blog 2" }
    ]);
  }, []);

  const handlePagination = (page) => {
    setCurrentPage(page);
    // Fetch blogs for the new page (backend API call)
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-6">Blog Articles</h1>
      <div className="grid grid-cols-1 gap-4">
        {blogs.map(blog => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
      <div className="mt-6">
        <button onClick={() => handlePagination(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
        <button onClick={() => handlePagination(currentPage + 1)}>Next</button>
      </div>
    </div>
  );
}

export default BlogPage;
    
