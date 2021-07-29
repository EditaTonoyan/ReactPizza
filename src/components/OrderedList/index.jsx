import { ShoppingCartOutlined, LeftOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { styles } from "../../styles";
import { Button } from "antd";
import { Link } from "react-router-dom";
import piceOfPizza from "../../assets/icons/piceOfPizza.png";
import trash from "../../assets/icons/trash.svg";

const OrderedList = () => {
  const pizzas = useSelector((state) => state.pizzasListState.pizzas);
  const ordered = useSelector((state) => state.pizzasListState.ordered);
  const orderedCount = useSelector((state) => state.pizzasListState.orderedCount);
  const orderedPrcie = useSelector((state) => state.pizzasListState.orderedPrcie);

  const dispatch = useDispatch();

  const changeCount = (e) => {
    dispatch({ type: "CHANGE_COUNT", target: e.target });
  };

  const deletePizza = (e) => {
    dispatch({ type: "DELETE_PIZZA", target: e.target });
  };

  const deleteAll = () => {
    dispatch({ type: "DELETE_ALL" });
  };

  return (
    <div>
      <div>
        <div style={styles.Button}>
          <Link to="/">
            <div>
              <div style={styles.Row1}>
                <img style={styles.PiceOfPizza} src={piceOfPizza} alt="icon" />
                <h1 style={styles.H1}>
                  {" "}
                  <a style={styles.TitleLink} href="/">
                    REACT PIZZA
                  </a>
                </h1>
              </div>
              <h4>
                {" "}
                <a style={styles.H4} href="/">
                  Самая реактивная пицца
                </a>
              </h4>
            </div>
          </Link>
        </div>
        <hr style={styles.Hr} />

        <div style={styles.Content}>
          <div style={styles.OrderedDiv}>
            <ShoppingCartOutlined style={styles.Icon} />
            <p style={styles.Chart}>Корзина</p>
          </div>

          <button onClick={deleteAll} style={styles.OrderedDiv}>
            <img style={styles.IconTrash} src={trash} alt="trashImage" />
            <p style={styles.DeleteText}> Очистить корзину</p>
          </button>
        </div>

        <hr style={styles.HrOrderedList} />
      </div>

      {ordered
        ? Object.keys(ordered).map((key) => {
            if (ordered[key].count) {
              const pizzasKey = pizzas.findIndex((x) => x.id == key);
              return (
                <div key={key} style={styles.Grid}>
                  <div style={styles.OrderedDiv}>
                    <img style={styles.PizzaImage} src={pizzas[pizzasKey].url} alt="pizza" />
                    <p style={styles.PizzaName}> {pizzas[pizzasKey].name}</p>
                  </div>
                  <div style={styles.OrderedInfo}>
                    <button onClick={changeCount} name={key} value="minus" style={styles.Incdec}>
                      -
                    </button>

                    <span style={styles.OrderedCount}>{ordered[key].count}</span>

                    <button onClick={changeCount} name={key} value="plus" style={styles.Incdec}>
                      +
                    </button>
                  </div>

                  <div style={styles.OrderedInfo}>
                    <span style={styles.OrderedCount}> {ordered[key].price + " ₽"}</span>
                  </div>

                  <div style={styles.OrderedInfo}>
                    <button onClick={deletePizza} name={key} style={styles.DeleteButton}>
                      x
                    </button>
                  </div>
                </div>
              );
            }
          })
        : ""}

      <div style={styles.Div}>
        <div>
          Всего пицц: <span style={styles.OrderedCount}>{orderedCount} шт.</span>{" "}
        </div>

        <div>
          Сумма заказа: <span style={styles.OrderedPrice}>{orderedPrcie} ₽</span>{" "}
        </div>
      </div>

      <div style={styles.Div}>
        <Link to="/">
          <Button style={styles.ButtonStyle1} shape="round" size="large">
            <LeftOutlined />
            Вернуться назад
          </Button>
        </Link>

        <Button style={styles.ButtonStyle} shape="round" size="large">
          Оплатить сейчас
        </Button>
      </div>
    </div>
  );
};

export default OrderedList;
