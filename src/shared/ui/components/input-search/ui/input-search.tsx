import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {schema, SchemaType} from '../input-seacrh-schema/input-seacrh-schema';
import styles from './input-search.module.scss';
import {classNames} from "../../../../lib/class-names";
import React, {useState} from "react";
import heart from "../../../../assets/icons/heart.svg"
interface InputSearchProps {
    setSearchItem: (value: string) => void
    searchItem: string
}
const InputSearch: React.FC<InputSearchProps> = ({setSearchItem, searchItem}) => {
    const [vueTopForm, setVueTopForm] = useState<boolean>(false)
    const {
        handleSubmit,
        register,getValues,
        formState: {errors },
    } = useForm<SchemaType>({
        resolver: yupResolver(schema),
    });
    const onSubmit = (formData: SchemaType) => {
        console.log(formData);
        setSearchItem(formData.searchText)
        setVueTopForm(true)
    };

    const styleFormPosition = getValues() ? styles.SearchTop : styles.SearchCentre

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
