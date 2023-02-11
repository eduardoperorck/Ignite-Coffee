import { ShoppingCart } from "phosphor-react";
import { CoffeeListContainer } from "../styles/components/CoffeeList";
import CoffeeTradicional from '../assets/coffee-tradicional.png'

export function CoffeeList(){
    return (
        <CoffeeListContainer>
            <h1>Nossos Cafés</h1>

            <div>
                <img src={CoffeeTradicional} alt="" />

                <div>
                    <span>TRADICIONAL</span>  
                    <span>PURO</span>  
                    <span>CREMOSO</span>  
                      
                </div>

                <h2>Expresso Tradicional</h2>

                <p>O tradicional café feito com água quente e grãos moídos</p>

                <footer>
                    
                    <span>R$ <b>9,90</b></span>
                    

                    <a href="#"><ShoppingCart size={20} color="#ffffff" weight="fill"/></a>
                </footer>                
            </div>
        </CoffeeListContainer>
    )
}