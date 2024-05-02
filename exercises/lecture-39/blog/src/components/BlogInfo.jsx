import React from 'react';
import { useBlogContext } from './BlogContext';

const BlogInfo = () => {
  const blogName = useBlogContext();

  return (
    <div className="my-6">
      <p className="text-purple bg-lightGreen">Welcome to {blogName}!</p>
      <p className="text-gray-600 my-6">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae blanditiis aspernatur quod repellat veniam consequuntur maiores voluptates itaque ex atque iste nesciunt, animi quam explicabo repudiandae consectetur provident, enim voluptate!</p>
    </div>
  );
};

export default BlogInfo;
