import Button from "../components/Button";
import useCounter from "../hooks/use-counter";


function Counterpage({initialCount}){
    const {count, increment} = useCounter(initialCount);

    return(
        <div>
            <h1>Count is {count}</h1>
            <Button success rounded outline onClick={increment}>Increment</Button>
        </div>
    );
    
}

export default Counterpage;