import Link from "next/link"

export default function Navbar(){
       return(
         <nav>
             <Link href="/">Campus Vault</Link>
             <Link href="/auth">Login</Link>
         </nav>
       )
}