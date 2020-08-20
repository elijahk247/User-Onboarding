import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup
        .string()
        .min(2, 'Name must be at least 3 characters long')
        .required('Name is required'), 
    email: yup
        .string()
        .email('Must be a valid email address')
        .required('Must include email address'),
    password: yup
        .string()
        .min(8, 'Password must be at least 8 characters long')
        .matches(/[a-zA-Z]/, 'Password can only contain Latin Chars'),
    terms: yup
        .string()
        .oneOf(['agree', 'disagree'], "New User must agree to terms of service")
        .required('You must select agree to enter the system')
})

export default formSchema