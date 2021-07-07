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



const Container = styled.div`
width: 280px;
height: 85px;
left: 112px;
top: 690px;
background: #F3F3F3;
border-radius: 10px;
`;

const PizzasList = (props) => {

    const [checked, setChecked] = useState(true);

    const onChange = (e) => {
        setChecked({ checked: false })
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
                            {/* <Par>{img.name}</Par> */}

                        </div>
                        <Container>
                            <div>
                                <label onChange={onChange} className={styles.paragraph}  >
                                    <input name="a" type='checkbox' checked={checked} />
                                    <span>Тонкое</span>
                                </label>
                                <label className={styles.paragraph}>
                                    <input name="a" type="checkbox" />
                                    <span>Традиционное</span>
                                </label>
                            </div>


                            <div>
                                <label className={styles.paragraph} >
                                    <input name="a" type='checkbox' />
                                    <span>26 см.</span>
                                </label>
                                <label className={styles.paragraph}>
                                    <input name="a" type="checkbox" />
                                    <span>30 см.</span>
                                </label>   <label className={styles.paragraph} >
                                    <input name="a" type='checkbox' />
                                    <span>40 см.</span>
                                </label>
                            </div>

                        </Container>


                    </div>

                )
            }) : "page not found"}
        </div>
    )
}



export default PizzasList