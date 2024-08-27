import { useQuery } from '@tanstack/react-query';
import platforms from '../data/platforms';
import APIClient from '../services/apiClient';

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
		initialData: platforms,
	});
// no query
// const usePlatforms = () => useData<IPlatform>('/platforms/lists/parents');

export default usePlatforms;
