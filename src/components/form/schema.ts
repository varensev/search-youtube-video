import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
    login: Yup.string().required('Логин обязателен'),
    password: Yup.string().required('Пароль обязателен'),
});

export type validationSchemaType = Yup.InferType<typeof validationSchema>;
