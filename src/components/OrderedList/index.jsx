import {  useSelector } from 'react-redux';
import { styles } from '../../styles';
import piceOfPizza from '../../assets/icons/piceOfPizza.png';
import trash from '../../assets/icons/trash.svg';
import {ShoppingCartOutlined} from '@ant-design/icons';



const OrderedList = (props) => {
    const state = useSelector(state => state);
    
    console.log(state);

    return(
        <div>
            <div style={styles.Button}>
                <div>
                    <div style={styles.Row1}>
                        <img style={styles.PiceOfPizza} src={piceOfPizza} alt='icon' />
                        <h1 style={styles.H1}> REACT PIZZA</h1 >
                    </div>
                <h4 style={styles.H4}>Самая реактивная пицца</h4>
                </div>
            </div>

            <div style={styles.Content}>
                <div style={styles.OrderedDiv}>
                    <ShoppingCartOutlined style={styles.Icon}/>
                    <p style={styles.Chart}>Корзина</p>
                </div>

                <div  style={styles.OrderedDiv}>
                    <img style={styles.IconTrash} src={trash} alt="trashImage" />
                    <p style={styles.DeleteText}> Очистить корзину</p>
                </div>
            </div>
            
            
        </div>
    )
}

export default OrderedList