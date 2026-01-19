import { prisma } from "@/lib/prisma";

export default async function Page({ params }){
       const id = (await params).id;
       const post = await prisma.post.findUnique(
        {
            where: {
                 id: Number(id),
            }
        }
       )

       return(
          <div className="text-center pt-12">
             <h1 className="text-3xl capitalize font-bold">{post.title}</h1>
             <p className="whitespace-pre-wrap mt-4">{post.content}</p>
          </div>
       )
}