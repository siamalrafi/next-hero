import Link from "next/link";

const NotFound = () => {
   return (
      <div className="text-center text-red-500">
         <h1 className="text-3xl">404</h1>
         <h3 className="text-xl">Not found</h3>
         <button>
            <Link href={"/"}>Go To HOME</Link>
         </button>
      </div>
   );
};

export default NotFound;
