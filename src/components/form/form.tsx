import React from 'react';
import style from './form.module.scss';
import sibdevLogo from '../../shared/assets/icons/sibdev-logo.svg';
import {useForm} from 'react-hook-form';
import {Input} from '../../shared/ui/components/input/input';
import {yupResolver} from "@hookform/resolvers/yup"
import {validationSchema, validationSchemaType} from "./schema";
import {useNavigate} from "react-router-dom";
import {APP_ROUTER} from "../../providers/router/config/app-routes.constants";

const Form = () => {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<validationSchemaType>({
        resolver: yupResolver(validationSchema),
    });
    const navigate = useNavigate();

    const onSubmit = (data: validationSchemaType): void => {
        console.log(data);
        navigate(APP_ROUTER.ROOT)
    };

    return (
        <form className={style.container} onSubmit={handleSubmit(onSubmit)}>
            <img src={sibdevLogo} alt="logo"/>
            <p>Вход</p>
            <div className={style.inputMargin}>
                <Input
                    label="Логин"
                    id="login"
                    type="text"
                    placeholder="Введите логин"
                    {...register('login')}
                    error={errors.login && errors.login.message}
                />
            </div>
            <div className={style.inputMarginX2}>
                <Input
                    label="Пароль"
                    id="password"
                    type="password"
                    placeholder="Введите пароль"
                    {...register('password')}
                    error={errors.password && errors.password.message}
                    isPassword
                />
            </div>
            <button type="submit">Войти</button>
        </form>
    );
};

export {Form};
