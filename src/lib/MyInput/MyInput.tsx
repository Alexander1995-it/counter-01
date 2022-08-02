import React, {DetailedHTMLProps, InputHTMLAttributes} from 'react';
import s from './MyInput.module.css'

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
type MyInputProps = {
    className?: string
    errorInput?: boolean
} & DefaultInputPropsType

const MyInput: React.FC<MyInputProps> = ({errorInput, className, ...restProps}) => {
    const styleInput = `${s.input__style} ${className}  ${errorInput ? s.error : ''}`
    return (
        <input className={styleInput} {...restProps}/>
    );
};

export default MyInput;