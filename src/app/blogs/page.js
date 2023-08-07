// "use client";

import Link from "next/link";
import LoadData from "../utils/LoadData";
// import { useRouter } from "next/navigation";

export const metadata = {
   title: "Blogs | Next Hero",
   description: "Next Hero",
};

const blogs = await LoadData();

const BlogsPage = () => {
   return (
      <div className="container mx-auto p-2">
         {blogs.map(({ id, year, title }) => (
            <div
               className="block border border-blue-500 p-2 my-2"
               href={{
                  pathname: `/blogs/${year}/${id}`,
                  query: {
                     title: title,
                  },
               }}
               // onClick={() => router.push(`/blogs/${year}/${id}?title=${title}`)}

               key={id}
            >
               <p>{id}</p>
               <h3>title</h3>
               <Link href={`blogs/${id}`}>Details</Link>
            </div>
         ))}
      </div>
   );
};

export default BlogsPage;
