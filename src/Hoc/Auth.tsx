import React from "react";
import { Redirect } from "react-router-dom";
import { auth } from "../firebase";


const AuthGuard = (Component:any) => {
    class AuthHoc extends React.Component {

        authCheck = () => {
            const user = auth.currentUser;

            if (user) {
                return <Component {...this.props}/>
            } else {
                return <Redirect to="/"/>
            }
        }

        render() {
            return this.authCheck();
        }

    }
    return AuthHoc

}

export default AuthGuard