//Imports
import { Routes, Route } from 'react-router-dom';
import ErrorNotFound from '../../pages/ErrorNotFound/index';
import LogIn from '../../pages/auth/LogIn/index';
import Register from '../../pages/auth/Register/index';
import Home from '../../pages/Home/index';

//Component
function App() {
    //Render
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="login" element={<LogIn />}></Route>
                <Route path="register" element={<Register />}></Route>
                <Route path="*" element={<ErrorNotFound />}></Route>
            </Routes>
        </>
    );
}

//Exports
export default App;
