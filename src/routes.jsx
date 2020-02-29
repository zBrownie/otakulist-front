import React from 'react'


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import CadastroAnime from './pages/CadastroAnime'
import Lista from './pages/Lista'

const routes = () => <Router>
    <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/" component={CadastroAnime} />
        <Route exact path="/lista" component={Lista} />
    </Switch>
</Router>

export default routes