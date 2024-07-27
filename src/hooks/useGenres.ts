import { useEffect, useState } from 'react';
import apiClient from '../services/apiClient';
import { CanceledError } from 'axios';

interface IGenre {
	id: number;
	name: string;
}

interface IFetchGenresResponse {
	count: number;
	results: IGenre[];
}

const useGenres = () => {
	const [genres, setGenres] = useState<IGenre[]>([]);
	const [error, setError] = useState('');
	const [isLoading, setIsLoading] = useState<boolean>(false);

	useEffect(() => {
		const controller = new AbortController();

		setIsLoading(true);
		apiClient
			.get<IFetchGenresResponse>('/genres', { signal: controller.signal })
			.then((res) => {
				setGenres(res.data.results);
				setIsLoading(false);
			})
			.catch((err) => {
				if (err instanceof CanceledError) return;
				setError(err.message);
				setIsLoading(false);
			});

		return () => controller.abort();
	}, []);

	return { genres, error, isLoading };
};

export default useGenres;
