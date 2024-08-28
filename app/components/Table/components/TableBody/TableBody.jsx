'use client';
import Image from 'next/image';
import { BadgeStatus } from './components/BadgeStatus/BadgeStatus';
import {
	DeleteIconElement,
	EditIconElement,
} from './components/BadgeStatus/ButtonIcons/ButtonIcons';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import {
	deleteItem,
	setPostsOnPage,
	setStartPage,
} from '@/lib/features/pagination/paginationSlice';
import { useEffect, useState } from 'react';

export const TableBody = () => {
	const dispatch = useAppDispatch();
	const postsAll = useAppSelector((state) => state.pagination.postsAll);
	const currentPage = useAppSelector((state) => state.pagination.currentPage);
	const postsPerPage = useAppSelector((state) => state.pagination.postsPerPage);
	const postsOnPage = useAppSelector((state) => state.pagination.postsOnPage);
	const theme = useAppSelector((state) => state.pagination.theme);
	const [refresh, setRefresh] = useState(false);

	useEffect(() => {
		dispatch(setStartPage(currentPage * postsPerPage - postsPerPage));
		dispatch(setPostsOnPage(postsPerPage));
	}, [currentPage, refresh, postsAll, postsPerPage]);

	return (
		<tbody>
			{postsOnPage &&
				postsOnPage.map((elem, ind) => {
					return (
						<tr
							key={elem['Tracking ID']}
							className={`h-16 montserrat-medium text-sm ${
								theme === false && ind % 2 === 0
									? 'bg-[#F7F6FE]'
									: theme === false && ind % 2 !== 0
									? 'bg-[#FFFFFF]'
									: theme === true && ind % 2 === 0
									? 'bg-[#26264F] text-[#FFFFFF]'
									: theme === true && ind % 2 !== 0
									? 'bg-[#1d1e42] text-[#FFFFFF] '
									: ''
							}`}
						>
							<td className='text-center'>{elem['Tracking ID']}</td>
							<td>
								<div className='flex items-center justify-start'>
									<Image
										src={elem['Product Image']}
										width={30}
										height={30}
										alt='table-image'
										className='w-8 h-8 rounded-lg'
									/>
									&nbsp;...
									{
										elem['Product Name'].split(' ')[
											elem['Product Name'].split(' ').length - 1
										]
									}
								</div>
							</td>
							<td>{elem.Customer}</td>
							<td>{elem.Date.split('-').reverse().join('/')}</td>
							<td>${elem.Amount}</td>
							<td>{elem['Payment Mode']}</td>
							<td>
								<BadgeStatus status={elem.Status} />
							</td>
							<td className='text-center'>
								<div className='flexBox gap-3'>
									<button type='button'>
										<EditIconElement />
									</button>
									<button
										onClick={() => {
											dispatch(deleteItem(elem['Tracking ID']));
											setRefresh((prev) => !prev);
										}}
										type='button'
									>
										<DeleteIconElement />
									</button>
								</div>
							</td>
						</tr>
					);
				})}
		</tbody>
	);
};
