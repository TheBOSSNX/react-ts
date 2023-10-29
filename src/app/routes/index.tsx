//Switch virou Route
// Redirect virou Navigate
//component virou element e precisa passar uma tag

import { BrowserRouter, Routes as Switch, Route, Navigate } from "react-router-dom";

import { Dashboard } from "../pages";

export const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>

                <Route path="/pagina-inicial" element={<Dashboard/>}/>

                <Route path="*" element={<Navigate to="/pagina-inicial"/>}/>

            </Switch>
        
        </BrowserRouter>
    );
}