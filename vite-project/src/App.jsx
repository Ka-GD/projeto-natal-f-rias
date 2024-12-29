
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './assets/components/header/Header.jsx'; // Ajuste conforme necessário
import Footer from "./assets/components/footer/Footer"
import Inicio from "./pages/inicio/Inicio"
import Filmes from "./pages/filmes/Filmes"
import Series from "./pages/series/Series"
import Configuracoes from "./pages/configuracoes/Configuracoes"
import MinhaLista from "./pages/minhalista/MinhaLista"



export default function App(){

    return(
        <section>
             <Header/>
             
             <Footer/>
        </section>
    )
}