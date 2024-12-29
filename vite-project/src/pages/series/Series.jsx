import s from './series.module.scss'
export default function Series(){

    return(
         <main>
                     <section className={s.filmes}>
              <section className={s.acao}>
                  <h1>series de Ação</h1>
              </section>
              <section className={s.suspence}>
              <h1>series de suspence</h1>
              </section>
              <section className={s.comedia}>
              <h1>series de comedia</h1>
              </section>
              </section>  
              </main>
    )
}