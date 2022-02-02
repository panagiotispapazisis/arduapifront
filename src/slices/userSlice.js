import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"


export const singIn = createAsyncThunk(
    "user/signIn",
    async (data) => {

        const res = await axios.post(process.env.REACT_APP_BASE_API_URL + "/api/user/login", data)

        if (res.status === 200) {
            return { state: true, token: res.data }
        }
        else {
            return { state: false, token: "" }
        }
    }
)




export const userSlice = createSlice({
    name: "user",
    initialState: {
        isAuth: false,
        token: ""
    },
    reducers: {},
    extraReducers(builder) {
        builder.addCase(singIn.fulfilled, (state, action) => {
            state.isAuth = action.payload.state
            state.token = action.payload.token
        })
        builder.addCase(singIn.rejected, (state, action) => {
            state.isAuth = false
            state.token = ""
        })
    }

})


const { reducer } = userSlice
export default reducer