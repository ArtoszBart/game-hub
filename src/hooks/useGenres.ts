import { useQuery } from '@tanstack/react-query';
import apiClient from '../services/apiClient';
import { IFetchResponse } from './useData';
import genres from '../data/genres';

export interface IGenre {
	id: number;
	name: string;
	image_background: string;
}

const useGenres = () =>
	useQuery({
		queryKey: ['genres'],
		queryFn: () =>
			apiClient
				.get<IFetchResponse<IGenre>>('/genres')
				.then((res) => res.data),
		staleTime: 24 * 60 * 60 * 1000, // 24h
		initialData: { count: genres.length, results: genres },
	});

export default useGenres;
