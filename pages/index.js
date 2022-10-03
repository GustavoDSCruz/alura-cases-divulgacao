import Head from "../src/components/Head"
import Link from "../src/components/Link"
import styles from "../styles/Home.module.css"

export default function HomePage(){
  return(
  <div className={styles.home}>
        <div className={styles.container}>
          <Head
          title="Alura Cases"
          keywords="Programação"
          description="Sucesso e programação?? É aqui!"
          ></Head>
          <h1>Seja bem vindo a Página home!</h1>
          <Link href="/faq" >Ir para a página do FAQ</Link>
        </div>
  </div>
  )
}