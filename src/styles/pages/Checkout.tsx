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

                input {
                    background: ${(props) => props.theme['gray-400']};
                    border: 2px solid ${(props) => props.theme['gray-500']};

                    padding: 1rem;
                    border-radius: 6px;
                    margin-top: 1rem;

                    &:active, &:focus {
                        border: 2px solid ${(props) => props.theme['yellow-600']};
                    }
                }


                #cep, #address {
                    display: block;
                    width: 100%;
                }           

                div {
                    width: 100%;

                    #number {
                        width: 30%;
                        margin-right: 1%;
                    }

                    #complement {
                        width: 69%;
                    }

                    #neighborhood {
                        width: 39%;
                    }

                    #city {
                        width: 39%;
                        margin: 0 1%;
                    }

                    #uf {
                        width: 20%;
                    }
                }


                #box-payments {

                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 2rem;

                    button {
                        background: ${(props) => props.theme['gray-400']};
                        border: 2px solid ${(props) => props.theme['gray-500']};
                        color: ${(props) => props.theme['black-400']};
                        padding: 1rem;
                        border-radius: 6px;
                        text-transform: uppercase;
                        cursor: pointer;

                        display: flex;
                        justify-content: center;
                        align-items: center;
                        gap: 1rem;

                        &:hover {
                            border: 2px solid ${(props) => props.theme['purple-400']};
                        }

                        &:checked, &:active {
                            background: ${(props) => props.theme['purple-200']};
                            border: 2px solid ${(props) => props.theme['purple-400']};
                        }
                    }
                }



                
            }
        }

        


    }
    
`