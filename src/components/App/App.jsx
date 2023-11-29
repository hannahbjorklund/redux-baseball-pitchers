import {useState} from 'react';
import TotalCatchers from '../TotalCatchers/TotalCatchers';
import TotalPitchers from '../TotalPitchers/TotalPitchers';
import CatcherList from '../CatcherList/CatcherList';
import PitcherList from '../PitcherList/PitcherList';
import CatcherForm from '../CatcherForm/CatcherForm';
import PitcherForm from '../PitcherForm/PitcherForm';

function App() {
  const [currentPitcher, setCurrentPitcher] = useState('');
  const [currentCatcher, setCurrentCatcher] = useState('');
    
  return (
    <div>
      <h1>Redux Baseball Pitchers</h1>
      <h2>On the Mound: {currentPitcher}</h2>
      <h2>Behind the Plate: {currentCatcher}</h2>
      <TotalPitchers/>
      <TotalCatchers/>
      <h3>All Pitchers</h3>
      <PitcherForm/>
      <PitcherList/>
      <h3>All Catchers</h3>
      <CatcherForm/>
      <CatcherList/>
    </div>
  );
}

export default App;
