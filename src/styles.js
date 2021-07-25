const PiceOfPizza = {
    width: '38px',
    height: '38px',
    left: '64px',
    top: '42px'
}
const Row1 = {
    display: 'flex',
    flexdirection: 'row',
    width: '92%',
    height: '50%',
    flexFlow: 'nowrap',
    marginTop: '30px',
    marginLeft: '20px'

}
const PriceAndCount = {
    border: '0 solid',
    padding: '5px 28px',
    borderRadius: '33px',
    paddingBottom: '10px',
    margin: '29px 31px',
    backgroundColor:'#FE5F1E'
}
const Button = {
    display:'flex',
    justifyContent:'space-between'
}

const VTLine ={
    borderLeft: '2px solid rgba(251, 250, 247, 0.3)',
    height: '25px',
    position:'absolute',
    left: '1247px',
    top:'34px'
}



const H1 = {
    display: 'flex',
    width: '166px',
    height: '28px',
    left: '118px',
    top: '29px',
    fontFamily: 'Proxima Nova',
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: '24px',
    lineHeight: '26px',
    webkitLetterSpacing: '0.01em',
    mozLetterSpacing: '0.01em',
    msLetterSpacing: '0.01em',
    letterSpacing: '0.01em',
    textTransform: "uppercase",
    color: '#181818',
}


const H4 = {
    fontSize: '8px',

    mozLetterSpacing: '0.01em',
    msLetterSpacing: '0.01em',
    position: 'absolute',
    left: '67px',
    top: '18px',
    lineHeight: '26px',
    letterSpacing: '0.01em',
    textTransform: "uppercase",
    color: 'rgb(24, 24, 24)',
    marginTop: '34px',
    fontFamily: 'Proxima Nova',
    fontStyle: 'normal',
    fontWeight: '5',


}

const Hr = {
    width: ' 100 %',
    borderTop: '1px solid rgba(100, 100, 100, 0.8)',
    marginTop: '120px'
}

const Par = {
    fontFamily: 'Proxima Nova',
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: '20px',
    lineHeight: '24px',
    textAlign: 'center',
    letterSpacing: '0.01em',
}



const Price = {
    width: '89px',
    height: '27px',
    left: '112px',
    top: '1323px',
    fontFamily: 'Proxima Nova',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '22px',
    lineHeight: '27px',
    letterSpacing: '0.015em',
    color: '#000000',
    // visibility: 'hidden',

}
const HrUnvisible = {
    color:'red',
    marginTop:'-12px'

}



const Container = {
    // width: 280px;
    height: '85px',
    marginBottom: '12px',
    left: '112px',
    top: '690px',
    background: '#f3f3f3',
    borderRadius: '10px',

}

const AddButton = {
    fontFamily: 'Proxima Nova',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '16px',
    lineHeight: '19px',
    width: '132px',
    height: '40px',
    left: '260px',
    top: '1316px',
    background: '#ffffff',
    border: '1px solid #eb5a1e',
    boxSizing: ' border-box',
    borderRadius: '30px',
}


const AddButton1 = {
    fontFamily: 'Proxima Nova',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '16px',
    lineHeight: '19px',
    width: '132px',
    height: '40px',
    left: '260px',
    top: '1316px',
    background: '#fe5f1e',
    border: '1px solid #eb5a1e',
    boxSizing: ' border-box',
    borderRadius: '30px',
}


const Div = {
    display: 'flex',
    justifyContent: 'space-around',
}

const LinkRigth = {
    marginRight:'8px',
    color:'rgba(251, 250, 247, 0.8)'
}
const LinkLeft = {
    marginLeft:'8px',
    color:'rgba(251, 250, 247, 0.8)'

}


export const styles = {
    PiceOfPizza: PiceOfPizza,
    Hr: Hr,
    H1: H1,
    H4: H4,
    Par: Par,
    Div: Div,
    Price: Price,
    AddButton: AddButton,
    AddButton1: AddButton1,
    Container: Container,
    Row1: Row1,
    Button:Button,
    PriceAndCount:PriceAndCount,
    LinkRigth:LinkRigth,
    LinkLeft:LinkLeft,
    VTLine:VTLine,
    HrUnvisible:HrUnvisible
}