const LoadData = async () => {
   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
   const blogs = await res.json();

   return blogs;
};

export default LoadData;
