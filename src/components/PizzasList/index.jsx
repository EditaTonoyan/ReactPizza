import styles from './list.module.css';
import styled from 'styled-components';
import { connect } from 'react-redux';

const Par = styled.p`
    font-family: Proxima Nova;
    font-style: normal;
    font-weight: 800;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    letter-spacing: 0.01em;
`;

const Price = styled.div`
    width: 89px;
    height: 27px;
    left: 112px;
    top: 1323px;

    font-family: Proxima Nova;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 27px;
    letter-spacing: 0.015em;

    color: #000000;
`;

const Container = styled.div`
    // width: 280px;
    height: 85px;
    margin-bottom: 12px;
    left: 112px;
    top: 690px;
    background: #f3f3f3;
    border-radius: 10px;
`;
const AddButton = styled.button`
    width: 118px;
    height: 5px;
    left: 274px;
    top: 803px;

    font-family: Proxima Nova;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    width: 132px;
    height: 40px;
    left: 260px;
    top: 1316px;
    background: #ffffff;
    border: 1px solid #eb5a1e;
    box-sizing: border-box;
    border-radius: 30px;
`;
const AddButton1 = styled(AddButton)`
    width: 132px;
    height: 40px;
    left: 260px;
    top: 1316px;
    background: #fe5f1e;
    border: 1px solid #eb5a1e;
    box-sizing: border-box;
    border-radius: 30px;
`;

const Div = styled.div`
    display: flex;
    justify-content: space-around;
`;

const PizzasList = (props) => {
    const { addToChart, onChange, count } = props;
    console.log(count);

    return (
        <div className={styles.gallery} id='gallery'>
            {props.images.length
                ? props.images.map((img) => {
                      return (
                          <div key={img.id} className={styles.gallery_item}>
                              <div>
                                  <img className={styles.content} src={img.url} alt={img.name} />
                                  <Par>{img.name}</Par>
                              </div>
                              <Container>
                                  <div
                                      onChange={(e) => {
                                          onChange(e.target);
                                      }}
                                  >
                                      <label className={styles.paragraph}>
                                          <input name={`slim_${img.id}`} type='radio' value='1' />
                                          <span>Тонкое</span>
                                      </label>
                                      <label className={styles.paragraph}>
                                          <input name={`slim_${img.id}`} type='radio' value='2' />
                                          <span>Традиционное</span>
                                      </label>
                                  </div>

                                  <div
                                      onChange={(e) => {
                                          onChange(e.target);
                                      }}
                                  >
                                      <label className={styles.paragraph}>
                                          <input name={`size_${img.id}`} type='radio' value='3' />
                                          <span>26 см.</span>
                                      </label>
                                      <label className={styles.paragraph}>
                                          <input name={`size_${img.id}`} type='radio' value='4' />
                                          <span>30 см.</span>
                                      </label>
                                      <label className={styles.paragraph}>
                                          <input name={`size_${img.id}`} type='radio' value='5' />
                                          <span>40 см.</span>
                                      </label>
                                  </div>
                              </Container>
                              <Div onClick={(e) => addToChart(e.target)}>
                                  <Price>{'от ' + img.smallPrice + ' ₽'}</Price>

                                  {!count.hasOwnProperty(img.id) ? (
                                      <AddButton name={`count_${img.id}`} value='add'>
                                          +Добавит
                                      </AddButton>
                                  ) : count[img.id] === 1 ? (
                                      <AddButton1 name={`count_${img.id}`} value='add'>
                                          +Добавит
                                      </AddButton1>
                                  ) : (
                                      <AddButton name={`count_${img.id}`} value='add'>
                                          +Добавит {count + '-' + [img.id]}
                                      </AddButton>
                                  )}
                              </Div>
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
