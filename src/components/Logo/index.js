import logo from "../../img/logo.svg"
import './style.css'

function Logo () {
    return (
        <div className='logo'>
            <img 
            src={logo} 
            alt='Alfala logo' 
            className='logo-img'
            />
            <p><strong>Alfala</strong> Boooks</p>
        </div>
    )
};

export default Logo;
