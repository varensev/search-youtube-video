import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {schema, SchemaType} from '../input-seacrh-schema/input-seacrh-schema'; // Путь к вашей схеме Yup
import styles from './input-search.module.scss';

const InputSearch = () => {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<SchemaType>({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data: SchemaType) => {
        console.log(data);
    };

    return (
        <>
            <form className={styles.containerInput} onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="text"
                    placeholder="Что хотите посмотреть?"
                    {...register('searchText')}
                />
                <button type="submit">Найти</button>
            </form>
            {errors.searchText && (
                <span className={"error"} >{errors.searchText.message}</span>
            )}
        </>
    );
};

export {InputSearch};
