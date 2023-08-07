import LoadSingleData from "@/app/utils/LoadSingleData";

const SingleBlog = async ({ params }) => {
   const { title, id } = await LoadSingleData(params.id);
   console.log(title, id);

   return (
      <div>
         blog :{title}
         <p>{id}</p>
      </div>
   );
};

export default SingleBlog;
