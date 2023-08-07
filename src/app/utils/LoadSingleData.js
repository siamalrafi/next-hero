const LoadSingleData = async ({ id }) => {
   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
   const blog = await res.json();

   return blog;
};

export default LoadSingleData;
