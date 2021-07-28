const PiceOfPizza = {
    width: '38px',
    height: '38px',
    left: '64px',
    top: '42px'
}
const Row1 = {
    display: 'flex',
    flexdirection: 'row',
    width:'92%',
    height:'50%',
    flexFlow:'nowrap',
    marginTop:'30px',
    marginLeft:'20px'

}
const PriceAndCount = {
    display:'flex',
    justifyContent:'center',
    border:'0 solid',
    padding:'5px 28px',
    borderRadius:'33px',
    paddingBottom:'10px',
    margin:'29px 31px',
    backgroundColor:'#FE5F1E'
}
const Button = {
    display:'flex',
    justifyContent:'space-between'
}

const VTLine ={
    borderLeft:'2px solid rgba(251, 250, 247, 0.3)',
    height:'25px',
    left:'1247px',
    top:'34px'
}

const H1 = {
    display:'flex',
    width:'166px',
    height:'28px',
    left:'118px',
    top:'29px',
    fontFamily:'Proxima Nova',
    fontStyle:'normal',
    fontWeight:'800',
    fontSize:'24px',
    lineHeight:'26px',
    WebkitLetterSpacing:'0.01em',
    MozLetterSpacing:'0.01em',
    msLetterSpacing:'0.01em',
    letterSpacing:'0.01em',
    textTransform:"uppercase",
    color:'#181818',
}


const H4 = {
    fontSize:'8px',
    MozLetterSpacing:'0.01em',
    msLetterSpacing:'0.01em',
    position:'absolute',
    left:'67px',
    top:'18px',
    lineHeight:'26px',
    letterSpacing:'0.01em',
    textTransform:"uppercase",
    color:'rgb(24, 24, 24)',
    marginTop:'34px',
    fontFamily:'Proxima Nova',
    fontStyle:'normal',
    fontWeight:'5',


}

const Hr = {
    width:'100%',
    borderTop:'1px solid rgba(247, 247, 247, .3)',
    marginTop:'120px'
}

const HrOrderedList = {
    borderTop:'1px solid rgba(247, 247, 247, .3)',
}

const Par = {
    fontFamily:'Proxima Nova',
    fontStyle:'normal',
    fontWeight:'800',
    fontSize:'20px',
    lineHeight:'24px',
    textAlign:'center',
    letterSpacing:'0.01em',
}

const Price = {
    width:'89px',
    height:'27px',
    left:'112px',
    top:'1323px',
    fontFamily:'Proxima Nova',
    fontStyle:'normal',
    fontWeight:'bold',
    fontSize:'22px',
    lineHeight:'27px',
    letterSpacing:'0.015em',
    color:'#000000',

}
const HrUnvisible = {
    color:'red',
    marginTop:'-12px'

}

const Container = {
    height:'85px',
    marginBottom:'12px',
    left:'112px',
    top:'690px',
    background:'#f3f3f3',
    borderRadius:'10px',

}

const AddButton = {
    fontFamily:'Proxima Nova',
    fontStyle:'normal',
    fontWeight:'bold',
    fontSize:'16px',
    lineHeight:'19px',
    width:'132px',
    height:'40px',
    left:'260px',
    top:'1316px',
    background:'#ffffff',
    border:'1px solid #eb5a1e',
    boxSizing:'border-box',
    borderRadius:'30px',
}

const AddButton1 = {
    fontFamily:'Proxima Nova',
    fontStyle:'normal',
    fontWeight:'bold',
    fontSize:'16px',
    lineHeight:'19px',
    width:'132px',
    height:'40px',
    left:'260px',
    top:'1316px',
    background:'#fe5f1e',
    border:'1px solid #eb5a1e',
    boxSizing:'border-box',
    borderRadius:'30px',
}

const Div = {
    display:'flex',
    justifyContent:'space-around',
}

const LinkRigth = {
    marginRight:'7px',
    color:'#fff',
    cursor:'pointer',
}

const LinkLeft = {
    marginTop:'7px',
    color:'#fff',
    cursor:'pointer',

}

const ChartIcon ={
    paddingTop:'3px',
    color:'#fff',
    fontSize:'20px',
}

const Icon = {
    fontSize:'50px',
    marginRight:'20px',
    color: '#3F3F3F',

}

const IconTrash ={
    width:'20px',
    height:'20px',
    marginTop:'20px'
}

const Chart = {
    fontSize:'32px',
    color:'#000000'
}

const DeleteText = {
    fontSize:'16px',
    lineheight:'19px',
    color:'#B6B6B6',
    marginTop:'16px'

}


const OrderedDiv ={
    display:'flex',

}

const Content = {
    display:'flex',
    justifyContent:'space-around',
    marginTop:'140px' ,
}


const PizzaImage ={
    width:'80px',
    height:'80px',
    margin:'10px 0 35px 0'
}

const PizzaName = {
    fontWeight:'bold',
    fontSize:'22px',
    letterSpacing:'0.01em',
    marginTop:'31px',
}

const Grid = {
    display:'grid',
    gridTemplateColumns:'repeat(4, 1fr)',
    marginLeft:'154px',
}

const OrderedInfo = {
    marginTop:'40px'
}

const OrderedCount = {
    fontSize:'18px',
    fontWeight:'bold',
}

const OrderedPrice ={
    fontSize:'18px',
    fontWeight:'bold',
    color:'#FE5F1E',
}

const ButtonStyle = {
    background:'#FE5F1E',
    borderColor:'#FE5F1E',
    color:'#fff',
    marginTop:'20px'
}

const ButtonStyle1={
    color:'#D3D3D3',
    marginTop:'20px'
}

const Incdec = {
    borderColor:'#FE5F1E',
    color:'#FE5F1E',
    marginLeft:'10px',
    marginRight:'10px',
    width:'32px',
    height:'32px',
    borderRadius:'20px'
}

const TitleLink ={
    textDecoration:'none', 
    color:'#000000'
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
    HrUnvisible:HrUnvisible.color,
    ChartIcon:ChartIcon,
    Icon:Icon,
    Chart:Chart,
    OrderedDiv:OrderedDiv,
    Content:Content,
    IconTrash:IconTrash,
    DeleteText:DeleteText,
    HrOrderedList:HrOrderedList,
    PizzaImage:PizzaImage,
    PizzaName:PizzaName,
    Grid:Grid,
    OrderedInfo:OrderedInfo,
    OrderedCount:OrderedCount,
    OrderedPrice:OrderedPrice,
    ButtonStyle:ButtonStyle,
    ButtonStyle1:ButtonStyle1,
    Incdec:Incdec,
    TitleLink:TitleLink
}