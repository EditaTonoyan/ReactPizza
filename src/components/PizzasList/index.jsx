import { styles } from '../../styles';
import { useDispatch, useSelector } from 'react-redux';
import style from './list.module.css';

const sizes = {
    smallPrice: '26 см.',
    middlePrice: '30 см.',
    bigPrice: '40 см.',
};

const PizzasList = (props) => {
    const pizzas = props.pizzas;
    const state = useSelector((state) => state);
    const ordered = useSelector((state) => state.pizzasListState.ordered);
    const error = state.pizzasListState.error;

    const dispatch = useDispatch();

    const addToChart = (e) => {
        dispatch({ type: 'ADD_TO_CHART', target: e.target });
    };

    const onChange = (e) => {
        dispatch({ type: 'ON_CHANGE', target: e.target });
    };

    return (
        <div className={style.gallery} id='gallery'>
            {pizzas
                ? pizzas.map((pizza) => {
                      return (
                          <div key={pizza.id} className={style.gallery_item}>
                              <div>
                                  <img className={style.content} src={pizza.url} alt={pizza.name} />

                                  <p style={styles.Par}>{pizza.name}</p>
                              </div>

                              <div style={styles.Container}>
                                  <div>
                                      <label className={style.paragraph}>
                                          <input name={`slim_${pizza.id}`} type='radio' value='1' />
                                          <span>Тонкое</span>
                                      </label>
                                      <label className={style.paragraph}>
                                          <input name={`slim_${pizza.id}`} type='radio' value='2' />
                                          <span>Традиционное</span>
                                      </label>
                                  </div>

                                  <div>
                                      {Object.keys(sizes).map((size, index) => {
                                          return (
                                              <label key={index} className={style.paragraph}>
                                                  <input onClick={onChange} name={pizza.id} type='radio' value={pizza[size]} />
                                                  <span>{sizes[size]}</span>
                                              </label>
                                          );
                                      })}
                                      {error.hasOwnProperty(pizza.id) ? <hr style={styles.HrUnvisible} /> : ' '}
                                  </div>
                              </div>
                              <div style={styles.Div}>
                                  <div style={styles.Price}>
                                      {ordered.hasOwnProperty(pizza.id) ? 'от ' + ordered[pizza.id].price + ' ₽' : ''}
                                  </div>
                                  {ordered[pizza.id] ? (
                                      ordered[pizza.id].count === 1 ? (
                                          <button
                                              onClick={addToChart}
                                              style={styles.AddButton1}
                                              name={`count_${pizza.id}`}
                                              value='1'
                                              id={pizza.id}
                                          >
                                              +Добавит
                                          </button>
                                      ) : ordered[pizza.id].count > 1 ? (
                                          <button
                                              onClick={addToChart}
                                              style={styles.AddButton}
                                              name={`count_${pizza.id}`}
                                              value='1'
                                              id={pizza.id}
                                          >
                                              +Добавит {ordered[pizza.id].count}
                                          </button>
                                      ) : (
                                          <button
                                              onClick={addToChart}
                                              style={styles.AddButton}
                                              name={`count_${pizza.id}`}
                                              value='1'
                                              id={pizza.id}
                                          >
                                              +Добавит
                                          </button>
                                      )
                                  ) : (
                                      <button
                                          onClick={addToChart}
                                          style={styles.AddButton}
                                          name={`count_${pizza.id}`}
                                          value='1'
                                          id={pizza.id}
                                      >
                                          +Добавит
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

export default PizzasList;
