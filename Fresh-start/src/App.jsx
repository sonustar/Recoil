
import './App.css'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import {  idAtom, notificationsAtom, notificationSelector, todoAtomfamily} from './Store/Recoil/store'
import { Link, Route, Routes} from "react-router";
import  {Register} from './components/Register';
import { Suspense, useState } from 'react';


function App() {

  // Using recoil not by use state : 
  const data = useRecoilValue(notificationsAtom)
  const totalcount = useRecoilValue(notificationSelector)
  
  



  return (
    
    
        <div>

      <button style={{margin:10}}>Home </button>
      

      <button > Notifications ({data.notification})</button>
      <button>Jobs ({data.job})</button>
      <button>My Networks({data.network}) </button>
      <button>Messages ({data.message})</button>
      <button style={{margin:5}}
        >Me ({totalcount})</button>

      <div style={{margin:10, display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        
       
        
        </div>        

        <Link to="/register">Register</Link>
        <Link style={{marginLeft:10}}  to="/search"> daily work </Link>
        <Routes>
              <Route path="/register" element={<Register/>}></Route>
              <Route path="/search" element={<Dailywork/>}/>
        </Routes>
      
        </div>
      
      
  )
}

function Dailywork(){

  const [data,setdata] = useState("")
  const [idvalue , setidvalue] = useRecoilState(idAtom)

  function search(e){
        e.preventDefault();
        setidvalue(Number(data))
        
  }
  return (
    <>
       <div> Put the work :</div>
       <div>
          
          <input 
          type="text" 
          placeholder='search the work '
          value={data} 
          onChange={(e)=>{
            setdata(e.target.value)
          }}
          />

          <button onClick={search}> search </button>
          <Item data={idvalue}/>

       </div>
    </>
  )

}


function Item({data}){
  
  const todo = useRecoilValue(todoAtomfamily(data))
  
  if (todo.length === 0) {
    return <div>No task found for ID: {data}</div>;
  }

  return(
    <>
        <Suspense fallback={<Loading/>}>


         <div>
          {todo.map((todo)=>(
            <div key={todo.id}>
                  <h2>{todo.title}</h2>
                  <h3>{todo.description}</h3>
              </div>
              
            ))}
         </div>
    
        </Suspense>
          
    
    </>
  )
}

function Loading() {
  return <h2>🌀 Loading...</h2>;
}


export default App
