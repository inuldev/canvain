"use client";

import { useMutation } from "convex/react";
import { useUser } from "@stackframe/stack";
import { useEffect, useState } from "react";

import { api } from "@/convex/_generated/api";
import { UserDetailContext } from "@/context/UserDetailContext";

function Provider({ children }) {
  const user = useUser();
  const [userDetail, setUserDetail] = useState(null);
  const createNewUserMutation = useMutation(api.users.CreateNewUser);

  useEffect(() => {
    user && CreateUser();
  }, [user]);

  const CreateUser = async () => {
    const data = {
      name: user?.displayName,
      email: user?.primaryEmail,
      picture: user?.profileImageUrl,
    };
    const result = await createNewUserMutation({
      ...data,
    });

    setUserDetail(result);
  };

  return (
    <div>
      <UserDetailContext.Provider value={{ userDetail, setUserDetail }}>
        {children}
      </UserDetailContext.Provider>
    </div>
  );
}

export default Provider;
