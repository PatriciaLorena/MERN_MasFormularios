const Result = (props) => {
    const { nombre, lastName, email, clave, confirmPassword } = props.data;
    const divStyle = {
        width: "500px"
    };
    return (
        <div className="container justify-content-center mt-3 p-3 " style={divStyle}>
            <h3>Your form data</h3>
            <p>First Name: {nombre}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {clave}</p>
            <p>Confirm Password: {confirmPassword}</p>
        </div>
    );
};

export default Result;
