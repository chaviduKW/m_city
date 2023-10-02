import { Navigate,useNavigate } from "react-router-dom";
import {PropsWithChildren, useEffect} from "react";
import {User} from "@firebase/auth";
import { auth } from "../config/firebase-config";

type AuthGuardProps = PropsWithChildren & { user: User | null };

export function AuthGuard(props: AuthGuardProps) {
    const navigate = useNavigate();
    const user = auth.currentUser;

    useEffect(() => {
        if (!user) navigate('/sign_in')
    }, [navigate, user]);

    return user ? <>{props.children}</> : null;
}