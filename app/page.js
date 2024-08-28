'use client';
import { useAppSelector } from '@/lib/hooks';
import { SearchPanel } from './components/SearchPanel/SearchPanel';
import { TableTransactions } from './components/Table/TableTransactions';

export default function Home() {
	const theme = useAppSelector((state) => state.pagination.theme);

	return (
		<main className={`${theme === true ? 'darkTheme' : ''}`}>
			<SearchPanel />
			<TableTransactions />
		</main>
	);
}
