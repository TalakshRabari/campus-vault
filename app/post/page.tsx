import { prisma } from "@/lib/prisma";
import Link from "next/link";
export default  async function Page(){
       
    //   const response = await fetch("https://dummyjson.com/posts");
    //   const data = await response.json();
      const posts = await prisma.post.findMany();

     return(
         <div className="text-center pt-12">
             <h1 className="text-3xl capitalize font-bold mb-4">Posts</h1>
             <ul>
                     {
                        posts.map((post) => (
                             <li key={post.id}  className="mb-2">
                                   <Link href={`/posts/${post.id}`} >
                                       {post.title}
                                   </Link>
                             </li>
                        ))
                     }
             </ul>
         </div>
     )
}