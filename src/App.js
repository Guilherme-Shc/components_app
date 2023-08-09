import Route from "./components/Route";
import AccordionPage from "./pages/AccordionPage";
import DropDownPage from "./pages/DropDownPage";
import Sidebar from "./components/Sidebar";
import ButtonPage from "./pages/ButtonPage";
import ModalPage from "./pages/ModalPage";
import TablePage from "./pages/TablePage";
import Counterpage from "./pages/CounterPage";
import Counterpage2 from "./pages/CounterPage2";
import MidiaPage from "./pages/MidiaPage";

function App() {
    return (<div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
        <Sidebar/>
        <div className="col-span-5">
            <Route path='/accordion'>
                <AccordionPage />
            </Route>
            <Route path='/'>
                <DropDownPage />
            </Route>
            <Route path='/buttons'>
                <ButtonPage />
            </Route>
            <Route path='/modal'>
                <ModalPage/>
            </Route>
            <Route path='/table'>
                <TablePage/>
            </Route>
            <Route path='/counter'>
                <Counterpage initialCount={0}/>
            </Route>
            <Route path='/counter_2.0'>
                <Counterpage2 initialCount={0}/>
            </Route>
            <Route path='/midia'>
                <MidiaPage/>
            </Route>
        </div>
    </div>);
}

export default App;