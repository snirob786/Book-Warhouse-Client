import { getAuth } from 'firebase/auth';
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import app from "../../../firebase.init"
import { Navigate, useLocation } from 'react-router-dom';

const auth = getAuth()

export default function RequireAuth({ children }) {
    const [user] = useAuthState(auth);
    const localtion = useLocation(

    )

    if (!user) {
        return <Navigate to="login" state={{ from: localtion }} replace />
    }
    return children
}
