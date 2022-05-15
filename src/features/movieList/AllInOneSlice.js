import { createSlice } from '@reduxjs/toolkit'

export const AllinOneSlice = createSlice({
  name: 'movieList',
  initialState: {
    liked: [],
    blocked: [],
    movieInfo: []
  },
  reducers: {
    like:(state,action)=>{
        state.liked=[...state.liked,action.payload]
    },

    block(state,action){
        state.blocked= [...state.blocked,action.payload]
    },

    unlike:(state,action)=>  {
        state.liked=state.liked.filter(x => x!==action.payload)
    },

    unblock:(state,action)=> {
        state.blocked=state.blocked.filter(x=> x!==action.payload)
    },

    likedToBlocked:(state,action)=> {
        state.liked=state.liked.filter(x => x!==action.payload)
        state.blocked= [...state.blocked,action.payload]
    },

    blockedToLiked:(state,action)=> {
        state.blocked=state.blocked.filter(x=> x!==action.payload)
        state.liked=[...state.liked,action.payload]
    },
    update:(state,action)=> {
        state.movieInfo = [...state.movieInfo,...action.payload]
    },
    
    default:(state) => state
  }
})


export const { like,block,unlike,unblock,likedToBlocked,blockedToLiked,update } = AllinOneSlice.actions
export default AllinOneSlice.reducer
