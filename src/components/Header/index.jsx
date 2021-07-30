import { ShoppingCartOutlined } from "@ant-design/icons";
import { styles } from "../../styles";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllPizzas } from "../../store/action";
import { Link } from "react-router-dom";
import piceOfPizza from "../../assets/icons/piceOfPizza.png";
import Menu from "../Menu";
import PizzasList from "../PizzasList";

const AllPizzas = () => {
  const pizzas = useSelector((state) => state.pizzasListState.pizzas);
  const orderedCount = useSelector((state) => state.pizzasListState.orderedCount);
  const orderedPrcie = useSelector((state) => state.pizzasListState.orderedPrcie);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPizzas());
  }, [dispatch]);

  return (
    <>
      <div style={styles.Button}>
        <div>
          <div style={styles.Row1}>
            <div>
              <img style={styles.PiceOfPizza} src={piceOfPizza} alt="icon" />
            </div>
            <div>
              <h1 style={styles.H1}> REACT PIZZA</h1>
            </div>
          </div>
          <h4 style={styles.H4}>Самая реактивная пицца</h4>
        </div>
        <Link to="/chart">
          <div style={styles.PriceAndCount}>
            <div>
              <button style={styles.LinkLeft}>
                {orderedPrcie !== 0 ? orderedPrcie + " ₽ |" : ""}
              </button>
            </div>

            <div style={styles.Flex}>
              <div>
                <button style={styles.LinkRigth}>
                  <ShoppingCartOutlined style={styles.ChartIcon} />
                </button>
              </div>
              <div>
                <button style={styles.LinkLeft}>{orderedCount !== 0 ? orderedCount : ""}</button>
              </div>
            </div>
          </div>
        </Link>
      </div>

      <hr style={styles.Hr} />

      <Menu />
      <div>
        <PizzasList pizzas={pizzas} />
      </div>
    </>
  );
};

export default AllPizzas;
