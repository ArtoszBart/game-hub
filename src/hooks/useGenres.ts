import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/apiClient';
import genres from '../data/genres';

const apiClient = new APIClient<IGenre>('/genres');

export interface IGenre {
	id: number;
	name: string;
	image_background: string;
}

const useGenres = () =>
	useQuery({
		queryKey: ['genres'],
		queryFn: apiClient.getAll,
		staleTime: 24 * 60 * 60 * 1000, // 24h
		initialData: genres,
	});

export default useGenres;
