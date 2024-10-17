import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/apiClient';
import ITrailer from '../models/ITrailer';

const useTrailers = (gameId: number) => {
	const apiClient = new APIClient<ITrailer>(`/games/${gameId}/movies`);

	return useQuery({
		queryKey: ['trailers', gameId],
		queryFn: apiClient.getAll,
	});
};

export default useTrailers;
