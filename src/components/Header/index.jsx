import { ShoppingCartOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import { styles } from "../../styles";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllPizzas } from "../../store/action";
import { Link } from "react-router-dom";
import { Button, Menu } from "antd";
import piceOfPizza from "../../assets/icons/piceOfPizza.png";
import Menu1 from "../Menu";
import PizzasList from "../PizzasList";
import { UserOutlined } from "@ant-design/icons";
const { SubMenu } = Menu;
const AllPizzas = () => {
  const pizzas = useSelector((state) => state.pizzasListState.pizzas);
  const orderedCount = useSelector((state) => state.pizzasListState.orderedCount);

  const orderedPrcie = useSelector((state) => state.pizzasListState.orderedPrcie);
  const isLoggedIn = useSelector((state) => state.registerState.isLoggedIn);
  const user = useSelector((state) => state.registerState.user);
  const dispatch = useDispatch();

  const logout = () => {
    dispatch({ type: "LOGOUT", successMessage: "kkkk" });
  };
  useEffect(() => {
    dispatch(getAllPizzas());
  }, [dispatch]);

  return (
    <>
      <div>
        {isLoggedIn ? (
          <div style={styles.User}>
            <Menu mode="inline">
              <SubMenu
                title={
                  <span>
                    <UserOutlined />
                    {" " + user.firstName}
                  </span>
                }
              >
                <Menu.ItemGroup key="g1" title={user.email}>
                  <Menu.Item key="1" onClick={logout}>
                    LogOut
                  </Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>
            </Menu>
          </div>
        ) : (
          <div>
            <Link to="/joinus">
              <Button style={styles.SignIn}>Join Us</Button>
            </Link>
            <Link to="/login">
              <Button style={styles.SignIn}>Sign In</Button>
            </Link>
          </div>
        )}
      </div>
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
      <Menu1 />
      <div>
        <PizzasList pizzas={pizzas} />
      </div>
    </>
  );
};

export default AllPizzas;
