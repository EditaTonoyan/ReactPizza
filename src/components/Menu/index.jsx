import styled from 'styled-components';

const Menu = () => {
    const Button = styled.button`
        width: 120px;
        height: 50px;
        border-radius: 30px;
        border: 0px;
        margin-left: 15px;
    `;

    const Div = styled.div`
        margin-left: 250px;
        margin-top: 20px;
    `;

    return (
        <Div>

            <Button>Все</Button>
            <Button>Мясные</Button>
            <Button>Вегетарианская</Button>
            <Button>Гриль</Button>
            <Button>Острые</Button>
            <Button>Закрытие</Button>
        </Div>
    );
};
export default Menu;
