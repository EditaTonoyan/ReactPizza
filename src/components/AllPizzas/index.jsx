import piceOfPizza from '../../assets/icons/piceOfPizza.png';
import { useContext } from 'react';
import { ContextApp } from '../../context/contextApp';
import Menu from '../Menu';
import PizzasList from '../PizzasList';
import { styles } from '../../styles';


const AllPizzas = (props) => {
    const context = useContext(ContextApp)
    const { pizzas } = context;
    return (
        <>
        <div style={styles.Button}>
        <div>
                <div style={styles.Row1}>
                    <img style={styles.PiceOfPizza} src={piceOfPizza} alt='icon' />
                    <h1 style={styles.H1}> REACT PIZZA</h1 >
                </div>
                <h4 style={styles.H4}>wde gregnerg ger gerg ergre</h4>

            </div>
            <div style={styles.PriceAndCount}>
                     <a style={styles.LinkRigth} href="#">price</a>
               <div style={styles.VTLine}></div>
                     <a  style={styles.LinkLeft}  href="#">count</a>
            </div>
          
        </div>
            

            <hr style={styles.Hr} />

            <Menu />
            <div>
                <PizzasList pizzas={pizzas} />
            </div>

        </>
    )
};

export default AllPizzas;