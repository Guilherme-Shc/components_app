import ButtonPage from "./pages/ButtonPage";
import Accordion from "./components/Accordion";

function App(){
    const items = [
        {
            id:"1",
            label: "HIHIHIHI",
            content: "AUSDHAUSDHAUSHDUASHDAUSDHLASHDLASHDUASHDAUSHDLASHDUI"
        },
        {
            id:"2",
            label: "HIHIHIHI",
            content: "AUSDHAUSDHAUSHDUASHDAUSDHLASHDLASHDUASHDAUSHDLASHDUI"
        },
        {
            id:"3",
            label: "HIHIHIHI",
            content: "AUSDHAUSDHAUSHDUASHDAUSDHLASHDLASHDUASHDAUSHDLASHDUI"
        },
    ]
    return(<Accordion items={items}/>);
}

export default App; 