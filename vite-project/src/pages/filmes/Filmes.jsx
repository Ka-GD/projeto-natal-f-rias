import s from './filmes.module.scss'



export default function Filmes(){

    return(
        <main>
        <section className={s.filmes}>
          {/* Filmes de Ação */}
          <section className={s.acao}>
            <h1>Filmes de Ação</h1>
            <section className={s.filmeCard}>
              <img src="/path/to/acao1.jpg" alt="Missão Impossível" />
              <h2>Missão Impossível</h2>
            </section>
            <section className={s.filmeCard}>
              <img src="/path/to/acao2.jpg" alt="Vingadores" />
              <h2>Vingadores</h2>
            </section>
            <section className={s.filmeCard}>
              <img src="/path/to/acao3.jpg" alt="John Wick" />
              <h2>John Wick</h2>
            </section>
          </section>
  
          {/* Filmes de Suspense */}
          <section className={s.suspence}>
            <h1>Filmes de Suspense</h1>
            <section className={s.filmeCard}>
              <img src="/path/to/suspense1.jpg" alt="A Ilha do Medo" />
              <h2>A Ilha do Medo</h2>
            </section>
            <section className={s.filmeCard}>
              <img src="/path/to/suspense2.jpg" alt="Garota Exemplar" />
              <h2>Garota Exemplar</h2>
            </section>
            <section className={s.filmeCard}>
              <img src="/path/to/suspense3.jpg" alt="O Sexto Sentido" />
              <h2>O Sexto Sentido</h2>
            </section>
          </section>
  
          {/* Filmes de Comédia */}
          <section className={s.comedia}>
            <h1>Filmes de Comédia</h1>
            <section className={s.filmeCard}>
              <img src="/path/to/comedia1.jpg" alt="Se Beber, Não Case" />
              <h2>Se Beber, Não Case</h2>
            </section>
            <section className={s.filmeCard}>
              <img src="/path/to/comedia2.jpg" alt="A Noite de Ano Novo" />
              <h2>A Noite de Ano Novo</h2>
            </section>
            <section className={s.filmeCard}>
              <img src="/path/to/comedia3.jpg" alt="Superbad - É Hoje" />
              <h2>Superbad - É Hoje</h2>
            </section>
          </section>
        </section>
      </main>
       
    )
}