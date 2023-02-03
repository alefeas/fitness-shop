// LOGIN Y REGISTRO NO FINALIZADO

import { auth } from "../../utils/firebaseConfig"
import { signOut } from "firebase/auth"
import { Loader } from "../../components/loader/Loader"
import { useState } from "react"

export const Account = () => {
    const [loading, setLoading] = useState(false)

    const logout = async () => {
        setLoading(true)
        await signOut(auth)
        setTimeout(() => {
            window.location.href = '/'
        }, 1500);
    }

    return (
        <>  
        {   
            loading === false ?
            <>
            <button onClick={logout}>CERRAR SESION</button>
            </>
            : <Loader/>
        }
        </>
    )
}