import './item_program.css';
import GoogleChromeIcon from '../../../assets/icons/GoogleChrome_icon.dart.png';

export function ItemProgram() {
    return (
        <div className="item_program">
            <img src={GoogleChromeIcon} alt="" className='icon_program' />
            <span className='name_program'>Google Chrome</span>
        </div>
    );
}