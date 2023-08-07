import DropDown from "../components/DropDown";
import { useState} from "react";


function DropDownPage() {

    const [selection , setSelection] = useState(null);

    const handleSelection = (option) =>{
        setSelection(option);
    }

    const options = [
        { label: 'Red', value: 'red'},
        { label: 'Green', value: 'green'},
        { label: 'Blue', value: 'blue'},
    ]

    
    return(
        <div className="flex">
            <DropDown options={options} value={selection} onChange={handleSelection}/>
        </div>
    );
}

export default DropDownPage;