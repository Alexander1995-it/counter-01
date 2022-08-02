import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';
import s from './MyButton.module.css'

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type MyButtonPropsType = DefaultButtonPropsType & {

}

const MyButton: React.FC<MyButtonPropsType> = ({ ...restProps}) => {

    return (
        <div>
            <button
                {...restProps}
                className={s.button}
            >
                {restProps.children}
            </button>
        </div>
    );
};

export default MyButton;