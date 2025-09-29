import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
	value: 0,
};

export const incrementAsync = createAsyncThunk(
	"counter/incrementAsync",
	async () => {
		await new Promise(resolve => setTimeout(resolve, 1000));
		return 1;
	}
);

export const counterSlice = createSlice({
	name: "counter",
	initialState,
	reducers: {
		increment: state => {
			state.value += 1;
		},
		decrement: state => {
			state.value -= 1;
		},
		reset: state => {
			state.value = 0;
		},
	},
	extraReducers: builder => {
		builder.addCase(incrementAsync.fulfilled, (state, action) => {
			state.value += action.payload;
		});
	},
});

export const { increment, decrement, reset } = counterSlice.actions;

export const selectCounter = state => state.counter.value;

export default counterSlice.reducer;
