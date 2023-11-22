import './item_program.css';
import GoogleChromeIcon from '../../../assets/icons/google-chrome-icon.png';

export function ItemProgram({ infoProgram }) {

    return (
        <div className="item_program">
            <img src={'/src/assets/icons/' + infoProgram.icon1 + '.png'} alt="" className='icon_program' />
            <span className='name_program'>{infoProgram.name}</span>
        </div>
    );
}