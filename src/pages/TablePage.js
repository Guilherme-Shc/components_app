import Sortabletable from "../components/Sortabletable";

function TablePage() {
    const data =[
        {name: 'Peach', color:'bg-rose-300/50 border-rose-300 border-2', score: 4},
        {name: 'Apple', color:'bg-red-500/50 border-red-500 border-2', score: 3},
        {name: 'Banana', color:'bg-yellow-400/50 border-yellow-400 border-2', score: 2},
        {name: 'Lemon', color:'bg-green-500/50 border-green-500 border-2', score: 5},
        {name: 'Blueberry', color:'bg-blue-500/50 border-blue-500 border-2', score: 1},
    ];

    const config =[
        { 
            label: 'Name', 
            render: (fruit) => fruit.name,
            sortValue: (fruit) => fruit.name
        },
        { 
            label: 'Color', 
            render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`} />,
        },
        { 
            label: 'Score', 
            render: (fruit) => fruit.score/*, sort: (a, b) => code to implement sortirng*/,
            sortValue: (fruit) => fruit.score
        }
    ];

    const keyFn = (fruit) =>{
        return fruit.name
    };
    return(
        <div>
            <Sortabletable data={data} config={config} keyFn={keyFn}/>
        </div>
    );
}

export default TablePage;