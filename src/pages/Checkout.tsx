import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money, Trash } from "phosphor-react";
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
                            
                            <div>
                                <input type="text" placeholder="CEP" id="cep"/>

                                <input type="text" placeholder="Rua" id="address"/>

                                <div>
                                    <input type="text" placeholder="Número" id="number"/>
                                    <input type="text" placeholder="Complemento" id="complement"/>
                                </div>
                                


                                <div>
                                  <input type="text" placeholder="Bairro" id="neighborhood" />
                                  <input type="text" placeholder="Cidade" id="city"/>
                                  <input type="text" placeholder="UF" id="uf"/>
                                </div>
                                
                            </div>
                                

                        </fieldset>
                    </form>

                    <form>
                        <fieldset>

                            <legend> 
                                <CurrencyDollar size={24} color="#8047F8" />

                                <div>
                                    <span>Pagamento</span>
                                    <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                                </div>
                                
                            </legend>   

                            <div id="box-payments">
                                <button><CreditCard size={16} color="#8047F8" />Cartão de Débito</button>
                                <button><Bank size={16} color="#8047F8" />Cartão de Crédito</button>
                                <button><Money size={16} color="#8047F8" />Dinheiro</button>
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