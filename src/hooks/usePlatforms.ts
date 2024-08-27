import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/apiClient';
import platforms from '../data/platforms';

const apiClient = new APIClient<IPlatform>('/platforms/lists/parents');

export interface IPlatform {
	id: number;
	name: string;
	slug: string;
}

const usePlatforms = () =>
	useQuery({
		queryKey: ['platforms'],
		queryFn: apiClient.getAll,
		staleTime: 24 * 60 * 60 * 1000, //24h
		initialData: { count: platforms.length, results: platforms },
	});
// no query
// const usePlatforms = () => useData<IPlatform>('/platforms/lists/parents');

export default usePlatforms;
