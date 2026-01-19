import Link from "next/link";

export default function Header(){
     return(
         <div className="border-black/10 border-b h-10 flex items-center justify-between px-5">
              <div>Logo</div>
              <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/post">Posts</Link>
                </li>
              </ul>
         </div>
     );
}