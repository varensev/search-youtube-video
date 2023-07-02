import {useState} from "react";

const UseShowPassword  = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return {showPassword , togglePasswordVisibility}
};

export {UseShowPassword};
