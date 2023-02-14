import styled from 'styled-components'

export const CheckoutContainer = styled.div`
    
    main {
        display: grid;
        grid-template-columns: 3fr 2fr;

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
                    gap: 1rem;

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

        section {
            ul {
                display: flex;
                flex-direction: column;
                background: ${(props) => props.theme['gray-300']};
                margin: 1rem 1rem 0 0;
                padding: 1rem 1rem;
                border-radius: 8px 32px;

                li {
                    display: flex;
                    justify-content: flex-start;
                    align-items: flex-start;
                    gap: 1rem;

                    margin-bottom: 1rem;

                    list-style: none;
                    padding: 2rem 1rem;
                    border-bottom: 1px solid ${(props) => props.theme['gray-500']};

                    img {
                        width: 4.5rem;
                    }

                    div {
                        h3 {
                            display: block;
                            font-size: 1rem;
                            font-weight: 400;
                        }

                        div {
                            display: flex;
                            gap: 1rem;


                            a {
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                padding: 0.5rem 0.5rem;
                                gap: 0.5rem;

                                
                                background: ${(props) => props.theme['gray-500']};
                                font-size: 0.8rem;
                                color: ${(props) => props.theme['black-400']};

                                text-transform: uppercase;

                                margin-top: 0.8rem;
                                border-radius: 8px;
                            }
                        }

                    }



                    span {
                            font-weight: 700;
                            color: ${(props) => props.theme['black-400']};
                            font-size: 1.05rem;
                        }

                }

                div {
                    

                    div {
                        display: flex;
                        justify-content: space-between;

                        > span {
                            font-size: 0.9rem;
                            margin: 0.7rem;
                        }

                        span + span {
                            font-weight: 400;
                            color: ${(props) => props.theme['black-300']};
                            font-size: 1.05rem;
                        }
                    }

                    #total {
                        span {
                            color: ${(props) => props.theme['black-600']};
                            font-weight: 700;
                            font-size: 1.3rem;
                        }
                    }

                    button {
                        background: ${(props) => props.theme['yellow-400']};
                        border: 2px solid ${(props) => props.theme['yellow-600']};
                        color: ${(props) => props.theme['white']};
                        font-weight: 700;
                        text-transform: uppercase;

                        width: 24rem;
                        height: 3.3rem;
                        border-radius: 8px;
                        margin: 1rem;
                    }

                }
            }
        }
        


    }
    
`