import './App.css';
import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPlan, clearPlans, clearComplete} from '../store/reducer';
import TaskList from './TaskList';
import Weather from './Weather/Weather';

function App() {
  const  plans= useSelector(state => state.plans.plans);


const dispatch = useDispatch();
const [plan, setPlan] = useState(
  '');
const handleSubmit = event => {
  event.preventDefault();
  if (plan){return(
    dispatch(addPlan(plan)),
    setPlan(''),
    document.getElementById('Description').value=''
    )} else {
      return(
        alert('Text Required')
      )
    }
  
};

const handleClear = (e) => {
  e.preventDefault();
  dispatch(clearPlans())
}

const handleClearComplete = (e) => {
  e.preventDefault();
  dispatch(clearComplete())
}

  return (
    <div className="App">
      <header className="App-header">
        <h1><span className="highlight">Life</span>Plan</h1>
      </header>
      <main>

      <div className="InputField">
          <form >    
            <textarea required='required' placeholder="Plan Description" 
            id='Description' 
            onChange={e => setPlan(e.target.value)}
            value={plan.text}
             ></textarea>
             <div className='buttons'>
            <button onClick={handleSubmit}>Add Too Plan</button>
            <button onClick={handleClear}>Clear List</button>
            <button onClick={handleClearComplete}>Clear Completed</button>
            </div>
          </form>
      

      </div>
      <div className='Weather'>
      <Weather/>
      </div>


      <div className='taskList'>
      <TaskList />
      </div>




      </main>
      
    </div>
  );
}

export default App;
