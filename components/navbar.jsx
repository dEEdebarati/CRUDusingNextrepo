import Link from "next/link";
export default function Navbar(){

    return(
        <nav className="flex justify-between items-center bg-slate-800 px-8 py-3">
            <Link className= "font-bold text-white"href = {'/'}>Crud</Link>
            <Link className="bg-white p-2 rounded" href = {'/addTopic'}>Add Topic</Link>
        </nav>
    )
}