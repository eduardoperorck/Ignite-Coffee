import { CurrencyDollar, MapPinLine, Trash } from "phosphor-react";
import { Header } from "../components/Header";
import { CheckoutContainer } from "../styles/pages/Checkout";
import CoffeeTradicional from '../assets/coffee-tradicional.png'

export function Checkout () {
    return (
        <CheckoutContainer>
            <Header/>

            <main>

                <div>
                    <h1>Complete seu pedido</h1>

                    <form>

                        <fieldset>
                            <legend> 
                                <MapPinLine size={24} color="#C47F17" />

                                <div>
                                    <span>Endereço de Entrega</span>
                                    <p>Informe o endreço onde deseja receber seu pedido</p>
                                </div>
                                
                            </legend>   
                            
                            <input type="text" placeholder="CEP"/>
                            <input type="text" placeholder="Rua"/>

                            <input type="text" placeholder="Número"/>
                            <input type="text" placeholder="Complemento"/>

                            <input type="text" placeholder="Bairro"/>
                            <input type="text" placeholder="Cidade"/>
                            <input type="text" placeholder="UF"/>
                        </fieldset>
                    </form>

                    <form>
                        <fieldset>
                            <legend><CurrencyDollar size={24} color="#8047F8" />Pagamento</legend>   
                            <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>

                            <div>
                                <a href="#">Cartão de Débito</a>
                                <a href="#">Cartão de Crédito</a>
                                <a href="#">Dinheiro</a>
                            </div>
                        </fieldset>
                    </form>

                </div>

                <div>
                    <h1>Cafés selecionados</h1>

                    <ul>
                        <li>
                            <img src={CoffeeTradicional} alt="" />

                            <span>Expresso Tradicional</span>
                            <a href="#"><Trash size={32} color="#8047F8" />Remover</a>

                            <span>R$ 9,90</span>
                        </li>

                        <li>
                            <img src={CoffeeTradicional} alt="" />

                            <span>Expresso Tradicional</span>
                            <a href="#"><Trash size={24} color="#8047F8" />Remover</a>

                            <span>R$ 9,90</span>
                        </li>
                    </ul>

                    <div>
                        <div>
                            <span>Total de itens</span>
                            <span>R$ 29,70</span>
                        </div>

                        <div>
                            <span>Entrega</span>
                            <span>R$ 3,50</span>
                        </div>

                        <div>
                            <span>Total</span>
                            <span>R$ 33,20</span>
                        </div>

                        <button>Confirmar Pedido</button>
                    </div>
                </div>

            </main>

        </CheckoutContainer>
    )
}