import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removePlan, completePlan } from '../store/reducer'
import './TaskList.css'




export const TaskList = () => {
const  plans= useSelector(state => state.plans.plans);
const dispatch = useDispatch();

function completeVisual(plan){
  if (plan.completed){
    return(
      'Complete'
    )} else {
        return(
          'Incomplete'
        )
    }
  
    }


const handleComplete =(plan) => {
  dispatch(completePlan(plan));  
}

  const renderedPosts = plans.map(plan => (
    
    <li className='renderedPost' key={plan.id} id={plan.id}>
      <p>{plan.text}</p>
      <h5>Status: {completeVisual(plan)}</h5>
      <button onClick={()=>handleComplete(plan) } className='button'>  Toggle Complete  </button>
      <button onClick={()=>dispatch(removePlan(plan))} className='button'>  Remove  </button>
    </li>
  ))

  return (
    <section className="Task-list">
      <h2>Plans List</h2>
      <ul>
        {renderedPosts}
      </ul>
    </section>
  )
}

export default TaskList