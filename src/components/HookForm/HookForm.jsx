import useInputState from "../../hooks/useInputState";

const HookForm = () => {

   // const [name , hanndleNameChange]= useInputState('')
    const nameState= useInputState('')

    const emailState= useInputState('')

    const handleSubmit = (e) => {
        e.preventDefault ();
        console.log(`email : ${emailState.value}`, `name : ${nameState.value}`);
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                {/* <input value={name} onChange={hanndleNameChange} type="text" name="name" />
                <br/> */}
                <input {...nameState} type="text" name="name" />
                <br/>
                <input {...emailState} type="email" name="email"  />
                <br />
                <input type="submit"  value="Submit"/>
            </form>
        </div>
    );
};

export default HookForm;