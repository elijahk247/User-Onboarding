import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup
        .string()
        .min(2, 'Name must be at least 3 characters long')
        .required('Name is required')
        
})