import { Button, Text } from '@chakra-ui/react';
import { useState } from 'react';

interface IProps {
	children: string;
}

const ExpandableText = ({ children }: IProps) => {
	const [isExpanded, setIsExpanded] = useState<boolean>(false);
	const limit = 300;

	if (!children) return null;

	if (children.length <= limit) return <Text>{children}</Text>;

	const summary = isExpanded
		? children
		: children.substring(0, limit) + '...';

	return (
		<Text>
			{summary}
			<Button
				size='xs'
				marginLeft={1}
				fontWeight='bold'
				colorScheme='yellow'
				onClick={() => setIsExpanded((prev) => !prev)}
			>
				{isExpanded ? 'Show less' : 'Read more'}
			</Button>
		</Text>
	);
};

export default ExpandableText;
