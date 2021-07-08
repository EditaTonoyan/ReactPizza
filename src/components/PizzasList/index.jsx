import styles from './list.module.css';
import styled from 'styled-components';
import { useState } from 'react';

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
/* identical to box height */

letter-spacing: 0.015em;

color: #000000;
`;

const Container = styled.div`
// width: 280px;
height: 85px;
margin-bottom: 12px;
left: 112px;
top: 690px;
background: #F3F3F3;
border-radius: 10px;
`;
const Add = styled.button`
width: 132px;
height: 40px;
left: 260px;
top: 1316px;
background: #FFFFFF;
border: 1px solid #EB5A1E;
box-sizing: border-box;
border-radius: 30px;
`;

const Div = styled.div`
display: flex; 
justify-content: space-around;
`;

const Text = styled.span`
width: 77px;
height: 15px;
left: 297px;
top: 1327px;
font-family: Proxima Nova;
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 19px;
color: #EB5A1E;
`;
const PizzasList = (props) => {

    console.log(props.images);
    const [slim, setSlim] = useState({});
    const [size, setSize] = useState({});

    const onChange = (e) => {
        const id = e.target.name.includes('slim_') ?
            e.target.name.replace('slim_', ' ') :
            e.target.name.replace('size_', ' ');
        slim[id] = e.target.value;
        size[id] = e.target.value;
    }

    return (
        <div className={styles.gallery} id="gallery">
            {props.images.length ? props.images.map((img) => {

                return (
                    <div key={img.id} className={styles.gallery_item}>
                        <div>
                            <img
                                className={styles.content}
                                src={img.url}
                                alt={img.name}
                            />
                            <Par>{img.name}</Par>

                        </div>
                        <Container>
                            <div>
                                <label onChange={onChange} className={styles.paragraph}  >
                                    <input
                                        name={`slim_${img.id}`}
                                        type='radio'
                                        value="1"
                                        onChange={onChange}
                                    />
                                    <span>Тонкое</span>

                                </label>
                                <label className={styles.paragraph}>
                                    <input
                                        name={`slim_${img.id}`}
                                        type='radio'
                                        value="2"
                                        onChange={onChange}
                                    />
                                    <span>Традиционное</span>
                                </label>
                            </div>


                            <div>
                                <label className={styles.paragraph} >
                                    <input
                                        name={`size_${img.id}`}
                                        type='radio'
                                        value="3"
                                        onChange={onChange}
                                    />
                                    <span>26 см.</span>
                                </label>
                                <label className={styles.paragraph}>
                                    <input
                                        name={`size_${img.id}`}
                                        type="radio"
                                        value="4"
                                        onChange={onChange}
                                    />
                                    <span>30 см.</span>
                                </label>   <label className={styles.paragraph} >
                                    <input
                                        name={`size_${img.id}`}
                                        type='radio'
                                        value='5'
                                        onChange={onChange}
                                    />
                                    <span>40 см.</span>
                                </label>
                            </div>
                        </Container>
                        <Div >
                            <Price>
                                {'от ' + img.smallPrice + ' ₽'}
                            </Price>

                            <Add>
                                <Text>+Добавит</Text>
                            </Add>
                        </Div>


                    </div>

                )
            }) : "page not found"}
        </div>
    )
}



export default PizzasList