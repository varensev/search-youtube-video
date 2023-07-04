import * as Yup from 'yup';
import {validationSchema} from "../../../../../components/form/schema";

export const schema = Yup.object().shape({
    searchText: Yup.string().required('Поле обязательно для заполнения'),
});

export type SchemaType = Yup.InferType<typeof schema>;

