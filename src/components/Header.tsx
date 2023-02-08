
import logoCoffeeDelivery from '../assets/logo.svg'
import { ShoppingCart } from 'phosphor-react'
import { HeaderContainer } from '../styles/components/Header'

export function Header() {
    return (
        <HeaderContainer>
            <img src={logoCoffeeDelivery} alt="Logo Coffee Delivery" />

            <nav>
                <a href="#">
                    
                    Porto Alegre
                </a>
                <a href="">
                <ShoppingCart size={32} />
                </a>
            </nav>
        </HeaderContainer>
    )
}