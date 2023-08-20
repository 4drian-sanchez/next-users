import Link from "next/link"

export const Navbar = () => {
    return (
        <nav className="flex justify-between pt-5 px-10">
            <Link href={'/'} className="text-gray-700 font-bold uppercase ">Users</Link>
        </nav>

    )
}
