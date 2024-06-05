import { useFormik } from "formik";
import * as Yup from 'yup';

const FormikFormWithYUP = () => {
    const formik = useFormik ({
        initialValues: {
            name: '',
            email: ''
        },
        validationSchema: Yup.object({
            name: Yup.string().max(15, 'Must be 15 chracters or less !!!').required('Name must not be empty !!!'),
            email: Yup.string().email('Please enter a valid email !!!').required('email must not be empty !!!')
        }),
        onSubmit: (values, {resetForm}) => {
            console.log(values);
            resetForm();
        }
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor='name'>Your name</label>
            <input
                type='text'
                id='name'
                name='name'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
            />
            <div>{formik.errors.name}</div>
            <label htmlFor='email'>Your Email</label>
            <input
                type='email'
                id='email'
                name='email'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
            />
            <div>{formik.errors.email}</div>
            <button type='submit'>Submit</button>
        </form>
    );
}

export default FormikFormWithYUP;