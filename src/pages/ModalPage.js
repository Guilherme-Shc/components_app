
import Modal from "../components/Modal";
import { useState } from "react";
import Button from '../components/Button';

function ModalPage(){
    const [showModal, setShowModal] = useState(false);

    const handleClick = () =>{
        setShowModal(true);
    };
    const handleClose = () =>{
        setShowModal(false);
    }

    const actionBar = <div>
        <Button primary onClick={handleClose}>Very Cool</Button>
    </div>
    const modal = <Modal onClose={handleClose} actionBar={actionBar}>
        <p>Here we have an important text, cool right?</p>
    </Modal>;

    return(
        <div>
            <Button onClick={handleClick} primary>Click Here!!</Button>
            {showModal && modal}
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget augue faucibus, sollicitudin risus ullamcorper, pretium ligula. Suspendisse venenatis ligula consectetur metus ultricies viverra. Quisque quis massa neque. Fusce laoreet ultricies dapibus. Aenean a rhoncus ante. Fusce euismod nisi vitae lorem vulputate, rutrum pharetra felis iaculis. Nullam non convallis magna. Sed massa ligula, egestas at ligula a, fermentum efficitur libero.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget augue faucibus, sollicitudin risus ullamcorper, pretium ligula. Suspendisse venenatis ligula consectetur metus ultricies viverra. Quisque quis massa neque. Fusce laoreet ultricies dapibus. Aenean a rhoncus ante. Fusce euismod nisi vitae lorem vulputate, rutrum pharetra felis iaculis. Nullam non convallis magna. Sed massa ligula, egestas at ligula a, fermentum efficitur libero.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget augue faucibus, sollicitudin risus ullamcorper, pretium ligula. Suspendisse venenatis ligula consectetur metus ultricies viverra. Quisque quis massa neque. Fusce laoreet ultricies dapibus. Aenean a rhoncus ante. Fusce euismod nisi vitae lorem vulputate, rutrum pharetra felis iaculis. Nullam non convallis magna. Sed massa ligula, egestas at ligula a, fermentum efficitur libero.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget augue faucibus, sollicitudin risus ullamcorper, pretium ligula. Suspendisse venenatis ligula consectetur metus ultricies viverra. Quisque quis massa neque. Fusce laoreet ultricies dapibus. Aenean a rhoncus ante. Fusce euismod nisi vitae lorem vulputate, rutrum pharetra felis iaculis. Nullam non convallis magna. Sed massa ligula, egestas at ligula a, fermentum efficitur libero.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget augue faucibus, sollicitudin risus ullamcorper, pretium ligula. Suspendisse venenatis ligula consectetur metus ultricies viverra. Quisque quis massa neque. Fusce laoreet ultricies dapibus. Aenean a rhoncus ante. Fusce euismod nisi vitae lorem vulputate, rutrum pharetra felis iaculis. Nullam non convallis magna. Sed massa ligula, egestas at ligula a, fermentum efficitur libero.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget augue faucibus, sollicitudin risus ullamcorper, pretium ligula. Suspendisse venenatis ligula consectetur metus ultricies viverra. Quisque quis massa neque. Fusce laoreet ultricies dapibus. Aenean a rhoncus ante. Fusce euismod nisi vitae lorem vulputate, rutrum pharetra felis iaculis. Nullam non convallis magna. Sed massa ligula, egestas at ligula a, fermentum efficitur libero.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget augue faucibus, sollicitudin risus ullamcorper, pretium ligula. Suspendisse venenatis ligula consectetur metus ultricies viverra. Quisque quis massa neque. Fusce laoreet ultricies dapibus. Aenean a rhoncus ante. Fusce euismod nisi vitae lorem vulputate, rutrum pharetra felis iaculis. Nullam non convallis magna. Sed massa ligula, egestas at ligula a, fermentum efficitur libero.
            </p>
            <Button onClick={handleClick} primary>Click Here!!</Button>
            {showModal && modal}
            {/* I added a lot of text and a button on the bottom too to test if the modal would appear if the page was scroled */}
        </div>
    );
}
export default ModalPage;