import { useQuery } from '@tanstack/react-query';
import ms from 'ms';
import platforms from '../data/platforms';
import APIClient from '../services/apiClient';
import IPlatform from '../models/IPlatform';

const apiClient = new APIClient<IPlatform>('/platforms/lists/parents');

const usePlatforms = () =>
	useQuery({
		queryKey: ['platforms'],
		queryFn: apiClient.getAll,
		staleTime: ms('24h'),
		initialData: platforms,
	});
// no query
// const usePlatforms = () => useData<IPlatform>('/platforms/lists/parents');

export default usePlatforms;
