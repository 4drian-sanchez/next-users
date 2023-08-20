const getUser = async id => {
    try {
        const res = await fetch(`https://reqres.in/api/users/${id}`)
        const { data } = await res.json()
        return data
    } catch (error) {
        console.log(error)
    }
}

const User = async ({ params: { id } }) => {
    const { email, first_name, last_name, avatar } = await getUser(id)
    console.log(avatar)
    return (
        <div className="h-[calc(100vh-5rem)] flex items-center justify-center ">

            <div className="py-10 px-20 shadow bg-white flex flex-col items-center">
                <img
                    src={avatar}
                    alt={`${first_name} ${last_name}`}
                    className="rounded-full"
                />
                <h2 className="text-gray-600 font-bold text-center text-2xl mt-5">{first_name} {last_name}</h2>
                <address className="text-gray-500 text-center text-lg mt-2">{email}</address>

            </div>

        </div>
    )
}

export default User