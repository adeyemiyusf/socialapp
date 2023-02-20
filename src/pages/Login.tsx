import {auth, provider} from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const navigate = useNavigate();
    const signInWithGoogle = async () => {
        const result = await signInWithPopup (auth, provider)
        navigate('/')
    }
    return (  
        <div>
        <h1>Log In With Google</h1>
        <button onClick={signInWithGoogle}>Log In With Google</button>
        </div>
    );
}
 
export default Login;