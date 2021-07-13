import piceOfPizza from '../../assets/icons/piceOfPizza.png';
import { useContext } from 'react';
import { ContextApp } from '../../context/contextApp';
import Menu from '../Menu';
import PizzasList from '../PizzasList';
import { styles } from '../../styles';


const AllPizzas = (props) => {
    const context = useContext(ContextApp)
    const { images } = context;
    return (
        <>
            <div>
                <div style={styles.Row1}>
                    <img style={styles.PiceOfPizza} src={piceOfPizza} alt='icon' />
                    <h1 style={styles.H1}> REACT PIZZA</h1 >
                </div>

                <h4 style={styles.H4}>wde gregnerg ger gerg ergre</h4>

            </div>

            <hr style={styles.Hr} />

            <Menu />
            <div>
                <PizzasList images={images} />
            </div>

        </>
    )
};

export default AllPizzas;