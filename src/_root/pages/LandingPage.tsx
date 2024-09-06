// import { Models } from "appwrite";
// import { Bottombar, LeftSidebar, Loader, Post , Topbar, UserCard } from "@/components/shared";
// import { useGetRecentPost, useGetUser } from "@/lib/react-query/queries";

// const LandingPage = () => {
//   // Fetch recent posts
//   const {
//     data: posts,
//     isLoading: isPostLoading,
//     isError: isErrorPosts,
//   } = useGetRecentPost();

//   // Fetch top users (creators)
//   const {
//     data: creators,
//     isLoading: isUserLoading,
//     isError: isErrorCreators,
//   } = useGetUser(10);

//   // Handle errors and loading states
//   if (isErrorPosts || isErrorCreators) {
//     return (
//       <div className="flex flex-1">
//         <div className="home-container">
//           <div className="home-posts">
//             <h2 className="h3-bold md:h2-bold text-left w-full text-black">Home Feed</h2>
//             {isPostLoading && !posts ? (
//               <Loader />
//             ) : (
//               <ul className="flex flex-col flex-1 gap-9 w-full">
//                 {posts?.documents.map((post: Models.Document) => (
//                   <li key={post.$id} className="flex justify-center w-full">
//                     <Post post={post} />
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </div>
//         </div>

//         <div className="home-creators">
//           <h3 className="h3-bold text-black">Top Creators</h3>
//           {isUserLoading && !creators ? (
//             <Loader />
//           ) : (
//             <ul className="grid 2xl:grid-cols-2 gap-6">
//               {creators?.documents.map((creator) => (
//                 <li key={creator?.$id}>
//                   <UserCard user={creator} />
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>
//       </div>
//     );
//   }

//   // Display content once data is loaded
//   return (

//     <div className="text-black">
//     <div className="home-container">
//       <h2 className="h3-bold md:h2-bold text-left w-full text-black">Home Feed</h2>
//       <ul className="flex flex-col flex-1 gap-9 w-full">
//         {posts?.documents.map((post: Models.Document) => (
//           <li key={post.$id} className="flex justify-center w-full">
//             <Post post={post} />
//           </li>
//         ))}
//       </ul>
//     </div>

//     <div className="home-creators">
//       <h3 className="h3-bold text-black">Top Creators</h3>
//       <ul className="grid 2xl:grid-cols-2 gap-6">
//         {creators?.documents.map((creator) => (
//           <li key={creator?.$id}>
//             <UserCard user={creator} />
//           </li>
//         ))}
//       </ul>
//     </div>
//   </div>
    
//   );
// };

// export default LandingPage;
import { Models } from "appwrite";

// import { useToast } from "@/components/ui/use-toast";
import { Loader, PostCard, UserCard } from "@/components/shared";
import { useGetRecentPosts, useGetUsers } from "@/lib/react-query/queries";
import Widget from "@/components/shared/Widget";
const currentYear = new Date().getFullYear();

const LandingPage = () => {
  // const { toast } = useToast();

  const {
    data: posts,
    isLoading: isPostLoading,
    isError: isErrorPosts,
  } = useGetRecentPosts();
  const {
    data: creators,
    isLoading: isUserLoading,
    isError: isErrorCreators,
  } = useGetUsers(10);

  if (isErrorPosts || isErrorCreators) {
    return (
      <div className="flex flex-1">
        <div className="home-container">
          <p className="body-medium text-light-1">Something bad happened</p>
        </div>
        <div className="home-creators">
          <p className="body-medium text-light-1">Something bad happened</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-1">
      <div className="home-container">
        <div className="home-posts flex justify-center ">
          <Widget />
          <div className="hidden lg:flex justify-center align-center bg-gray-100 rounded-lg shadow ">
  <h4 className="font-bold text-gray-800">
    &copy; {currentYear} ndizeye@azul
  </h4>
</div>

        </div>
      </div>

      <div className="home-creators w-full">
  <h3 className="h3-bold rounded text-lg w-full font-bold bg-gradient-to-r from-teal-400 via-purple-500 to-pink-500 text-white text-transparent text-center sticky top-0 z-10 bg-white py-2 ">
    Best Bloggers
  </h3>
  {isUserLoading && !creators ? (
    <Loader />
  ) : (
    <ul className="grid 2xl:grid-cols-2 gap-6">
      {creators?.documents.map((creator) => (
        <li key={creator?.$id}>
          <UserCard user={creator} />
        </li>
      ))}
    </ul>
  )}
</div>

    </div>
  );
};

export default LandingPage;
