import {Route, Routes} from "react-router-dom";
import {AdidasPage, MainPage, TheNorthFacePage, NewbalancePage, SneackerPage} from "../pages";
import {NikePage} from "../pages";
import {AutentificationPage} from "../pages/AutentificationPage";
import {RegistrationPage} from "../pages/RegistrationPage";

const AppRouter = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<MainPage/>} />
                <Route path="/nike" element={<NikePage/>} />
                <Route path="/adidas" element={<AdidasPage/>} />
                <Route path="/the_north_face" element={<TheNorthFacePage/>} />
                <Route path="/new_balance" element={<NewbalancePage/>} />
                <Route path="/registration" element={<RegistrationPage/>} />
                <Route path="/login" element={<AutentificationPage/>} />
                <Route path="/sneacker" element={<SneackerPage/>} />
            </Routes>
        </div>
    );
};

export default AppRouter;














