

const SimpleFrom = () => {

    const handleSubmit = e => {
        e.preventDefault();
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log('from submitted');
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" name="name" />
                <br/>
                <input type="email" name="email" id='' />
                <br />
                <input type="submit"  value="Submit"/>
            </form>
        </div>
    );
};

export default SimpleFrom;