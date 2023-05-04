import React, { Component } from "react";
import "primereact/resources/themes/lara-light-indigo/theme.css"; 
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import {Menubar} from 'primereact/menubar';
import {withRouter} from 'react-router-dom';
import GlobalStyle from "./styles/global";
import styled from "styled-components";
import Form from "./components/Form.js";
import Grid from "./components/Grid";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

class App extends Component {
 
  render() {
    const menuitems = [
      {
         label:'Home',
         icon:'pi pi-fw pi-home',
         command:() => this.props.history.push('/')
      },
      {
         label:'Relatorio',
         icon:'pi pi-fw pi-book',
         command:() => this.props.history.push('/relatorio')
      },
      {
         label:'Contato',
         icon:'pi pi-fw pi-comment',
         command:() => this.props.history.push('/contato')
      },
      {
        label:'Ir Para Fio Saúde',
        icon:'pi pi-fw pi-directions',
        command:() => this.props.history.push('https://fiosaude.org.br/')
     }
   ];
    return (
      <div className="App">
        <Menubar model={menuitems}/>
        <Header/>
        <Footer/>
        <div id="main">
            <main>
                <div className="content" id="content">
                    {this.props.children}
                </div>
            </main>
        </div>
      </div>
    );
  }
 
}

export default withRouter(App);