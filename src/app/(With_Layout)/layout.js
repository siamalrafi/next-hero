const WithLayout = ({ children }) => {
   return (
      <div>
         <nav>nav bar</nav>
         {children}
         <footer>footer</footer>
      </div>
   );
};

export default WithLayout;
