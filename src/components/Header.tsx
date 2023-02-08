
import logoCoffeeDelivery from '../assets/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { HeaderContainer } from '../styles/components/Header'

export function Header() {
    return (
        <HeaderContainer>
            <img src={logoCoffeeDelivery} alt="Coffee Delivery" />

            <nav>
                <a href="#">
                    <MapPin size={24} color='#8047F8' weight="fill"/>
                    Porto Alegre, RS
                </a>
                <a href="">
                    <ShoppingCart size={24} color='#DBAC2C' weight="fill"/>
                </a>
            </nav>
        </HeaderContainer>
    )
}