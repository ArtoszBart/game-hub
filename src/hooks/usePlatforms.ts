import { useQuery } from '@tanstack/react-query';
import { IFetchResponse } from './useData';
import apiClient from '../services/apiClient';
import platforms from '../data/platforms';

export interface IPlatform {
	id: number;
	name: string;
	slug: string;
}

const usePlatforms = () =>
	useQuery({
		queryKey: ['platforms'],
		queryFn: () =>
			apiClient
				.get<IFetchResponse<IPlatform>>('platforms/lists/parents')
				.then((res) => res.data),
		staleTime: 24 * 60 * 60 * 1000, //24h
		initialData: { count: platforms.length, results: platforms },
	});
// no query
// const usePlatforms = () => useData<IPlatform>('/platforms/lists/parents');

export default usePlatforms;
