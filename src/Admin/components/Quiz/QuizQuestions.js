import MUIDataTable from "mui-datatables";
import {connect} from 'react-redux'
import React from 'react'

function Questions(props){
    const columns =["Question",'Choice1', 'Choice2', 'Choice3', 'Choice4','Correct','Category']
 const  data=props.questions
 const newdata=[]

data.map(i=>newdata.push([i.question,...i.answers,i.correct,i.category])) 
 
   const options = {
    filterType: "dropdown",
    responsive: "scroll"
  };
  return(
      <div>
      <MUIDataTable
        title={"All Quiz Questions"}
        data={newdata}
        columns={columns}
        options={options}
      />
      </div>
  )


}

function mapStateToProps(state) {
    const { questions } = state.reducer
    return { 
        questions
     }
  }
  
  export default connect(mapStateToProps)(Questions)
