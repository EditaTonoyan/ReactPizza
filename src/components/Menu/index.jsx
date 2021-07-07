import styled from 'styled-components';
// import { NavLink } from 'react-router-dom';

// const navlinks = [
//     {
//         to: "/",
//         exact: true,
//         value: "All",
//     },
//     {
//         to: "/meat",
//         exact: true,
//         value: "Мясные"
//     }
// ]
const Menu = () => {

    const Button = styled.button`
        width: 120px;
        height: 50px;
        border-radius: 30px;
        border: 0px;
        margin-left:15px;
    `;

    const Div = styled.div`
        margin-left:250px;
        margin-top:20px;
    `;

    return (
        <Div>

            {/* {
                navlinks.map((navlink, index) => {
                    return (

                        <Button>
                            <NavLink

                                key={index}
                                to={navlink.to}
                                className="main_menu"
                                exact={navlink.exact}
                            >
                                {navlink.value}
                            </NavLink>
                        </Button>
                    )
                })
            } */}


            <Button>Все</Button>
            <Button>Мясные</Button>
            <Button>Вегетарианская</Button>
            <Button>Гриль</Button>
            <Button>Острые</Button>
            <Button>Закрытие</Button>
        </Div>
    )
}
export default Menu