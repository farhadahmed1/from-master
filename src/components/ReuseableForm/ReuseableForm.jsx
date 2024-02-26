

const ReuseableForm = ({formTitle,fromBtn="Submit", handleSubmit, children}) => {

    const handleLocalSubmit = e => {
        e.preventDefault();
        const data = {
            name : e. target.name.value,
            email : e. target.email.value,
            password : e. target.password.value,

        }
        handleSubmit(data)
    }

    return (
        <div>
             {/* <h1> {formTitle} </h1> */}
              {children}
             <form action=""  onSubmit={handleLocalSubmit}>
                <input type="text" name="name" placeholder="Name"/>
                <br/>
                <input type="email" name="email"  placeholder="Email"/>
                <br />
                <input type="password" name="password"  placeholder="Password" />
                <br />
                <input type="submit"  value={fromBtn}/>
            </form>
        </div>
    );
};

export default ReuseableForm;