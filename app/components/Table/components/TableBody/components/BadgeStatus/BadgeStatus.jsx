export const BadgeStatus = ({ status }) => {
	return (
		<div
			className={`${
				status === 'Delivered'
					? 'bg-[#EBF9F1] text-[#1F9254]'
					: status === 'Process'
					? 'bg-[#FEF2E5] text-[#CD6200]'
					: 'bg-[#FBE7E8] text-[#A30D11]'
			} text-center px-3 py-2 rounded-3xl`}
		>
			{status}
		</div>
	);
};
