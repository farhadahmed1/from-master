// custom Hook 

import { useState } from "react";

const useInputState = (defaultValue="")=> {
    const  [value , setvalue]= useState(defaultValue);


    // const handelChange = (e) => {
    //     setvalue(e.target.value)

    // }
    //return[value , handelChange]
    const onChange = (e) => {
        setvalue(e.target.value)

    }
    return{
        value , 
        onChange,
    }

}
export default useInputState;