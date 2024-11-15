import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/apiClient';
import IGame from '../models/IGame';

const apiClient = new APIClient<IGame>('/games');

const useGame = (slug: string) =>
	useQuery({
		queryKey: ['games', slug],
		queryFn: () => apiClient.get(slug),
	});

export default useGame;
