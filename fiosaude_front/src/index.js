import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UploadXML from './uploadxml';
import Formxml from './relatorio';
import Form from "./components/Form.js"
import './index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import Relatorio from './pages/relatorio';
import Contato from './pages/contato';

ReactDOM.render(
    (
        <Router>
            <App>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/relatorio/" component={Relatorio}/>
                    <Route path="/contato" component={Contato}/>
                </Switch>
            </App>
        </Router>
    ),
    document.getElementById('root')
);

ReactDOM.render(<UploadXML />, document.getElementById('rootxml'));

ReactDOM.render(<Formxml />, document.getElementById('formxml'));





// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

