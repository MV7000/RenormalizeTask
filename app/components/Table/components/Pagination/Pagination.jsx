'use client';
import {
	setCurrentPage,
	setNextPage,
	setPreviousPage,
} from '@/lib/features/pagination/paginationSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';

export const Pagination = () => {
	const dispatch = useAppDispatch();
	const postsAll = useAppSelector((state) => state.pagination.postsAll);
	const currentPage = useAppSelector((state) => state.pagination.currentPage);
	const postsPerPage = useAppSelector((state) => state.pagination.postsPerPage);
	const theme = useAppSelector((state) => state.pagination.theme);

	const paginationNumbers = [];
	for (let i = 1; i <= Math.ceil(postsAll.length / postsPerPage); i++) {
		paginationNumbers.push(i);
	}

	const handleNextPage = (page) => {
		page < paginationNumbers.length
			? dispatch(setNextPage())
			: dispatch(setNextPage(1));
	};
	const handlePrevPage = (page) => {
		page > 1 ? dispatch(setPreviousPage()) : dispatch(setPreviousPage(1));
	};

	return (
		<div className='w-full p-7 flexBox gap-3 flex-wrap text-center mt-3 montserrat-medium text-xs'>
			<button
				onClick={() => handlePrevPage(currentPage)}
				className={`${
					theme === true
						? 'hover:text-[#624de3]'
						: 'text-[#9E9E9E] hover:text-[#000000]'
				} montserrat-medium text-xs`}
			>
				Previous
			</button>
			{paginationNumbers.map((pageNumber) => (
				<button
					onClick={() => {
						dispatch(setCurrentPage(pageNumber));
					}}
					className={`rounded-lg ${
						theme === true ? 'bg-[#141432]' : 'bg-[#E0E0E0]'
					} text-center w-8 h-8 ${currentPage === pageNumber ? 'active' : ''}`}
					key={pageNumber}
				>
					{pageNumber}
				</button>
			))}
			<button
				onClick={() => handleNextPage(currentPage)}
				className={`${
					theme === true
						? 'hover:text-[#624de3]'
						: 'text-[#9E9E9E] hover:text-[#000000]'
				} montserrat-medium text-xs`}
			>
				Next
			</button>
		</div>
	);
};
