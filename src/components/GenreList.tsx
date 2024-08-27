import {
	Button,
	Heading,
	HStack,
	Image,
	List,
	ListItem,
	Spinner,
} from '@chakra-ui/react';
import useGenres, { IGenre } from '../hooks/useGenres';
import getCroppedImageUrl from '../services/imageUrl';

interface IProps {
	selectedGenre: IGenre | null;
	onSelectedGenre: (genre: IGenre) => void;
}

const GenreList = ({ selectedGenre, onSelectedGenre }: IProps) => {
	const { data, isLoading, error } = useGenres();

	if (error) return null;

	if (isLoading) return <Spinner />;

	return (
		<>
			<Heading fontSize='2xl' marginBottom={3}>
				Genres
			</Heading>
			<List>
				{data?.results.map((genre) => (
					<ListItem key={genre.id} paddingY='5px'>
						<HStack>
							<Image
								boxSize='32px'
								borderRadius={8}
								objectFit='cover'
								src={getCroppedImageUrl(genre.image_background)}
							/>
							<Button
								whiteSpace='normal'
								textAlign='left'
								onClick={() => onSelectedGenre(genre)}
								fontSize='lg'
								fontWeight={
									genre.id === selectedGenre?.id
										? 'bold'
										: 'normal'
								}
								variant='link'
							>
								{genre.name}
							</Button>
						</HStack>
					</ListItem>
				))}
			</List>
		</>
	);
};

export default GenreList;
