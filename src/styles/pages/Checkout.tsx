import styled from 'styled-components'

export const CheckoutContainer = styled.div`
    
    main {
        display: grid;
        grid-template-columns: 2fr 1fr;

        h1 {
            font-family: 'Baloo 2', sans-serif;
            font-weight: 800;
            font-size: 1.1rem;
            margin-top: 1rem;
        }

        form {
            display: flex;
            flex-direction: column;
            background: ${(props) => props.theme['gray-300']};
            margin: 1rem 1rem 0 0;
            padding: 2rem 1rem;
            border-radius: 8px;

            fieldset {
                padding: 2rem;
                
                border: 0vmax;
                border-radius: 8px;

                legend {
                    display: flex;
                    color: ${(props) => props.theme['black-400']};
                    gap: 1rem;
                    font-size: 1rem;

                    p {
                        font-size: 0.9rem;
                    }

                }
            }
        }

        


    }
    
`