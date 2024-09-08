import { Link } from "react-router-dom"

const Widget = () => {
   return( 
    <div className="w-full p-5 bg-white rounded-lg shadow-xl">
    <div className="border-b pb-4 ">
    <h2 className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 align-center flex items-center justify-center text-[30px]">
  weBlog
</h2>

<p className="px-2  mt-5 py-5 text-lg font-bold bg-gradient-to-r from-teal-400 via-purple-500 to-pink-500 bg-clip-text text-transparent text-center">
  Share your sight. Discover stories. Join a global community of creators and thinkers. Your journey in digital storytelling starts here with weBlog!
</p>



    </div>
  
    <div className="flex items-center justify-between mb-4">
      
    </div>
    <div className="shadow-xl  w-full rounded-lg flex justify-evenly gap-3 items-center h-[200px]">
    <Link to="/welcome_explore">
    <button className="bg-gradient-to-r  animate-bounce font-bold from-blue-400 via-purple-500 to-pink-500 hover:bg-gradient-to-l hover:from-pink-400 hover:via-blue-400 hover:to-indigo-500 rounded-xl text-white px-5 py-4">
    Browse Blogs
  </button>
  </Link>
  <Link to="/sign-up">
  <button className="bg-gradient-to-r font-bold animate-bounce from-blue-400 via-purple-500 to-pink-500 hover:bg-gradient-to-l hover:from-pink-400 hover:via-blue-400 hover:to-indigo-500 rounded-xl text-white px-5 py-4">
    Get Started Now
  </button>
  </Link>
</div>

  
    {/* <ul className="space-y-3">
      <li className="flex items-center gap-3">
        <span className="h-2 w-2 bg-blue-500 rounded-full"></span>
        <div>
          <p className="text-sm">Your call has been confirmed.</p>
          <p className="text-xs text-gray-500">1 hour ago</p>
        </div>
      </li>
      <li className="flex items-center gap-3">
        <span className="h-2 w-2 bg-blue-500 rounded-full"></span>
        <div>
          <p className="text-sm">You have a new message!</p>
          <p className="text-xs text-gray-500">1 hour ago</p>
        </div>
      </li>
      <li className="flex items-center gap-3">
        <span className="h-2 w-2 bg-blue-500 rounded-full"></span>
        <div>
          <p className="text-sm">Your subscription is expiring soon!</p>
          <p className="text-xs text-gray-500">2 hours ago</p>
        </div>
      </li>
    </ul> */}
          {/* Featured Blogs Section */}
          <div className="mt-10">
        <h3 className="font-semibold text-xl mb-4 text-gray-700">Featured Blogs</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Featured Blog 1 */}
          <Link to='/welcome_explore'>
          <div className="p-4 bg-gray-100 rounded-lg shadow hover:shadow-black hover:shadow-xl">
            <h4 className="font-bold text-gray-800">How to Start Your Blog</h4>
            <p className="text-gray-600 mt-2 text-sm">Explore tips and strategies to start your first blog and grow your audience.</p>
          </div>
          </Link>
          <Link to='/welcome_explore'>
          {/* Featured Blog 2 */}
          <div className="p-4 bg-gray-100 rounded-lg shadow hover:shadow-black hover:shadow-xl">
            <h4 className="font-bold text-gray-800">Top 10 Blogging Tools</h4>
            <p className="text-gray-600 mt-2 text-sm">Discover the best tools for managing and optimizing your blogging experience.</p>
          </div>
          </Link>
        </div>
      </div>


  
  </div>
  
  
   )
}
export default Widget