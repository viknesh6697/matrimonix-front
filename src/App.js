import React from 'react';
import { Suspense, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from './components/pages/LandingPage';
import LoginPage from './components/pages/LoginPage';
import RegisterPage from './components/pages/RegisterPage';
import ForgetPasswordPage from './components/pages/ForgetPasswordPage';
import HomePage from './components/pages/HomePage';
import Loading from './components/pages/Loading';
import ClientRegister from './components/pages/ClientRegisterPage'
import PeopleList from './components/pages/ClientsView/ClientsViewPage'
import i18n from './i18n';
import LocaleContext from './LocaleContext';
// import Selectlanguage from './components/pages/SelectLanguage';
import { useTranslation } from "react-i18next";
import './App.css'

export default function App() {
    const [locale, setLocale] = useState(i18n.language);
    i18n.on('languageChanged', (lng) => setLocale(i18n.language));
    return (
        <LocaleContext.Provider value={{locale, setLocale}}>
        <Suspense fallback={<Loading />}>
        <Router>
            <div>
                {/* <Selectlanguage /> */}
                <Switch>
                    <Route exact path="/" component={ LandingPage } />
                    <Route path="/login" component={ LoginPage } />
                    <Route path="/register" component={ RegisterPage } />
                    <Route path="/forget-password" component={ ForgetPasswordPage } />
                    <Route path="/home" component={ HomePage } />
                    <Route path="/:pattern([a-zA-Z0-9]{6})/client-register" component={ ClientRegister } />
                    <Route path="/client-list" component={ PeopleList } />
                </Switch>
                {/* <Footer /> */}
            </div>
        </Router>
        </Suspense>
        </LocaleContext.Provider>
    )
}

