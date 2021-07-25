// import { ContextApp } from '../contextApp';
// import { useState, useEffect } from 'react';
// import axios from 'axios';

// const ContextAppProvider = (props) => {
//     const [pizzas, setPizzas] = useState({});

//     useEffect(() => {
//         axios
//             .get('https://pizza-dummy.herokuapp.com/pizzas/')
//             .then((res) => {
//                 if (res.error) throw res.error;
//                 setPizzas(res.data);
//             })
//             .catch((error) => {
//                 console.log(error);
//             });
//     }, []);

//     return (
//         <ContextApp.Provider
//             value={{
//                 pizzas: pizzas,
//             }}
//         >
//             {props.children}
//         </ContextApp.Provider>
//     );
// };
// export default ContextAppProvider;
