import Link from "../src/components/Link";
import Styles from "../styles/Faq.module.css"
export default function FAQPage(){
    return(
        <div className={Styles.faq}>
            <div className={Styles.container}>
                <h1>Seja bem vindo a página de perguntas! - FAQ</h1>
                <Link href="/" >Voltar para página home</Link>            
            </div>
        </div>
    )
}