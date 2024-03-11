import *as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik'
const validationSchema = Yup.object({
    firstName: Yup.string().required('nombre requerido').min(2, 'debe contener al menos 2 caracteres'),
    lastName: Yup.string().required('apellido requerido').min(2, 'debe contener al menos 2 caracteres'),
    email: Yup.string().email('email invalido').required(' email requerido'),
    clave: Yup.string().min(8, 'debe contener al menos 8 caracteres').required('contraseña requerido'),
    confirmClave: Yup.string()
        .oneOf([Yup.ref('clave'), null], 'Las claves deben coincidir')
        .min(8, 'Debe contener al menos 8 caracteres')
        .required('confirmacion de contraseña requerido'),
})

const divStyle = {
    width: "700px"
};



const Formulario = () => {
    const handleSubmit = (values, { setSubmitting }) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 1000);
    };
    return <Formik
        initialValues={{ email: '', clave: '', firstName: '', lastName: '', confirmClave: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
    >
        {({ isSubmitting }) => (
            <Form>
                <div className=' container bg-body-tertiary p-3 border justify-content-center mt-3' style={divStyle}>
                    <div className=" d-flex flex-column flex-md-row">
                        <label htmlFor="exampleInputName" className="form-label">First Name</label>
                        <Field type="text" name="firstName" className="form-control" placeholder="Email" />
                    </div>
                    <ErrorMessage name="firstName" component="div" className="text-danger" />
                </div>

                <div className='container bg-body-tertiary p-3 border justify-content-center mt-3' style={divStyle}>
                    <div className="mb-3 d-flex flex-column flex-md-row">
                        <label htmlFor="exampleInputName" className="form-label">Last Name</label>
                        <Field type="text" name="lastName" className="form-control" placeholder="Email" />
                    </div>
                    <ErrorMessage name="lastName" component="div" className="text-danger" />
                </div>
                <div className='container bg-body-tertiary p-3 border justify-content-center mt-3' style={divStyle}>
                    <div className=" mb-3 d-flex flex-column flex-md-row">
                        <label htmlFor="exampleInputName" className="form-label">Email</label>
                        <Field type="email" name="email" className="form-control" placeholder="Clave" />
                    </div>
                    <ErrorMessage name="email" component="div" className="text-danger" />
                </div>
                <div className='container bg-body-tertiary p-3 border justify-content-center mt-3' style={divStyle}>
                    <div className=" mb-3 d-flex flex-column flex-md-row">
                        <label htmlFor="exampleInputName" className="form-label">Password</label>
                        <Field type="password" name="clave" className="form-control" placeholder="Clave" />
                    </div>
                    <ErrorMessage name="clave" component="div" className="text-danger" />
                </div>
                <div className='container bg-body-tertiary p-3 border justify-content-center mt-3' style={divStyle}>
                    <div className=" mb-3 d-flex flex-column flex-md-row">
                        <label htmlFor="exampleInputName" className="form-label">Confirm Password</label>
                        <Field type="password" name="confirmClave" className="form-control" placeholder="Clave" />
                    </div>
                    <ErrorMessage name="confirmClave" component="div" className="text-danger" />
                </div>
                <div className="d-flex justify-content-center mt-3">
                    <button type="submit" className="btn btn-primary" disabled={isSubmitting}>Enviar Datos</button>
                </div>
            </Form>
        )}
    </Formik>
}

export default Formulario