import { useState } from "react";


const StatefulForm = () => {

    const [email , setEmail] = useState('');
    const [password , setPassword] = useState(null);
    const [name , setName] = useState('');
    const [error , setError] = useState("")

    const handleSubmit = e =>{
        e.preventDefault();

        if(password.length<6){
           setError("Password must be 6 characters or longer")
        }
        else{
            setError("")
            console.log(name,email , password);
          
        }
       
    }

   const handleEmailChange = e =>{
    //console.log(e.target.value);
    setEmail(e.target.value)
   }
//    const handlePasswordChange = e =>{
//     //console.log(e.target.value);
//     setPassword(e.target.value)
//    }
   const handleNameChange = e =>{
   // console.log(e.target.value);
    setName(e.target.value)
   }

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input onChange={handleNameChange} type="text" name="name"  placeholder="Name" required/>
                <br/>
                <input onChange={handleEmailChange} type="email" name="email"required  placeholder=" Email" />
                <br />
                <input onChange={(e)=> setPassword(e.target.value)} type="password" name="password"placeholder="Password" required />
                <br />
                <input type="submit"  value="Submit"/>
                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default StatefulForm;