import { useState, useEffect, useRef } from "react";
import {GoChevronDown} from "react-icons/go"
import Panel from "./Panel";

function DropDown({options, value, onChange}) {
    
    const [isOpen, setIsOpen] = useState(false);
    const divEl = useRef();

    useEffect(() => {
         const handler = (event) =>{
            //usado para ver se o divEl está com referência para alguma div
            if(!divEl.current){
                return;
            }
            //usado para fazer o menu sumir se clicado fora dele
            if(!divEl.current.contains(event.target)){
                setIsOpen(false);
            }
        }

         document.addEventListener('click', handler, true);

         return () => {
            document.removeEventListener('click', handler);
         }
    }, []);

    const handleClick = () =>{
        // if(isOpen===false){
        //     setIsOpen(true);
        // }else{
        //     setIsOpen(false);
        // }

        //The set is opens in the top and in the botton output the same answer
        setIsOpen(!isOpen);
    }

    const handleOptionClick = (option) =>{
        setIsOpen(false);
        onChange(option)
    }
    
    const renderedOptions = options.map((option) =>{
        return( 
            <div onClick={() => handleOptionClick(option)} key={option.value}
            className="hover rounded cursor-pointer p-1">
                {option.label}
            </div>
        );
    }); 

    const renderColors = isOpen && <Panel className="absolute top-full "
    >{renderedOptions}</Panel>;
    
    return( 
        <div ref={divEl} className="w-48 relative cursor-pointer">
            <Panel className="flex items-center justify-between
            cursor-pointer" onClick={handleClick}>
                {value?.label || 'Select...'}
                <GoChevronDown className="text-lg"/>
            </Panel>
            {renderColors}
        </div>
    );
}

export default DropDown;