import { Link, NavLink, useLocation
  // , useNavigate
 } from "react-router-dom";

import { INavLink } from "@/types";
import {  sidebarLinksC } from "@/constants";
// // import { Loader } from "@/components/shared";
// import { useSignOutAccount } from "@/lib/react-query/queries";
// import { useUserContext, INITIAL_USER } from "@/context/AuthContext";

const LeftSidebarC = () => {
  // const navigate = useNavigate();
  const { pathname } = useLocation();
  // const { 
  //     // user,
  //     setUser,
  //     setIsAuthenticated,
  //     // isLoading 
  //     } = useUserContext();

  // const { mutate: signOut } = useSignOutAccount();

  // const handleSignOut = async (
  //   e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  // ) => {
  //   e.preventDefault();
  //   signOut();
  //   setIsAuthenticated(false);
  //   setUser(INITIAL_USER);
  //   navigate("/sign-in");
  // };

  return (
    <nav className="leftsidebar shadow-xl">
      <div className="flex flex-col gap-5">
        <Link to="/hello" className="mt-[-60px] mb-5 gap-4 items-center">
          <img
            src="/assets/images/logo.png"
            alt="logo"
            width={190}
            height={36}
          />
        </Link>

        

        <ul className="flex flex-col gap-6">
          {sidebarLinksC.map((link: INavLink) => {
            const isActive = pathname === link.route;

            return (
              <li
                key={link.label}
                className={`leftsidebar-link shadow-xl group ${
                  isActive && "bg-primary-500"
                }`}>
                <NavLink
                  to={link.route}
                  className="flex gap-4 items-center text-black hover:text-white p-4">
                  <img
                    src={link.imgURL}
                    alt={link.label}
                    className={`group-hover:invert-white ${
                      isActive && "invert-white"
                    }`}
                  />
                  {link.label}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>

      {/* <Button
        variant="ghost"
        className="shad-button_ghost"
        onClick={(e) => handleSignOut(e)}>
        <img src="/assets/icons/logout.svg" alt="logout" />
        <p className="small-medium text-black lg:base-medium">Logout</p>
      </Button> */}
    </nav>
  );
};

export default LeftSidebarC;
