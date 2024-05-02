import   React, { createContext, useContext } from 'react';

const blogName = "Oksana.Kolisnyk Shop Blog";
const BlogContext = createContext(blogName);

export const useBlogContext = () => useContext(BlogContext);

export const BlogProvider = ({ children }) => {
  
  return (
    <BlogContext.Provider value={blogName}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
