"use client"

import { useRouter } from "next/navigation";

export const User = ({ user: { id, email, first_name, last_name, avatar } }) => {

    const router = useRouter()

    return (
        <div className=" w-10/12 mx-auto md:w-full p-5 flex items-center flex-col-reverse md:flex-row md:justify-between gap-3 shadow-md bg-white">
            <div className="text-center md:text-start">
                <h2 className="text-gray-700 font-bold text-xl">{first_name} {last_name}</h2>
                <address className="text-gray-700 teext-lg">{email}</address>
                <button
                    type="button"
                    className="bg-green-400 hover:bg-green-500 transition-colors px-3 py-1 uppercase font-bold text-xs text-white mt-2 rounded-md cursor-pointer"
                    onClick={() => router.push(`/users/${id}`)}
                >Ver usuario</button>
            </div>

            <img
                src={avatar}
                alt={`${first_name} ${last_name}`}
                className={"block w-20 rounded-lg"}
            />
        </div>
    )
}
