import { useState } from "react"

export const Register = ()=>{
    const [data,setData] = useState({
        email:"",
        password:""

       
    })
    const {email,password} = data;
    const handleChange = e =>{
        setData({...data,[e.target.name]:e.target.value})
    }
const signUp = (e)=>{
    e.preventDefault()
}
const signIn = (e)=>{
    e.preventDefault()
}
    return(
        <div>
            <h2>Register page</h2>

            <center>
                <form autoComplete="off">
                    <input type="email" name="email" onChange={handleChange} value={email} placeholder="enter email"/> <br /> <br />
                    <input type ="password" name="password" onChange={handleChange} value={password} id="" placeholder="enter password"/> <br /> <br />
                    <button onClick={signUp}>Sign in</button> &nbsp; &nbsp;
                     <button onClick={signIn}> Sign up </button>
                </form>
            </center>
        </div>
    )
}