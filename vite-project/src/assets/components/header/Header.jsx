import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Filmes from '../../../pages/filmes/Filmes.jsx'; // Certifique-se de que o caminho está correto
import Series from '../../../pages/series/Series.jsx';
import MinhaLista from '../../../pages/minhalista/MinhaLista.jsx';
import Configuracoes from '../../../pages/configuracoes/Configuracoes.jsx';
import Inicio from "../../../pages/inicio/Inicio.jsx";

import s from '../header/header.module.scss';
import casinha from '../../../assets/casinha.png';
import congifuracoes from '../../../assets/configurações.png'
import estrela from '../../../assets/estrela.png'
import series from '../../../assets/series.png'
import filmes from '../../../assets/filmes.png'
import vandinha from '../../../assets/vandinha.png'
import goro from '../../../assets/goro.png'
import natal from '../../../assets/natal.png'
import seta from '../../../assets/seta.png'
export  default function Header() {
    return (
        <BrowserRouter>
         <header>
            <section className={s.usu}>
                <img className={s.g} src={goro} alt="" />
                <img className={s.v} src={vandinha} alt="" />
                <img className={s.s} src={seta} alt="" />
            </section>
            <nav>
            <ul className={s.navList}>
                   
                    <li><Link className={s.link} to="/"><img src={casinha} alt="Logo" />Início</Link></li>
                    <li><Link className={s.link} to="/Filmes"><img src={filmes} alt="Logo" />Filmes</Link></li>
                    <li><Link className={s.link} to="/Series"><img src={series} alt="Logo" />Séries</Link></li>
                    <li><Link className={s.link} to="/MinhaLista"><img src={estrela} alt="Logo" />Minha Lista</Link></li>
                    <li><Link className={s.link} to="/Configuracoes"><img src={congifuracoes} alt="Logo" />Configurações</Link></li>
                </ul>
            </nav>

            <section className={s.natal} >
            <img src={natal} alt="" />
            </section>
        </header>
        <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/Filmes" element={<Filmes />} />
                <Route path="/Series" element={<Series />} />
                <Route path="/MinhaLista" element={<MinhaLista />} />
                <Route path="/Configuracoes" element={<Configuracoes />} />
            </Routes>
        </BrowserRouter>
       
    );
}


