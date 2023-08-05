import classNames from "classnames";

function Panel ({children, ClassName, ...rest}){
    const finalClassNames = classNames(
        'border rounded p-3 shadow bg-white w-full',
        ClassName
    );

    return <div {...rest} className={finalClassNames}>{children}</div>
}

export default Panel;