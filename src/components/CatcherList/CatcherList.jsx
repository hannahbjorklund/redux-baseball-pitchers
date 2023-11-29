import {useState} from 'react';
import {useSelector} from 'react-redux';

export default function CatcherList(){
    const [currentCatcher, setCurrentCatcher] = useState('');
    const catcherList = useSelector((store) => store.catcherList);

    return (
        <ul>
            {catcherList.map(catcher => (
            <li
                onClick={() => setCurrentCatcher(catcher)}
            >
            {catcher}
            </li>
            ))}
        </ul>
    );
}