import { Navigate, Route, Routes } from "react-router-dom";
import LoginPages from "../pages/LoginPages";
import RegisterPage from "../pages/RegisterPage";

function AuthRoutes() {
    return ( 
        <Routes>
            <Route path="login" element={<LoginPages/>}/>
            <Route path="register" element={<RegisterPage/>}/>           
            <Route path="/*" element={<Navigate to ="/auth/login"/>}/>
        </Routes>
     );
}

export default AuthRoutes;