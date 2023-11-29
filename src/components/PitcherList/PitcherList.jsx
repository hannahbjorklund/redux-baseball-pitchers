import {useState} from 'react';
import {useSelector} from 'react-redux';

export default function PitcherList(){
    const pitcherList = useSelector((store) => store.pitcherList);
    const [currentPitcher, setCurrentPitcher] = useState('');

    return (
        <ul>
        {pitcherList.map(pitcher => (
          <li
            onClick={() => setCurrentPitcher(pitcher)}
          >
            {pitcher}
          </li>
        ))}
      </ul>
    );
}