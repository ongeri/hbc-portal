import * as yup from 'yup';

export const emailValidationSchema = yup.object().shape({
    email: yup
        .string()
        .email("This is not a valid email")
        .required("An email is required")
});
