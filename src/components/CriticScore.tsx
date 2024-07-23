import { Badge } from '@chakra-ui/react';

interface IProps {
	score: number;
}

const CriticScore = ({ score }: IProps) => {
	const color = score > 90 ? 'green' : score > 80 ? 'yellow' : 'red';
	return (
		<Badge
			colorScheme={color}
			fontSize={'14px'}
			paddingX={2}
			borderRadius='4px'
		>
			{score}
		</Badge>
	);
};

export default CriticScore;
