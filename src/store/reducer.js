
const initialState= {
 plans:[]
};
    
  const ADD_PLAN='ADD_PLAN';

  const REMOVE_PLAN='REMOVE_PLAN';

  const COMPLETE_PLAN ='COMPLETE_PLAN';

  const CLEAR_PLANS ='CLEAR_PLANS'

  const CLEAR_COMPLETE ='CLEAR_COMPLETE'




  export function addPlan(text) {
    return {
      type: ADD_PLAN,
      payload:text
    }
  }

  export function clearPlans(){
    return {
      type: CLEAR_PLANS,
    }
  }

  export function completePlan(plan) {
    return  {
        type: COMPLETE_PLAN,
        payload: plan
    }}

  export function removePlan(plan) {
  return  {
      type: REMOVE_PLAN,
      payload:plan
  }}

  export function clearComplete(plans){
    return{
    type: CLEAR_COMPLETE,
    payload:plans
    }
  }




  
  export default function taskReducer(state = initialState, action) {
    switch (action.type) {



      case ADD_PLAN:{
        return {
          ...state,
          plans:[ ...state.plans, {
            text:action.payload,
            completed: false,
            id: (new Date()).getTime().toString(),
          },
        ]
        }
      }



      case COMPLETE_PLAN:{
        return {
          ...state,
          plans: state.plans.map(plan => {
            if (plan !== action.payload) {
              return plan
            }
  
            return {
              ...plan,
              completed: !plan.completed,
              }               
          } )
            

      }}
    


      case CLEAR_PLANS:{
        return {
          ...state,
          plans: []
        }

      }



      case REMOVE_PLAN:{   
        return {
         ...state, 
         plans: state.plans.filter(plan=> plan.id !== action.payload.id)
        }
      }



      case CLEAR_COMPLETE:{
        return{
          ...state,
          plans: state.plans.filter(plan=> !plan.completed)
        }
      }



      default: {
        return {
          ...state}
      }
    }
  }
  

