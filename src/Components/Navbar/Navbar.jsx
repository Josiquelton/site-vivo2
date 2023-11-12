import Vivo from "./vivo.jpeg";
import './Navbar.scss';

function  Navbar ()  {
   

    return (
        
        <nav>
            
            {/* Menu superior */}
            <ul>
                <button className="textOne"><a href="https://www.vivo.com.br/para-voce/app-vivo"><li>Baixe o App Vivo</li></a></button>
                <button className="textDue"><a href="https://www.vivo.com.br/para-voce/produtos-e-servicos"><li>Produtos e serviçõs</li></a></button>
                <button className="textThree"><a href="https://www.vivo.com.br/para-voce/ajuda"><li>Auda</li></a></button>
                <button className="textFour"><a href="https://www.vivo.com.br/para-voce/produtos-e-servicos/melhores-ofertas"><li>Melhores Ofertas</li></a></button>
            </ul>
            
            <img src={Vivo} alt="imagemvivo"/><p>
                <h1>Deixe sua duvida e entraremos em contado!</h1>
            </p>
            {/* formulario de duvidas */}
            <div className="form">
            <form action="https://formspree.io/f/mnqkrvqw"method="POST">
            <label>Nome:</label> 
            <input type="text" required="required" placeholder="completo"/><br/><p/>
            <label>Email:</label> 
            <input type="email" required="required" placeholder="email"/><br/><p/>
            <label>Contato:</label> 
            <input type="text"required="required" placeholder="celular"/><br/><p/>
            <label>Deixe aqui sua duvida!</label><br/><p/> 
            <textarea placeholder="Digite o texto aqui!" required="required"/><br/><p/>
            <button type="submit">Enviar</button><p/>
            </form>
            </div>
            
        </nav>
        
    )
};




export default Navbar;

