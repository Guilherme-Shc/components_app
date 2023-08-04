import { useState } from "react";
import { GoChevronLeft, GoChevronDown } from "react-icons/go";

function Accordion({items}){
    /*UseState começando como -1 para que nenhum dos itens esteja expandido ao carregar a página*/
    const [expandedIndex, setExpandedIndex] = useState(-1); 

    const handleClick = (nextIndex) =>{
        if(expandedIndex === nextIndex){
            setExpandedIndex(-1);
        }else{
            setExpandedIndex(nextIndex);
        }
    };

    const renderedItems = items.map((item, index) =>{
        const isExpanded = index === expandedIndex;
        
        const icon = <span className="text-xl ">
            {isExpanded ? <GoChevronDown/> : <GoChevronLeft/>}
        </span>

        const content = isExpanded && <div className="border-b p-5" >{item.content}</div>;

        return(
        <div key={item.id}>
            {/*Explicação da div abaixo: o map cria multiplhas arrow functions que cada uma separadamente 
            chama o HandleClick com o index (que se torna nextIndex), 
            isso é feito para conseguir usar um event handler fora do map*/}
            <div className="flex p-3 justify-between bg-green-50 border-b items-center cursor-pointer" onClick={() => handleClick(index)}> 
            {item.label}
            {icon}
            </div>
            {content} {/*printa isExpanded que é undef OU o texto de item.content*/}
        </div>
        );
    });

    
    return(<div className="border-x border-t rounded"> {renderedItems} </div>);
}

export default Accordion;