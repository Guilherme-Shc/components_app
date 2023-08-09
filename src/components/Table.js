import { Fragment } from "react"; //used to add a key to the header without getting an error 

function Table({data, config, keyFn}) {

    const renderedHeaders = config.map((column) =>{
        if(column.header){
            return <Fragment key={column.label}>{column.header()}</Fragment>;
        }

        return <th key={column.label}>{column.label}</th>
    });

    const renderedRows = data.map((rowData) =>{
        const renderedCells = config.map((column) => {
            return(
                <td key={column.label} className="p-2">{column.render(rowData)}</td>
            );
        });
        return(
            <tr className="border-b"key={keyFn(rowData)}>
                {renderedCells}
            </tr>
        )
    });

    return(
        <table className="table-auto border-spacing-2">
            <thead>
                <tr key="" className="border-b-2">
                    {renderedHeaders}
                </tr>
            </thead>
            <tbody>
                {renderedRows}
            </tbody>
        </table>
    );
}

export default Table;