import { useSelector } from 'react-redux';


export default function TotalPitchers(){
    const pitcherList = useSelector((store) => store.pitcherList);
    
    return (
        <div>
            Total Pitchers: {pitcherList.length}
        </div>
    );
}