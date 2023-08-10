import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../actions";

const songsSlice = createSlice({
    name:'song',
    initialState:[],
    reducers:{
        addSong(state,action){
            state.push(action.payload);
        },
        removeSong(state,action){
            //action.payload === string, the song that is going to be removed
            const index = state.indexOf(action.payload);
            state.splice(index, 1);
        },
        // resetSong(state){
        //     return[];
        //     //both can be used
        //     //state.splice(state);
        // }
    },
    extraReducers(builder){
        builder.addCase(reset, (state, action) =>{
            return[];
        });
    }
});

export const {addSong, removeSong} = songsSlice.actions;
export const songsReducer = songsSlice.reducer;