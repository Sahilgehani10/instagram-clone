import { signIn,auth,signOut } from "@/auth";

export default async function Home() {
  const session=await auth();
  return (
    <div className="">test
    {session &&(
      <form action={async () =>{
        'use server';
        await signOut();
      }}>
        <button className="border px-4 py-2 bg-ig-red text-white rounded-lg">Logout</button>
      </form>
    )}
    {!session &&(
      <form action={async () =>{
        'use server';
        await signIn('google');
      }}>
        <button className="border px-4 py-2 bg-ig-red text-white rounded-lg">Login With Google</button>
      </form>
    )}
    
    </div>
  );
}
