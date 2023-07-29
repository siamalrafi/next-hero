import Navbar from "@/Components/Navbar";

const WithLayout = ({ children }) => {
   return (
      <div>
         <Navbar />
         {children}
         <footer>footer</footer>
      </div>
   );
};

export default WithLayout;
