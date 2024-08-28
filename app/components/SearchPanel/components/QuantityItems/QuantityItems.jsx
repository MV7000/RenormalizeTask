'use client';
import {
	setCurrentPage,
	setPostsPerPage,
} from '@/lib/features/pagination/paginationSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';

export const QuantityItems = () => {
	const dispatch = useAppDispatch();
	const theme = useAppSelector((state) => state.pagination.theme);

	return (
		<div className='flexBox gap-x-3'>
			<span>Show</span>
			<select
				onChange={(event) => {
					dispatch(setPostsPerPage(event.target.value));
					dispatch(setCurrentPage(1));
				}}
				className={`${
					theme === false ? 'bg-[#E0E0E0]' : 'bg-[#141432]'
				} px-2 py-1.5 rounded-lg cursor-pointer`}
			>
				<option value='10'>10</option>
				<option value='30'>30</option>
				<option value='60'>60</option>
			</select>
			<span>entries</span>
		</div>
	);
};
