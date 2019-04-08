import * as yup from 'yup';

export const emailValidationSchema = yup.object().shape({
    email: yup
        .string()
        .email("The entered email is not valid")
        .required("An email is required")
});
