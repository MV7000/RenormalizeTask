'use client';
import { Button } from './components/Button/Button';
import { SearchInput } from './components/SerchInput/SearchInput';
import { QuantityItems } from './components/QuantityItems/QuantityItems';
import { useAppDispatch } from '@/lib/hooks';
import { setTheme } from '@/lib/features/pagination/paginationSlice';

export const SearchPanel = () => {
	const dispatch = useAppDispatch();

	return (
		<div className='h-16 px-[16px] flex items-center justify-between'>
			<div className='flexBox gap-6'>
				<QuantityItems />
				<SearchInput />
				<input
					type='checkbox'
					name='Language'
					className={`bg-[url('/public/next.svg')]`}
					id='btnTheme'
					onClick={() => dispatch(setTheme())}
				/>
			</div>
			<Button />
		</div>
	);
};
