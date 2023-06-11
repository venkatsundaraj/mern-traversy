import React from 'react'
import Module from './GoalItem.module.css'
import { useDispatch } from 'react-redux'
import { deleteGoal } from '../auth/goalSlice'

function GoalItem({goal}) {
    const dispatch = useDispatch()
    const deleteGoalHandler = function(){
        dispatch(deleteGoal(goal._id))
    }
    
  return (
    <div className={Module.goal}>
        <h2>{goal.goal
        }</h2>
        <button onClick={deleteGoalHandler}>Delete</button>
    </div>
  )
}

export default GoalItem