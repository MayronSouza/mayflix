import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './index.css';
import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Video';

const Pagina404 = () => (<div>Página 404</div>)

ReactDOM.render(
  <Router>
    <Switch>
      <Route path='/' component={Home} exact />
      <Route path='/cadastro/video' component={CadastroVideo} />
      <Route component={Pagina404} />
    </Switch>
  </Router>,
  document.getElementById('root')
);