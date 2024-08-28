'use client';
import { IconElement } from './IconElement/IconElement';
import { searchItem } from '@/lib/features/pagination/paginationSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';

export const SearchInput = () => {
	const dispatch = useAppDispatch();
	const theme = useAppSelector((state) => state.pagination.theme);

	return (
		<div className='flex items-center relative'>
			<IconElement />
			<input
				onChange={(event) => dispatch(searchItem(event.target.value))}
				className={`${
					theme === true ? 'darkTheme' : ''
				} border-[#9E9E9E]  border-[1px] rounded-[8px] size-full ml-2 px-[33px] py-[9px] text-[#9E9E9E]`}
				type='search'
				placeholder='Search...'
			/>
		</div>
	);
};
