import Link from "next/link";
import { RocketIcon, HomeIcon, BookmarkIcon } from '@radix-ui/react-icons'


export default function NavBar() {
    return (
        <aside className="w-2/12 h-screen p-4 border-r border-gray-300">
            <div>
                <h1 className="text-3xl font-bold">PortFolio 🚀 </h1>
            </div>
            <span className="block mt-2 border-b border-gray-300"></span>
            <div className="mt-4">
                <ul>
                    <Link href={'/admin/home'} className="flex gap-2 items-center px-2 py-2 font-bold text-gray-600 rounded hover:bg-gray-100 hover:text-gray-800"> <HomeIcon /> Home</Link>
                </ul>
                <ul>
                    <Link href={'/admin/blog'} className="flex gap-2 items-center px-2 py-2 font-bold text-gray-600 rounded hover:bg-gray-100 hover:text-gray-800"> <BookmarkIcon /> Blog</Link>
                </ul>
                <ul>
                    <Link href={'/admin/projects'} className="flex gap-2 items-center px-2 py-2 font-bold text-gray-600 rounded hover:bg-gray-100 hover:text-gray-800"><RocketIcon />Projects</Link>
                </ul>
            </div>
        </aside>
    );
}