import { useEffect } from "react";
import { ShoppingCartOutlined, LeftOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { styles } from "../../styles";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { faCheck, faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import piceOfPizza from "../../assets/icons/piceOfPizza.png";
import trash from "../../assets/icons/trash.svg";
import EmptyChart from "../EmptyChart";
import { order } from "../../store/action";
import { useHistory } from "react-router-dom";

const OrderedList = () => {
  const history = useHistory();
  const pizzas = useSelector((state) => state.pizzasListState.pizzas);
  const ordered = useSelector((state) => state.pizzasListState.ordered);
  const orderedCount = useSelector((state) => state.pizzasListState.orderedCount);
  const orderedPrcie = useSelector((state) => state.pizzasListState.orderedPrcie);
  const successMessage = useSelector((state) => state.registerState.successMessage);
  const errorMessage = useSelector((state) => state.registerState.errorMessage);

  const dispatch = useDispatch();

  let orderPizzas = [];
  pizzas.map((pizza) => {
    if (ordered[pizza.id]) {
      orderPizzas = [
        {
          id: pizza.id,
          count: ordered[pizza.id].count,
        },
      ];
    }
    return orderPizzas;
  });

  const peyNow = () => {
    dispatch(order(orderPizzas, history));
  };

  const changeCount = (e) => {
    dispatch({ type: "CHANGE_COUNT", target: e.target });
  };

  const deletePizza = (e) => {
    dispatch({ type: "DELETE_PIZZA", target: e.target });
  };

  const deleteAll = () => {
    dispatch({ type: "DELETE_ALL" });
  };

  useEffect(() => {
    if (successMessage !== "") {
      setTimeout(() => {
        dispatch({ type: "DELETE_ALL" });
        dispatch({ type: "RESET_DATA" });
        history.push("/");
      }, 3000);
    }
  }, [dispatch, history, successMessage]);

  const success = successMessage;
  const error = errorMessage;

  return (
    <div>
      {!orderedPrcie && <EmptyChart />}

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
                <a style={styles.H4} href="/">
                  ?????????? ???????????????????? ??????????
                </a>
              </h4>
            </div>
          </Link>
        </div>
        <hr style={styles.Hr} />

        <div style={styles.Content}>
          <div style={styles.OrderedDiv}>
            <ShoppingCartOutlined style={styles.Icon} />
            <p style={styles.Chart}>??????????????</p>
          </div>

          <button onClick={deleteAll} style={styles.OrderedDiv}>
            <img style={styles.IconTrash} src={trash} alt="trashImage" />
            <p style={styles.DeleteText}> ???????????????? ??????????????</p>
          </button>
        </div>

        <hr style={styles.HrOrderedList} />

        {errorMessage && (
          <div style={styles.ErrorMessage}>
            <span>
              <FontAwesomeIcon style={styles.Check} icon={faWindowClose} />
            </span>
            <span style={styles.Span}>{error}</span>
          </div>
        )}
        {successMessage && (
          <div style={styles.SuccessMessage}>
            <span>
              <FontAwesomeIcon style={styles.Check} icon={faCheck} />
            </span>
            <span style={styles.Span}>{success}</span>
          </div>
        )}
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
                    <span style={styles.OrderedCount}> {ordered[key].price + " ???"}</span>
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
          ?????????? ????????: <span style={styles.OrderedCount}>{orderedCount} ????.</span>{" "}
        </div>

        <div>
          ?????????? ????????????: <span style={styles.OrderedPrice}>{orderedPrcie} ???</span>{" "}
        </div>
      </div>

      <div style={styles.Div}>
        <Link to="/">
          <Button style={styles.ButtonStyle1} shape="round" size="large">
            <LeftOutlined />
            ?????????????????? ??????????
          </Button>
        </Link>

        <Button onClick={peyNow} style={styles.ButtonStyle} shape="round" size="large">
          ???????????????? ????????????
        </Button>
      </div>
    </div>
  );
};

export default OrderedList;
