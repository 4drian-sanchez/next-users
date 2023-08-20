import { User } from "@/components/User";

const getUsers = async () => {
  const res = await fetch("https://reqres.in/api/users");
  const { data } = await res.json();
  return data;
};

const HomePage = async () => {
  const users = await getUsers();
  return (
    <main className="container mx-auto space-y-6 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 gap-3 py-10">
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </main>
  );
};

export default HomePage;
