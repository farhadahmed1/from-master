import { useEffect, useRef } from "react";


const Refform = () => {
   const nameRef = useRef(null);
   const emailRef  = useRef(null);
   const passwordRef = useRef(null);

   useEffect(()=> {
    nameRef.current.focus();
}, [])

   const handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.name.value);
    console.log(e.target.email.value);
    console.log('from submitted');
}


    return (
        <div>
             <form action="" onSubmit={handleSubmit}>
                <input ref={nameRef} type="text" name="name"  placeholder="Name"/>
                <br/>
                <input ref={emailRef} type="email" name="email"  placeholder="Eamail"/>
                <br />
                <input ref={passwordRef} type="password" name="password" placeholder="Password" />
                <br />
                <input  type="submit"  value="Submit"/>
            </form>
        </div>
    );
};

export default Refform;