import piceOfPizza from '../../assets/icons/piceOfPizza.png';
import styled from 'styled-components';
import { useContext } from 'react';
import { ContextApp } from '../../context/contextApp';
import Menu from '../Menu';
import PizzasList from '../PizzasList'

const Img = styled.img`
    position: absolute;
    width: 38px;
    height: 38px;
   left: 64px;
    top: 42px;
`;

const H1 = styled.h1`
    position: absolute;
    width: 166px;
    height: 28px;
    left: 118px;
    top: 29px;
    font-family: Proxima Nova;
    font-style: normal;
    font-weight: 800;
    font-size: 24px;
    line-height: 26px;
    -webkit-letter-spacing: 0.01em;
    -moz-letter-spacing: 0.01em;
    -ms-letter-spacing: 0.01em;
    letter-spacing: 0.01em;
    text-transform: uppercase;
    color: #181818;
`;

const H4 = styled(H1)`
    margin-top: 41px;
    font-style: normal;
    font-weight: 5;
    font-size: 8px;
`;

const Hr = styled.hr`
    border-top: 1px solid rgba(100, 100, 100, 0.8);
    margin-top: 120px;
`;

const AllPizzas = (props) => {

    const context = useContext(ContextApp)
    const { images } = context;
    return (
        <>
            <div>
                <Img src={piceOfPizza} alt='icon' />
                <H1> REACT PIZZA</H1 >
                <H4>wde gregnerg ger gerg ergre</H4>

            </div>
            <Hr />

            <Menu />
            <div>
                <PizzasList images={images} />

            </div>

        </>
    )
}

export default AllPizzas