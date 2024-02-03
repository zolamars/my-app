import { useMutation } from "react-query";
import supabase from "../supabase"
import { useNavigate } from "react-router-dom";

const logoutUser = async () =>{
    const {error} = await supabase.auth.signOut();
    if(error){
        throw new Error(error.message)
    }
}

const Logout = () => {
    const navigate = useNavigate()
    const {mutate} = useMutation(logoutUser)
    const handleLogout = async () =>{
        try {
            mutate()
            navigate('/login')
        } catch (error) {
            console.log('Logout error:', error.message)
        }
    }
    return (
        <div>
            {/* <h2>Logout</h2> */}
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Logout