import {atom, atomFamily, selector} from "recoil"



// export const NotificationAtom = atom({
//   key : "NotificationCount",
//   default: 102
// })

// export const JobsAtom = atom({
//   key : "JobsCount",
//   default: 0
// })

// export const MyNetworkAtom = atom({
//   key : "MyNetworkCount",
//   default: 12
// })

// export const MessagesAtom = atom({
//   key : "MessagesCount",
//   default: 0
// })

// export const meSelector = selector({
//   key:"meSelector",
//   get:({get})=>{
//       const na = get(NotificationAtom)
//       const ja = get(JobsAtom)
//       const neta = get(MyNetworkAtom)
//       const ma = get(MessagesAtom)

//       return na + ja + neta + ma ;
//   }
// })


// What we can do is by making an atom of objects : 
import axios from 'axios'
import { TODOS } from "../../components/Todo"

export const notificationsAtom = atom({
   key : "notificationsAtom",
   default :selector({
    key:"notiselector",
    get : async({get})=>{
      const response = await axios.get("http://localhost:3000/notify")
      return response.data
    }
   })
})



export const  notificationSelector = selector({
  key:"notificationSelector",
  get : ({get})=>{
   const data = get(notificationsAtom)  
   return data.notification +
   data.job +
   data.network +
   data.message

  }
})

export const idAtom = atom({
  key:"idAtom",
  default:0
})

// You are making an atom family : 
export const todoAtomfamily = atomFamily({
    key : "todoAtomfamily",
    
    default : id => {
      // Frontend part 
      
      return TODOS.filter(x=> x.id === id )
    }
})

