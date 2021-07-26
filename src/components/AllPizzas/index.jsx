import {ShoppingCartOutlined} from '@ant-design/icons';
import piceOfPizza from '../../assets/icons/piceOfPizza.png';
import Menu from '../Menu';
import PizzasList from '../PizzasList';
import { styles } from '../../styles';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {getAllPizzas} from '../../store/action';


const AllPizzas = (props) => {
    const state = useSelector((state)=>state);
    const pizzas = state.pizzasListState.pizzas
    const orderedCount = state.pizzasListState.orderedCount;
    const orderedPrcie = state.pizzasListState.orderedPrcie;
    
    const dispatch = useDispatch();

    useEffect (()=>{
       dispatch(getAllPizzas()) 

    },[dispatch])


    
    return (
        <>
        <div style={styles.Button}>
        <div>
                <div style={styles.Row1}>
                    <img style={styles.PiceOfPizza} src={piceOfPizza} alt='icon' />
                    <h1 style={styles.H1}> REACT PIZZA</h1 >
                </div>
                <h4 style={styles.H4}>sСамая реактивная пицца</h4>

            </div>
            
            <div style={styles.PriceAndCount}>

                <div  >
                    <a style={styles.LinkLeft} href="http://localhost:3000/ordered">
                         {
                            (orderedPrcie !== 0)?
                            (
                               orderedPrcie + ' ₽ |'  
                                
                                    ) :  ""
                                 

                         }

                          
                    </a>
                </div>
                
              
                <div>
                        <a href="http://localhost:3000/ordered">< ShoppingCartOutlined style = {styles.ChartIcon}/></a>   
                 </div>
                <div>
                        
                                
                        <a   style={styles.LinkLeft}  href="http://localhost:3000/ordered">
                            {
                            (orderedCount !== 0)?
                            
                                (orderedCount) :  ""
                            }
                    </a>
                </div>
                        
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