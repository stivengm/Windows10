import { useState } from 'react';
import './item_program.css';
import GoogleChromeIcon from '../../../assets/icons/google-chrome-icon.png';

export function ItemProgram({ infoProgram }) {

    const [className, setClassName] = useState('');

    function clickSelect() {
        setClassName('focusProgram')
        console.log("Se da click al programa");
    }

    function openProgram() {
        console.log("Se abre el programa");
    }

    return (
        <div className={'item_program ' + className} onDoubleClick={openProgram} onClick={clickSelect}>
            <img src={'/src/assets/icons/' + infoProgram.icon1 + '.png'} alt="" className='icon_program' />
            <span className='name_program'>{infoProgram.name}</span>
        </div>
    );
}