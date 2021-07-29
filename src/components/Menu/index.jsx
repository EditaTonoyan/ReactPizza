import { styles } from "../../styles";

const Menu = () => {
  return (
    <div style={styles.Menu}>
      <button style={styles.MenuButton}>Все</button>
      <button style={styles.MenuButton}>Мясные</button>
      <button style={styles.MenuButton}>Вегетарианская</button>
      <button style={styles.MenuButton}>Гриль</button>
      <button style={styles.MenuButton}>Острые</button>
      <button style={styles.MenuButton}>Закрытие</button>
    </div>
  );
};

export default Menu;
