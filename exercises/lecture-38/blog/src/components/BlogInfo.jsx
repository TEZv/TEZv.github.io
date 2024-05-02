import React from 'react';
import { useBlogContext } from './BlogContext';

const BlogInfo = () => {
  const blogName = useBlogContext();

  return (
    <div className="my-6">
      <p className="text-purple bg-lightGreen">Welcome to {blogName}!</p>
    </div>
  );
};

export default BlogInfo;
