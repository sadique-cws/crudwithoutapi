"use client"
import { useSession, signIn, signOut } from "next-auth/react";
const page = () => {
  const { data: session } = useSession();

  return (
    <div>
      {!session ? (
        <div>
          <p>you are not signed in</p>
          <button className="bg-orange-400 p-3" onClick={signIn}>
            Signin with Google
          </button>
        </div>
      ) : (
        <div>
          <p>Welcome, {session.user.name}</p>
          <button className="bg-orange-400 p-3" onClick={signOut}>
            logout
          </button>
        </div>
      )}
    </div>
  );
};

export default page;
