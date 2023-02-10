import styled from 'styled-components'

export const CoffeeListContainer = styled.div`

    padding-top: 5rem;
    
    h1 {
        font-family: 'Baloo 2', sans-serif;
        font-size: 2rem;
        margin-bottom: 2.5rem;
    }

    div {

        width: 280px;
        height: 350px;
        background: ${(props) => props.theme['gray-300']};
        border-radius: 0.5rem 2rem;

        img {
            position: relative;
            top: -20px;
            left: calc(50% - 120px/2);
            width: 120px;
            height: 120px;
        }

        div {
            height: 0;
            margin: 10px 0 20px;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            
            gap: 6px;

            span {   
                padding: 8px;         
                border-radius: 8px;

                background: ${(props) => props.theme['yellow-200']} ;
                color: ${(props) => props.theme['yellow-600']};
            
                font-weight: 700;
                font-size: 0.8rem;
            } 
    
        }

        h2 {
            font-family: 'Baloo 2';
            font-weight: 700;
            font-size: 1.4rem;
            
            text-align: center;
    
        }

        p {
            font-size: 0.9rem;
            text-align: center;
            margin: 1rem;
        }
    }

` 