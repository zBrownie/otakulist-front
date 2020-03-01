import React from 'react'


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Header from './components/Header'
import Home from './pages/Home'
import CadastroAnime from './pages/CadastroAnime'
import Lista from './pages/Lista'
import Footer from './components/Footer'
import Login from './pages/Login'

const routes = () => <Router>
    <Header />
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cadastro" component={CadastroAnime} />
        <Route exact path="/lista" component={Lista} />
        <Route exact path="/login" component={Login} />
    </Switch>
    <Footer/>
</Router>

export default routes