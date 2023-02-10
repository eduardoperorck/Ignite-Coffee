import { Header } from "../components/Header";
import { HomeContainer } from "../styles/pages/Home";
import CoffeeBanner from '../assets/coffee-banner.png'
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { CoffeeList } from "../components/CoffeeList";

export function Home() {
    return (
        <>
            <Header/>

            <HomeContainer>


                <div>
                    <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                    <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>

                    <div>
                        <p><span><ShoppingCart size={16} color="#ffffff" weight="fill" /></span> Compra simples e segura</p>
                        <p><span><Package size={16} color="#ffffff" weight="fill" /></span> Embalagem mantém o café intacto</p>
                        <p><span><Timer size={16} color="#ffffff" weight="fill" /></span> Entrega rápida e rastreada</p>
                        <p><span><Coffee size={16} color="#ffffff" weight="fill" /></span> O café chega fresquinho até você</p>
                    </div>

                </div>

                <img src={CoffeeBanner} alt="" />
            </HomeContainer>

            <CoffeeList/>
        </>

    )
}