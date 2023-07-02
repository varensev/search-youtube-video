import React, {InputHTMLAttributes, forwardRef, useState} from 'react';

import styles from "./style.module.scss"
import {classNames} from "../../../lib/class-names";
import eyeOff from "../../../assets/icons/eye-off.svg"
import eye from "../../../assets/icons/eye.svg"
import {UseShowPassword} from "../../../../hooks/use-show-password";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    id: string;
    label: string;
    error?: string;
    className?: string;
    isPassword?: boolean
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({label, id, className = "", isPassword, type, placeholder, error, ...otherProps}, ref) => {
        const {showPassword, togglePasswordVisibility} = UseShowPassword()

        return (
            <div className={classNames(styles.container, {}, [styles[className]])}>
                <label htmlFor={id}>{label}</label>
                <input
                    type={showPassword ? 'text' : type}
                    id={id}
                    placeholder={placeholder}
                    {...otherProps}
                    ref={ref}
                />
                {
                    isPassword &&
                    <div className={styles.iconEye} onClick={togglePasswordVisibility}>
                        {showPassword ?
                            <img src={eye} alt="eye-off" className={styles.Eye}/> :
                            <img src={eyeOff} alt="eye-off" className={styles.eyeOff}/>
                        }
                    </div>
                }
                {error && <span>{error}</span>}
            </div>
        );
    }
);
