import { useReducer } from "react"
import userContext, { userReducer } from "./context/userContext"
import Navbar from "./Navbar";

export default function App(){
    const [user, dispatch] = useReducer(userReducer, '');

    return (
        <userContext.Provider value={{user, dispatch}}>
            <Navbar />
        </userContext.Provider>
    )
}