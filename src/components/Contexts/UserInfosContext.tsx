import React, { useState, ReactNode, createContext, useContext } from 'react';

type UserProviderProp = {
  children: ReactNode
}

type ContextProps = {
  userInfos?: UserData;
  setUserInfos: React.Dispatch<React.SetStateAction<UserData | undefined>>
}

interface UserData {
  name: string,
  verifiedAs: string
}


const UserContext = createContext({} as ContextProps);

export default function UserProvider({ children }: UserProviderProp) {
  const [userInfos, setUserInfos] = useState<UserData>();
  
  return (
    <UserContext.Provider 
      value={{ 
        userInfos, 
        setUserInfos 
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUserInfos() {
  const context = useContext(UserContext);
  const { userInfos, setUserInfos } = context;

  return { userInfos, setUserInfos };
}