import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
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

        footer {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            gap: 1rem;

            span {

                margin-left: 0px;


                b {
                    font-family: 'Baloo 2', sans-serif;
                    font-weight: 800;
                    font-size: 2rem;
                }

            }

            a {

                padding: 12px 10px 8px;         
                border-radius: 8px;

                background: ${(props) => props.theme['purple-600']} ;
                color: ${(props) => props.theme['black-600']};

                font-weight: 700;
                font-size: 0.8rem;

            }           
        }
`