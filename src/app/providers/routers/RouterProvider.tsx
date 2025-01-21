import { BrowserRouter, Route, Routes } from "react-router";
import { LoginPage } from "../../pages/LoginPage";
import { PasswordRecoveryPage } from "../../pages/PasswordRecoveryPage";
import { DahsboardPage } from "../../pages/dashboard/DashboardPage";
import { ProductsPage } from "../../pages/dashboard/ProductsPage";
import { MailingPage } from "../../pages/dashboard/MailingPage";
import { TradingPage } from "../../pages/dashboard/TradingPage";
import { ConfigurationPage } from "../../pages/dashboard/ConfigurationPage";
import { SizePage } from "../../pages/dashboard/configuration/SizePage";
import { StatusPage } from "../../pages/dashboard/configuration/StatusPage";
import { TypePage } from "../../pages/dashboard/configuration/TypePage";

export const RouterProvider: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={ <LoginPage /> }/>
                <Route path="/password-recovery" element={ <PasswordRecoveryPage /> }/>
                <Route path="/" element={ <DahsboardPage /> }>
                    <Route path="/products" element={ <ProductsPage /> }/>
                    <Route path="/mailing" element={ <MailingPage /> }/>
                    <Route path="/trading" element={ <TradingPage /> }/>
                    <Route path="/configuration" element={ <ConfigurationPage /> }/>
                    <Route path="/configuration/size" element={ <SizePage /> }/>
                    <Route path="/configuration/status" element={ <StatusPage /> }/>
                    <Route path="/configuration/type" element={ <TypePage /> }/>
                    <Route path="*" element={ <h1>Not Found</h1> }/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}