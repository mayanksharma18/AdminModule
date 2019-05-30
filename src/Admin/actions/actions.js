import axios from "axios";
const FETCH_QUESTIONS = "FETCH_QUESTIONS";

// export function fetchQ(questions) {
//   return { type: FETCH_QUESTIONS, payload: questions };
// }


// export function fetchData(){
//     return dispatch=>{
//       axios.get("http://localhost:3001/allquestions")
//         .then(res=>dispatch(fetchQ(res.data)))
//     }
// }


export function fetchData(){
    return async function(dispatch){
    const res = await axios.get('http://localhost:3001/allquestions')
    console.log(res.data)
        return dispatch({
            type: FETCH_QUESTIONS,
            data : res.data
        })
    }

}
