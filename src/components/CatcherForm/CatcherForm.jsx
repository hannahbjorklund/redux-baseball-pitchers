import {useState} from 'react';
import { useDispatch } from 'react-redux'

export default function CatcherForm(){
    const dispatch = useDispatch();
    const [newCatcher, setNewCatcher] = useState('');

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
        <form onSubmit={handleCatcherSubmit}>
            <input
                type="text"
                value={newCatcher}
                onChange={handleCatcherNameChange}
                placeholder="New Catcher Name"
            />
            <button type="submit">Add Catcher</button>
        </form>
    )
    
}