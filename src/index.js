import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import RegisterTarefas from './routes/registerTarefas';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Requisicao from './routes/requisicoes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

      <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path='/registro' element={<RegisterTarefas />}/>
        <Route path='/requisicao' element={<Requisicao />}/>
      </Routes>
    </BrowserRouter>

);