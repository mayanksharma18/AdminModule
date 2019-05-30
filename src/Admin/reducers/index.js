const intialState={
    questions:[]
}


function reducer (state=intialState,action){
    const {data}=action
    switch(action.type){
           case 'FETCH_QUESTIONS':
           return  {
               ...state,
               questions:data
           }

            default:
            return state

    }



}

export default reducer