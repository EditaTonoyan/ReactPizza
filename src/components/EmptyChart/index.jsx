import piceOfPizza from "../../assets/icons/piceOfPizza.png";
import emptyImage from "../../assets/icons/empty.svg";
import { styles } from "../../styles";
import { Link } from "react-router-dom";
import { Button } from "antd";

const EmptyChart = (props) => {
  return (
    <div>
      <div style={styles.Button}>
        <Link to="/">
          <div>
            <div style={styles.Row1}>
              <img style={styles.PiceOfPizza} src={piceOfPizza} alt="icon" />
              <h1 style={styles.H1}>
                <a style={styles.TitleLink} href="#">
                  REACT PIZZA
                </a>
              </h1>
            </div>

            <h4>
              <a style={styles.H4} href="#">
                Самая реактивная пицца
              </a>
            </h4>
          </div>
        </Link>
      </div>

      <hr style={styles.Hr} />

      <h1 style={styles.ChartIsEmpty}>Корзина пустая 😕</h1>

      <p style={styles.Text}>
        Вероятней всего, вы не заказывали ещё пиццу. <br />
        Для того, чтобы заказать пиццу, перейди на главную страницу.
      </p>

      <img style={styles.EmptyImage} src={emptyImage} alt="empty" />

      <Link to="/">
        <Button style={styles.GoBack} shape="round" size="large">
          Вернуться назад
        </Button>
      </Link>
    </div>
  );
};

export default EmptyChart;
