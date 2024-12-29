import s from './inicio.module.scss';
import origem from '../../assets/origem.png';
import imgFilme from '../../assets/imgFilme.png'; 
import play from '../../assets/play.png'
import star from '../../assets/Star 2.png'
import filme1 from '../../assets/filme1.png'
import filme2 from '../../assets/filme2.png'
import filme3 from '../../assets/filme3.png'
import filme4 from '../../assets/filme4.png'
import filme5 from '../../assets/filme5.png'
export default function Inicio() {
    return (
        <main>
            <section className={s.td}>
            <section className={s.principal}>
                <img src={origem} alt="Imagem de origem" />
                <p>1h 37min | Aventura, Animação, Família</p>
                <p className={s.texto}>
                    Jack Frost, um garoto que controla o inverno, se junta ao seleto time dos Guardiões Imortais para impedir Breu, o bicho-papão, de transformar todos os sonhos das crianças em pesadelo e usar seus poderes maquiavélicos para governar o mundo.
                </p>
            <section className={s.botoes}>
                <button >
                    <a target="_blank" href="https://www.primevideo.com/-/pt/detail/A-Origem-Dos-Guardi%C3%B5es/0I5N7E48L9R1JLV8KTZXMY6Z19"><img src={play} alt="" />assistir</a>
                </button>

                <button  className={s.add} >
                    <a target="_blank" href="http://localhost:5173/MinhaLista"><img src={star} alt="" />adicionar aos favoritos</a>
                </button>
            </section>
            </section>
            <section className={s.imagem}>
            <img src={imgFilme} alt="" />
            </section>

            </section>

            <section className={s.continuar}>
                <p>Continuar Assistindo</p>
                <img src={filme1} alt="" />
                <img src={filme2} alt="" />
                <img src={filme3} alt="" />
                <img src={filme4} alt="" />
                <img src={filme5} alt="" />
                <p>Filmes de Terror no Natal </p>

            </section>
        </main>
        
    );
}
