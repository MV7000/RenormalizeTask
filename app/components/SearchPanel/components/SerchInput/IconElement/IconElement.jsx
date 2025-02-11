import { useAppSelector } from '@/lib/hooks';

export const IconElement = () => {
	const theme = useAppSelector((state) => state.pagination.theme);
	return (
		<svg
			className='absolute left-[18px] top-1/2 z-10 -translate-y-1/2 transform'
			width='16'
			height='16'
			viewBox='0 0 16 16'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M14 14L11.0093 11.004L14 14ZM12.6666 7.00001C12.6666 8.5029 12.0696 9.94424 11.0069 11.0069C9.94421 12.0697 8.50287 12.6667 6.99998 12.6667C5.49709 12.6667 4.05575 12.0697 2.99304 11.0069C1.93034 9.94424 1.33331 8.5029 1.33331 7.00001C1.33331 5.49712 1.93034 4.05578 2.99304 2.99307C4.05575 1.93037 5.49709 1.33334 6.99998 1.33334C8.50287 1.33334 9.94421 1.93037 11.0069 2.99307C12.0696 4.05578 12.6666 5.49712 12.6666 7.00001V7.00001Z'
				stroke={`${theme === true ? '#FFFFFF' : '#9E9E9E'}`}
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	);
};
