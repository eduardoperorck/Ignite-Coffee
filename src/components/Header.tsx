
import logoCoffeeDelivery from '../assets/logo.svg'
import { HeaderContainer } from '../styles/Header'

export function Header() {
    return (
        <HeaderContainer>
            <img src={logoCoffeeDelivery} alt="Logo Coffee Delivery" />

            <nav>
                <a href="#">Porto Alegre</a>
                <a href="">Cart</a>
            </nav>
        </HeaderContainer>
    )
}