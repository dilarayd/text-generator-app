import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchParas = createAsyncThunk(
    'paras/getParas',
    async (parasNumber, { getState }) => {
        const { format } = getState().paras;
        const res = await axios(
            `${process.env.REACT_APP_API_BASE_ENDPOINT}/?type=all-meat&paras=${parasNumber}&format=${format}`
        );
        return res.data;
    })

export const textsSlice = createSlice({
    name: 'paras',
    initialState: {
        parasNumber: 4,
        format: "text",
        data: null,
    },
    reducers: {
        setParasNumber(state, action) {
            state.parasNumber = action.payload;
        },
        setFormat(state, action) {
            state.format = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchParas.fulfilled, (state, action) => {
                state.data = action.payload
            })
    },
})

export const { setParasNumber, setFormat } = textsSlice.actions;
export default textsSlice.reducer;