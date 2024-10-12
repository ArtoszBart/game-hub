import { useQuery } from '@tanstack/react-query';
import ms from 'ms';
import genres from '../data/genres';
import APIClient from '../services/apiClient';
import { IGenre } from '../models/IGenre';

const apiClient = new APIClient<IGenre>('/genres');

const useGenres = () =>
	useQuery({
		queryKey: ['genres'],
		queryFn: apiClient.getAll,
		staleTime: ms('24h'),
		initialData: genres,
	});

export default useGenres;
