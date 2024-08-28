import { tableTitles } from '@/app/db/tableTitles';
import { IconSelect } from './IconSelect/IconSelect';

export const TableHeader = () => {
	return (
		<thead className='h-12'>
			<tr className='font-bold text-sm '>
				{tableTitles &&
					tableTitles.map(({ id, title, button }) => {
						return (
							<th key={id} className='w-56 h-4'>
								<div
									className={`flex items-center ${
										button === true
											? 'justify-between mr-2'
											: title === 'Amount' || title === 'Payment Mode'
											? 'justify-left'
											: 'justify-center'
									}`}
								>
									<span>{title}</span>
									{button ? (
										<button>
											<IconSelect />
										</button>
									) : null}
								</div>
							</th>
						);
					})}
			</tr>
		</thead>
	);
};
