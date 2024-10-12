import { useInfiniteQuery, keepPreviousData } from '@tanstack/react-query';
import ms from 'ms';
import APIClient from '../services/apiClient';
import useGameQueryStore from '../store';
import { IGame } from '../models/IGame';

const apiClient = new APIClient<IGame>('/games');

const useGames = () => {
	const gameQuery = useGameQueryStore((s) => s.gameQuery);
	return useInfiniteQuery({
		queryKey: ['games', gameQuery],
		queryFn: ({ pageParam }) =>
			apiClient.getAll({
				params: {
					genres: gameQuery.genreId,
					parent_platforms: gameQuery.platformId,
					ordering: gameQuery.sortOrder,
					search: gameQuery.searchText,
					page: pageParam,
				},
			}),
		initialPageParam: 1,
		staleTime: ms('24h'),
		placeholderData: keepPreviousData,
		getNextPageParam: (lastPage, allPages) => {
			return lastPage.next ? allPages.length + 1 : undefined;
		},
	});
};

export default useGames;
