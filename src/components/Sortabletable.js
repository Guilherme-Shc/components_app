import Table from "./Table";
import {BiDownArrow, BiUpArrow} from 'react-icons/bi'
import useSort from "../hooks/use-sort";

function Sortabletable (props) {
    
    const {config, data} = props;

    const{
        sortOrder,
        sortBy,
        sortedData,
        setSortColumn
    }=useSort(data, config);
    
    const updatedConfig = config.map((column) =>{
        if(!column.sortValue){
            return column;
        }

        return{
            ...column,
            header: () => (
                <th className="cursor-pointer hover:bg-blue-100/50" onClick={() => setSortColumn(column.label)}>
                    <div className="flex items-center">
                        {getIcons(column.label, sortBy, sortOrder)}
                        {column.label}
                    </div>
                </th>
            ),
        }

    });

      
    return(<Table  {...props} data={sortedData} config={updatedConfig}/>);
}

function getIcons(label, sortBy, sortOrder){
    if(label!==sortBy){
        return (
            <div>
                <BiUpArrow/>
                <BiDownArrow/>
            </div>
        );
    }

    if(sortOrder===null){
        return (
            <div>
                <BiUpArrow/>
                <BiDownArrow/>
            </div>
        );
    }
    else if(sortOrder==='asc'){
        return (
            <div>
                <BiUpArrow/>
            </div>
        );
    }
    else if(sortOrder==='desc'){
        return (
            <div>
                <BiDownArrow/>
            </div>
        );
    }
}

export default Sortabletable;