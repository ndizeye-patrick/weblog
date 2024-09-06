import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Button } from "../ui/button";
import { useUserContext } from "@/context/AuthContext";
import { useSignOutAccount } from "@/lib/react-query/queries";

const TopbarClient = () => {
  const navigate = useNavigate();
  const { user } = useUserContext();
  const { mutate: signOut, isSuccess } = useSignOutAccount();

  useEffect(() => {
    if (isSuccess) navigate(0);
  }, [isSuccess]);

  return (
    <section className="topbar">
      <div className="flex-between py-1 px-5">
        <Link to="/hello" className="flex gap-3 items-center">
          <img
            src="/assets/images/logo.png"
            alt="logo"
            className="w-[100px]"
          />
        </Link>

        <div className="flex gap-4">
          {/* <Button
            variant="ghost"
            className="bg-black text-sm"
            onClick={() => signOut()}>
            Getstarted
          </Button> */}
     
          <Link to={`/sign-in`} className="flex-center gap-3">
          <button className="bg-blue-500  hover:bg-blue-700 text-white font-bold  w-[100px] text-[12px] px-1 py-1 mt-2 rounded">
            Get started
        </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TopbarClient;
