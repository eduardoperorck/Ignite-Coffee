import { ShoppingCart } from "phosphor-react";
import CoffeeTradicional from '../assets/coffee-tradicional.png'
import { CoffeeCardContainer } from '../styles/components/CoffeeCard'

export function CoffeeCard() {
    return (
        <CoffeeCardContainer> 
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
        </CoffeeCardContainer>
    )
}