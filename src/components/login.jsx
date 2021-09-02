import {auth, signInWithGoogle} from "../firebase";
import {useEffect} from "react";

let Login = () => {

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            console.log(user);
        })
    }, []);

    return(
        <>
            <button onClick={() =>{
                signInWithGoogle();
            }} className="btn btn-primary m-4" >Login With Google</button>

            <button onClick={() =>{
                auth.signOut();
            }} >LOGOUT</button>
        </>
    );
}

export default Login;