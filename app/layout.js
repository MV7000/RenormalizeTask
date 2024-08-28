import './globals.css';
import StoreProvider from './StoreProvider';

export const metadata = {
	title: 'Table test task',
	description: 'Test task created by Fox',
};

export default function RootLayout({ children }) {
	return (
		<StoreProvider>
			<html lang='en'>
				<body>{children}</body>
			</html>
		</StoreProvider>
	);
}
