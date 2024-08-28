import { TableData } from '@/app/db/tableData';
import { createSlice, configureStore } from '@reduxjs/toolkit';

export const paginationSlice = createSlice({
	name: 'tableContent',
	initialState: {
		postsAll: TableData,
		postsOnPage: [],
		currentPage: 1,
		startPage: 0,
		postsPerPage: 10,
		theme: false,
	},
	reducers: {
		setCurrentPage: (state, action) => {
			state.currentPage = action.payload;
		},
		setPreviousPage: (state, action) => {
			action.payload ? (state.currentPage = 1) : (state.currentPage -= 1);
		},
		setNextPage: (state, action) => {
			action.payload ? (state.currentPage = 1) : (state.currentPage += 1);
		},
		setStartPage: (state, action) => {
			state.startPage = action.payload;
		},
		setPostsPerPage: (state, action) => {
			state.postsPerPage = action.payload;
		},
		setPostsOnPage: (state, action) => {
			state.postsOnPage = state.postsAll.slice(
				state.startPage,
				state.currentPage * action.payload,
			);
		},
		deleteItem: (state, action) => {
			state.postsAll.splice(
				state.postsAll.findIndex(
					(elem) => elem['Tracking ID'] === action.payload,
				),
				1,
			);
		},
		searchItem: (state, action) => {
			action.payload !== ''
				? (state.postsAll = state.postsAll.filter((elem) =>
						elem['Product Name']
							.toLowerCase()
							.includes(action.payload.toLowerCase()),
				  ))
				: (state.postsAll = TableData);
		},
		setTheme: (state) => {
			state.theme === false ? (state.theme = true) : (state.theme = false);
		},
	},
});

export const {
	setCurrentPage,
	setPostsOnPage,
	setStartPage,
	setPreviousPage,
	setNextPage,
	deleteItem,
	searchItem,
	setPostsPerPage,
	setTheme,
} = paginationSlice.actions;

export const store = configureStore({
	reducer: paginationSlice.reducer,
});
