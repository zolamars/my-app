import { useState } from "react"
import supabase from "../supabase";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

const loginUser = async ({userCredentials}) => {
    const {user , error} = await supabase.auth.signInWithPassword(userCredentials);
    if(error){
        throw new Error(error.message)
    }
    return user
}

const Login = () =>{
    const [email, setEmail] = useState('');
    const [password, setPassword]= useState('');

    const navigate = useNavigate()

    const {mutate} = useMutation(loginUser)

    const handleLogin = async () => {
        try{
            mutate({email, password});
            navigate('/todos')
        } catch (error){
            console.log('Login error:', error.message);
        }
    }
    return (
        <div>
            <h2>Login</h2>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
            />
            <br/>
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
            />
            <br/>
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}
export default Login