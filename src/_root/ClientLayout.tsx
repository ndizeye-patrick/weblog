import { Outlet } from "react-router-dom";
import TopbarClient from "@/components/shared/TopbarClient";
import LeftSidebarC from "@/components/shared/LeftSidebarC";
import BottombarC from "@/components/shared/BottombarC";

const ClientLayout = () => {
  return (
    <div className="w-full h-screen relative md:flex overflow-hidden">
      {/* Cloud background */}
      {/* <div className="absolute inset-0 z-0 bg-gradient-to-b from-blue-200 via-blue-100 to-white flex items-center justify-center"> */}
        {/* Emoji background
        <div className="absolute z-[-1] top-10 left-10 text-6xl animate-bounce">💻</div>
        
        
        */}
      {/* </div> */}

      {/* Main content */}
      <TopbarClient  />
      
      <LeftSidebarC />

      <section className="relative  flex flex-1 h-full bg-black bg-grey-100 bg-opacity-0 bg-cover bg-center h-screen">
  {/* Emoji decorations */}
  {/* <div className="absolute top-10 left-10 text-6xl animate-bounce xl:block hidden">💻</div>
  <div className="absolute bottom-10 left-5 text-7xl animate-bounce xl:block hidden">📱</div>
  <div className="absolute top-10 right-[300px] text-8xl animate-bounce xl:block hidden">📧</div>
  <div className="absolute bottom-10 right-[300px] text-8xl animate-bounce xl:block hidden">🍀</div> */}

  {/* Main content */}
  <Outlet />
</section>

      <BottombarC  />
    </div>
  );
};

export default ClientLayout;

