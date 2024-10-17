import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/apiClient';
import IScreenshot from '../models/IScreenshot';

const useScreenshots = (gameId: number) => {
	const apiClient = new APIClient<IScreenshot>(
		`/games/${gameId}/screenshots`
	);

	return useQuery({
		queryKey: ['screenshots', gameId],
		queryFn: apiClient.getAll,
	});
};

export default useScreenshots;
