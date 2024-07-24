import {
	FaWindows,
	FaPlaystation,
	FaXbox,
	FaApple,
	FaLinux,
	FaAndroid,
} from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';
import { HStack, Icon } from '@chakra-ui/react';
import { IPlatform } from '../hooks/useGames';
import { IconType } from 'react-icons';

interface IProps {
	platforms: IPlatform[];
}

const PlatformIconList = ({ platforms }: IProps) => {
	const iconMap: { [key: string]: IconType } = {
		pc: FaWindows,
		playstation: FaPlaystation,
		xbox: FaXbox,
		nintendo: SiNintendo,
		mac: FaApple,
		linux: FaLinux,
		android: FaAndroid,
		ios: MdPhoneIphone,
		web: BsGlobe,
	};

	return (
		<HStack marginY={1}>
			{platforms.map((platform) => (
				<Icon
					key={platform.slug}
					as={iconMap[platform.slug]}
					color='gray.500'
				/>
			))}
		</HStack>
	);
};

export default PlatformIconList;
