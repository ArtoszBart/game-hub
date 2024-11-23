import { HStack, Image } from '@chakra-ui/react';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';
import { Link } from 'react-router-dom';

const NavBar = () => {
	return (
		<HStack padding={'10px'}>
			<Link to='/'>
				<Image src='/game-hub-logo.svg' boxSize={'60px'} />
			</Link>
			<SearchInput />
			<ColorModeSwitch />
		</HStack>
	);
};

export default NavBar;
