import IPlatform from './IPlatform';
import IPublisher from './IPublisher';

export default interface IGame {
	id: number;
	name: string;
	slug: string;
	genres: IGame[];
	publishers: IPublisher[];
	description_raw: string;
	background_image: string;
	parent_platforms: { platform: IPlatform }[];
	metacritic: number;
	rating_top: number;
}
