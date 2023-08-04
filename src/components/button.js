import className from "classnames";
import {twMerge} from 'tailwind-merge'

function Button({
    rounded,
    outline, 
    primary, 
    secondary, 
    success, 
    warning, 
    danger, 
    children,
    ...rest
}){
        let classes = className(' m-1.5 flex items-center px-3 py- 1.5 border text-3xl', {
            'border-blue-500 bg-blue-500 text-white':primary, 
            'border-gray-900 bg-gray-900 text-white':secondary, 
            'border-green-500 bg-green-500 text-white':success, 
            'border-yellow-400 bg-yellow-400 text-white': warning, 
            'border-red-500 bg-red-500 text-white':danger,
            'rounded-sm':!rounded,
            'rounded-full':rounded,
            'bg-white':outline,
            'text-blue-500': outline && primary,
            'text-gray-900': outline && secondary,
            'text-green-500': outline && success,
            'text-yellow-400': outline && warning,
            'text-red-500': outline && danger,
        }, rest.className)
        
        classes = twMerge(classes);

        return <button {...rest} className={classes}>{children}</button>;
}

export default Button;