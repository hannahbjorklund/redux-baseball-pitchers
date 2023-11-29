import {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TotalCatchers from '../TotalCatchers/TotalCatchers';
import TotalPitchers from '../TotalPitchers/TotalPitchers';
import CatcherList from '../CatcherList/CatcherList';
import PitcherList from '../PitcherList/PitcherList';

function App() {
  const [newPitcher, setNewPitcher] = useState('');
  const [newCatcher, setNewCatcher] = useState('');
  const [currentPitcher, setCurrentPitcher] = useState('');
  const [currentCatcher, setCurrentCatcher] = useState('');
  
  // Create a way to communicate with the store
  const dispatch = useDispatch();

  // Dispatch new pitcher to store
  const handlePitcherSubmit = event => {
    event.preventDefault();
    dispatch({
      type: 'ADD_PITCHER',
      payload: newPitcher
    })
    setNewPitcher('');
  };

  const handlePitcherNameChange = event => {
    setNewPitcher(event.target.value);
  };

  // Dispatch new catcher to store
  const handleCatcherSubmit = event => {
    event.preventDefault();
    dispatch({
      type: 'ADD_CATCHER',
      payload: newCatcher
    })
    setNewCatcher('');
  };

  const handleCatcherNameChange = event => {
    setNewCatcher(event.target.value);
  };

  return (
    <div>
      <h1>Redux Baseball Pitchers</h1>
      <h2>On the Mound: {currentPitcher}</h2>
      <h2>Behind the Plate: {currentCatcher}</h2>
      <TotalPitchers/>
      <TotalCatchers/>
      <h3>All Pitchers</h3>
      <form onSubmit={handlePitcherSubmit}>
        <input
          type="text"
          value={newPitcher}
          onChange={handlePitcherNameChange}
          placeholder="New Pitcher Name"
        />
        <button type="submit">Add Pitcher</button>
      </form>
      <PitcherList/>
      <h3>All Catchers</h3>
      <form onSubmit={handleCatcherSubmit}>
        <input
          type="text"
          value={newCatcher}
          onChange={handleCatcherNameChange}
          placeholder="New Catcher Name"
        />
        <button type="submit">Add Catcher</button>
      </form>
      <CatcherList/>
    </div>
  );
}

export default App;
