import Button from "../components/Button";
import { useReducer } from "react";
import Panel from "../components/Panel";
import { produce } from "immer";

const INCREMENT_COUT = 'increment';
const DECREMENT_COUNT = 'decrement';
const SET_VALUE_TO_ADD = 'hange-value-to-add';
const ADD_VALUE_TO_COUNT = 'add_value_to_count';

const reducer = (state, action) => {
    //the commented parts in the switch can be used if you dont want to use the immer library
    switch(action.type){
        case INCREMENT_COUT:
            state.count=state.count+1;
            return;
            // return{
            //     ...state,
            //     count: state.count+1
            // }
        case DECREMENT_COUNT:
            state.count=state.count-1;
            return;
            // return{
            //     ...state,
            //     count: state.count-1
            // };
        case ADD_VALUE_TO_COUNT:
            state.count=state.count+state.valueToAdd;
            state.valueToAdd=0;
            return;
            // return{
            //     ...state,
            //     count: state.count+state.valueToAdd,
            //     valueToAdd:0
            // };
        case SET_VALUE_TO_ADD:
            state.valueToAdd = action.payload;
            return;
            // return{
            //     ...state,
            //     valueToAdd: action.payload
            // };
        
        default:
            throw new Error('unexpected action type: '+action.type);
            // return state
    }
};

function Counterpage({initialCount}){
    // const [count, setCount] = useState(initialCount);
    // const [valueToAdd, setValueToAdd] = useState(0);

    const [state, dispatch] = useReducer(produce(reducer), {
        count: initialCount,
        valueToAdd:0
    });



    const increment = () => {
        dispatch({
            type: INCREMENT_COUT,
        });
    }
    const decrement = () => {
        dispatch({
            type: DECREMENT_COUNT,
        });
    }
    const handleChange = (event) =>{
        const value = Number(event.target.value) || 0; // the ||0 é para caso o resultado da string seja NaN que bugaria a adição
        dispatch({
            type: SET_VALUE_TO_ADD,
            payload: value
        })
    }
    const handleSubmit = (event) =>{
        event.preventDefault();
        dispatch({
            type:ADD_VALUE_TO_COUNT,
        })
        // setCount(count+valueToAdd);
        // setValueToAdd(0);
    }

    return(
        <Panel className="m-3">
            <h1 className="text-lg">Count is {state.count}</h1>
            <div className="flex flex-row">
                <Button warning rounded outline onClick={decrement}>Decrement</Button>
                <Button success rounded outline onClick={increment}>Increment</Button>
            </div>

            <form>
                <label>Add the desired number</label>
                <input value={state.valueToAdd || ''} onChange={handleChange} type="number" className="p-3 m-3 bg-gray-50 border border-gray-300"/> 
                <Button primary rounded outline onClick={handleSubmit}>Add it</Button>
            </form>
        </Panel>
    );
    
}

export default Counterpage;