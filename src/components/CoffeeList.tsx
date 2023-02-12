
import { CoffeeListContainer } from "../styles/components/CoffeeList";

import { CoffeeCard } from "./CoffeeCard";

export function CoffeeList(){
    return (
        <CoffeeListContainer>
            <h1>Nossos Cafés</h1>

            <main>
                <CoffeeCard/>
                <CoffeeCard/>
                <CoffeeCard/>
                <CoffeeCard/>
                <CoffeeCard/>
                <CoffeeCard/>
                <CoffeeCard/>
                <CoffeeCard/>
            </main>
        </CoffeeListContainer>
    )
}