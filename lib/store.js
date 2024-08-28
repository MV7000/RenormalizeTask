import { configureStore } from '@reduxjs/toolkit';
import { paginationSlice } from './features/pagination/paginationSlice';

export const makeStore = () => {
	return configureStore({
		reducer: {
			pagination: paginationSlice.reducer,
		},
	});
};
