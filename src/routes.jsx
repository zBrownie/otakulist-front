import React from 'react'


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import CadastroAnime from './pages/CadastroAnime'

const routes = () => <Router>
    <Switch>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/" component={CadastroAnime}/>
    </Switch>
</Router>

export default routes