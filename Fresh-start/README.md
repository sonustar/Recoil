# One Of the simple ways : We learnt : 


export const NotificationAtom = atom({
  key : "NotificationCount",
  default: 102
})

export const JobsAtom = atom({
  key : "JobsCount",
  default: 0
})

export const MyNetworkAtom = atom({
  key : "MyNetworkCount",
  default: 12
})

export const MessagesAtom = atom({
  key : "MessagesCount",
  default: 0
})

export const meSelector = selector({
  key:"meSelector",
  get:({get})=>{
      const na = get(NotificationAtom)
      const ja = get(JobsAtom)
      const neta = get(MyNetworkAtom)
      const ma = get(MessagesAtom)

      return na + ja + neta + ma ;
  }
})

We made 4 atoms and a selector ---> 4 atoms 

In App : We catch them by these : 
    const notificationCount = useRecoilValue(NotificationAtom)
   const jobscount = useRecoilValue(JobsAtom)
   const networkcount = useRecoilValue(MyNetworkAtom)
   const [messagecount,setmessagecount] = useRecoilState(MessagesAtom)
  const totalCount = useRecoilValue(meSelector)

  Then we use them in the app : 

  ================================================================

  Making these things a little more simpler : 
