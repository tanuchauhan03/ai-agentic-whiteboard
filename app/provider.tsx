"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useUser } from '@clerk/nextjs'
import { UserDetailContext } from './context/UserDetailContext';

function Provider({ children }: { children: React.ReactNode }) {
    const [useDetail,setUserDetail]=useState<any>();
    const { isLoaded, isSignedIn } = useUser();

    useEffect(() => {
        // only try to create/fetch the user once Clerk knows they're signed in
        if (isLoaded && isSignedIn) {
            CreateNewUser();
        }
    }, [isLoaded, isSignedIn]);

    const CreateNewUser = async () => {
        try {
            const result = await axios.post('/api/users');
            console.log(result.data);
            setUserDetail(result.data);
        } catch (err) {
            console.error("Failed to create/fetch user:", err);
        }
    };

    return (
        <UserDetailContext.Provider value={{useDetail,setUserDetail}}>
           <div>{children}</div>
        </UserDetailContext.Provider>
        
    )
}

export default Provider
