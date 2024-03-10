const Formulario = props => {
    return (
      <Formulario>
          <label htmlFor="firstName">First Name</label>
          <input type="text" name="firstName" id="" />
  
          <label htmlFor="lastName">Last Name</label>
          <input type="text" name="lastName" id="" />
  
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="" />
  
          <label htmlFor="password">Password</label>
          <input type="text" name="password" id="" />
  
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="text" name="confirmPassword" id="" />
      </Formulario>
    )
  }
  
  export default Formulario