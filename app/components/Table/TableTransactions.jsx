import { TableBody } from './components/TableBody/TableBody';
import { TableHeader } from './components/TableHeader/TableHeader';
import { Pagination } from './components/Pagination/Pagination';

export const TableTransactions = () => {
	return (
		<>
			<table className='w-full montserrat-all'>
				<TableHeader />
				<TableBody />
			</table>
			<Pagination />
		</>
	);
};
