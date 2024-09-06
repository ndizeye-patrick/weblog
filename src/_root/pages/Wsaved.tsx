import { Link } from "react-router-dom";

const Wsaved = () =>{
    return( 
        <div className="xl:ml-[300px] xl:w-1/2  xl:mt-[200px] w-full md:mt-[200px] sm:mt-[50px] flex justify-center h-80 align-center">
        <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-xl flex flex-col align-center items-center justify-center shadow-inner">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Unlock More Features!</h3>
        <p className="text-lg text-gray-700 mb-6">
            Sign up now to access advanced blogging tools, analytics, and join our vibrant community of writers!
        </p>
        <Link to="/sign-up">
        <button  className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-purple-600 hover:to-indigo-500 text-white font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
             Sign Up for Free
        </button>
        </Link>
    </div>
</div>
    )
}
 
export default Wsaved;


