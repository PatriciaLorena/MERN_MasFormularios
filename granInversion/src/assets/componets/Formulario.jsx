const Formulario = (props) => {

    const {inputs, setInputs} = props;

    const onChange = (e) => {
        setInputs({ 
            ...inputs, [e.target.name]: e.target.value 
        });
    };

    const divStyle = {
        width: "500px"
    };

    return (
        <form>
            <div className="container d-flex flex-column flex-md-row justify-content-center mt-3 bg-body-tertiary p-3 border" style={divStyle}>
                <label htmlFor="exampleInputName" className="form-label d-flex ">First Name</label>
                <input type="text" className="form-control" id="exampleInputName" name="nombre" onChange={onChange} />
            </div>
            <div className="container d-flex justify-content-center mt-3 bg-body-tertiary p-3 border" style={divStyle}>
                <label htmlFor="exampleInputLastName" className="form-label">Last Name</label>
                <input type="text" className="form-control" id="exampleInputLastName" name="lastName"  onChange={onChange} />
            </div>
            <div className="container d-flex justify-content-center mt-3 bg-body-tertiary p-3 border" style={divStyle}>
                <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                <input type="email" className="form-control" id="exampleInputEmail1" name="email" onChange={onChange} />
            </div>
            <div className="container d-flex justify-content-center mt-3 bg-body-tertiary p-3 border" style={divStyle}>
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" name="clave"  onChange={onChange} />
            </div>
            <div className="container d-flex justify-content-center mt-3 bg-body-tertiary p-3 border" style={divStyle}>
                <label htmlFor="exampleInputConfirmPassword" className="form-label">Confirm Password</label>
                <input type="password" className="form-control" id="exampleInputConfirmPassword" name="confirmPassword" onChange={onChange} />
            </div>
        </form>
    );
};

export default Formulario;
