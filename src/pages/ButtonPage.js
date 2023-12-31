import Button from "../components/Button";
import {GoBellFill, GoDatabase, GoCloud} from 'react-icons/go'


function ButtonPage(){
    
    return(<div className=" flex place-content-center flex-col">
        <div>
            <Button className="mb-5" primary outline>
                <GoBellFill/>
                Click Here
            </Button>
        </div>
        <div >
            <Button secondary>
                <GoCloud/>
                Buy Now
            </Button>
        </div>
        <div >
            <Button success outline>
                <GoDatabase/>
                See Here
            </Button>
        </div>
        <div >
            <Button warning rounded>
                Close Adds
            </Button>
        </div>
        <div >
            <Button danger rounded>
                Super Secret
            </Button>
        </div>
        </div>
    );
}

export default ButtonPage; 