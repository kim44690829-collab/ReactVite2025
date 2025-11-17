import {Link} from 'react-router-dom'

export default function Header(){
    return(
        <div style={{position:'fixed', top:'0', left:'0', display:'flex', justifyContent:'space-between' ,alignItems:'center' ,width:'100%'}}>
            <div>
                <h3>🏬Redux 쇼핑몰</h3>
            </div>
            <div>
                <Link to='/'>
                    <button type="button">Home</button>
                </Link>
                <Link to='/cart'>
                    <button type="button">Cart</button>
                </Link>
                <button type="button">Login</button>
            </div>
        </div>
    )
}