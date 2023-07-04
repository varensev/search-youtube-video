import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {schema, SchemaType} from '../input-seacrh-schema/input-seacrh-schema'; // Путь к вашей схеме Yup
import styles from './input-search.module.scss';
import {classNames} from "../../../../lib/class-names";
import {useState} from "react";
import heart from "../../../../assets/icons/heart.svg"

const InputSearch = () => {
    const [vueTopForm, setVueTopForm] = useState<boolean>(false)
    const {
        handleSubmit,
        register,
        formState: {errors},
    } = useForm<SchemaType>({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data: SchemaType) => {
        console.log(data);
        setVueTopForm(true)
    };

    const styleFormPosition = vueTopForm ? styles.SearchTop : styles.SearchCentre

    return (
        <div className={classNames(styleFormPosition, {}, ["container"])}>
            <p>Поиск видео</p>
            <form className={styles.containerInput} onSubmit={handleSubmit(onSubmit)}>

                <div className={styles.inputContainer}>
                    <input
                        type="text"
                        placeholder="Что хотите посмотреть?"
                        {...register('searchText')}
                    />
                    {vueTopForm &&  <img src={heart} alt="heart" className={styles.heart}/> }
                </div>

                <button type="submit">Найти</button>
            </form>
            {errors.searchText && (
                <span className={"error"}>{errors.searchText.message}</span>
            )}
        </div>
    );
};

export {InputSearch};
