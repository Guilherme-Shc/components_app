import Accordion from "../components/Accordion";

function AccordionPage(){
    const items = [
        {
            id:"dont",
            label: "Hollow Knight",
            content: "Hollow Knight é uma aventura de ação clássica em estilo 2D por um vasto mundo interligado. Desenvolvido pela Team Cherry e inicialmente lançado para Microsoft Windows em 24 de Fevereiro de 2017, e posteriormente macOS e Linux. Foi portado em 2018 para o Nintendo Switch, Xbox One e Playstation 4 pela Shark Jump Studios."
        },
        {
            id:"mind",
            label: "The Last of Us",
            content: "The Last of Us é uma franquia de jogos eletrônicos de ação-aventura e survival horror exclusiva da PlayStation, criada por Neil Druckmann. A franquia é situada em um mundo pós-apocalíptico, com seres humanos hostis e criaturas canibais infectadas por uma mutação do fungo cordyceps."
        },
        {
            id:"me",
            label: "Persona 5",
            content: "Persona 5 é um jogo eletrônico de RPG desenvolvido pela Atlus. O jogo é cronologicamente a sexta edição da série Persona, que faz parte principalmente da franquia Megami Tensei."
        },
    ]
    return(<Accordion items={items}/>);
}

export default AccordionPage; 