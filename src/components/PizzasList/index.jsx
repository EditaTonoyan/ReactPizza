import style from './list.module.css';
import { styles } from '../../styles';
import { connect } from 'react-redux';
// import FilterPizzas from '../FilterPizzas';


const PizzasList = (props) => {
    const { addToChart, onChange, count} = props;

     console.log(count,'index');

    return (
        <div className={style.gallery} id='gallery'>
            {props.pizzas.length
                ? props.pizzas.map((pizza) => {
                    return (
                        <div key={pizza.id} className={style.gallery_item}>
                            <div>
                                <img className={style.content} src={pizza.url} alt={pizza.name} />
                                <p style={styles.Par}>{pizza.name}</p>
                            </div>
                            <div style={styles.Container}>
                                <div
                                    onChange={(e) => {
                                        onChange(e.target);
                                    }}
                                >
                                    <label className={style.paragraph}>
                                        <input name={`slim_${pizza.id}`} type='radio' value='1' />
                                        <span>Тонкое</span>
                                    </label>
                                    <label className={style.paragraph}>
                                        <input name={`slim_${pizza.id}`} type='radio' value='2' />
                                        <span>Традиционное</span>
                                    </label>
                                </div>

                                <div
                                    onChange={(e) => {
                                        onChange(e.target);
                                    }}
                                >
                                    <label className={style.paragraph}>
                                        <input name={`size_${pizza.id}`} type='radio' value='3' />
                                        <span>26 см.</span>
                                    </label>
                                    <label className={style.paragraph}>
                                        <input name={`size_${pizza.id}`} type='radio' value='4' />
                                        <span>30 см.</span>
                                    </label>
                                    <label className={style.paragraph}>
                                        <input name={`size_${pizza.id}`} type='radio' value='5' />
                                        <span>40 см.</span>
                                    </label>
                                </div>
                            </div>
                            <div style={styles.Div} onClick={(e) => addToChart(e.target)}>
                                <div style={styles.Price}>{'от ' + pizza.smallPrice + ' ₽'}</div>

                                {!count.hasOwnProperty(pizza.id) ? (
                                    <button style={styles.AddButton} name={`count_${pizza.id}`} value='add'>
                                        +Добавит
                                    </button>
                                ) : count[pizza.id] === 1 ? (
                                    <button style={styles.AddButton1} name={`count_${pizza.id}`} value='add'>
                                        +Добавит
                                    </button>
                                ) : (
                                    <button style={styles.AddButton} name={`count_${pizza.id}`} value='add'>
                                        +Добавит {count + '-' + [pizza.id]}
                                    </button>
                                )}
                            </div>
                        </div>
                    );
                })
                : 'page not found'}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        slim: state.pizzasListState.slim,
        size: state.pizzasListState.size,
        count: state.pizzasListState.count,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addToChart: (target) => {
            dispatch({ type: 'ADD_TO_CHART', target });
        },
        onChange: (target) => {
            dispatch({ type: 'ON_CHANGE', target });
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PizzasList);
