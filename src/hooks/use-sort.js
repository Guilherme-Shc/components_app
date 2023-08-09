import { useState } from "react";


function useSort(data, config){
    const [sortOrder, setSortOrder] = useState(null);
    const [sortBy, setSortBy] = useState(null);

    const setSortColumn = (label) =>{
        if(sortBy && label !== sortBy){
            setSortOrder('asc');
            setSortBy(label);
            return;
        }

        if(sortOrder === null){
            setSortOrder('asc');
            setSortBy(label);
        }
        else if(sortOrder === 'asc'){
            setSortOrder('desc');
            setSortBy(label);
        }
        else if(sortOrder === 'desc'){
            setSortOrder(null);
            setSortBy(null);
        }

    };

    //MAKING THE SORT SCALABLE
    // const sortOrders = [null, "asc", "desc"];
    // const setSortColumn = (label) => {
    //   setSortOrder((current) => {
    //     if (sortBy === label) {
    //       const orderIndex = sortOrders.indexOf(current);
    //       return sortOrders[(orderIndex + 1) % 3];
    //     } else return sortOrders[1];
    //   });
    //   setSortBy(label);
    // };
   
      //Only sort data if sortOrder and sortBy are not null
    //make a copy of the 'data' prop
    // Find the correct sortValue function and use it for sorting

    let sortedData = data;
    if(sortOrder && sortBy){
        const {sortValue} = config.find(column => column.label === sortBy)

        sortedData=[...data].sort((a, b) => {
            const valueA = sortValue(a);
            const valueB = sortValue(b);

            const reverseOrder = sortOrder === 'asc' ? 1 : -1;

            if(typeof valueA === 'string'){
                return valueA.localeCompare(valueB) * reverseOrder;
            }
            else{
                return(valueA - valueB) * reverseOrder;
            }
        })
    }

    return {
        sortOrder,
        sortBy,
        sortedData,
        setSortColumn
    }
}

export default useSort;