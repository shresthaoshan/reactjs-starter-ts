import React from 'react';
import { useParams } from 'react-router-dom';
import { DeviceViewWrapper, Heading, ImageBox } from '../styles';
import Meta from 'antd/es/card/Meta';
import { Descriptions, List, Space } from 'antd';

const MovieDetails = () => {
	const data = {
		Title: 'How to Train Your Dragon',
		Year: '2010',
		Rated: 'PG',
		Released: '26 Mar 2010',
		Runtime: '98 min',
		Genre: 'Animation, Action, Adventure',
		Director: 'Dean DeBlois, Chris Sanders',
		Writer: 'Will Davies, Dean DeBlois, Chris Sanders',
		Actors: 'Jay Baruchel, Gerard Butler, Christopher Mintz-Plasse',
		Plot: 'A hapless young Viking who aspires to hunt dragons becomes the unlikely friend of a young dragon himself, and learns there may be more to the creatures than he assumed.',
		Language: 'English',
		Country: 'United States',
		Awards: 'Nominated for 2 Oscars. 25 wins & 63 nominations total',
		Poster:
			'https://m.media-amazon.com/images/M/MV5BMjA5NDQyMjc2NF5BMl5BanBnXkFtZTcwMjg5ODcyMw@@._V1_SX300.jpg',
		Ratings: [
			{ Source: 'Internet Movie Database', Value: '8.1/10' },
			{ Source: 'Rotten Tomatoes', Value: '99%' },
			{ Source: 'Metacritic', Value: '75/100' },
		],
		Metascore: '75',
		imdbRating: '8.1',
		imdbVotes: '750,584',
		imdbID: 'tt0892769',
		Type: 'movie',
		DVD: '17 Aug 2010',
		BoxOffice: '$217,581,231',
		Production: 'N/A',
		Website: 'N/A',
		Response: 'True',
	};

	const details = (
		<Descriptions
			column={4}
			labelStyle={{ color: '#6c757d', fontSize: 15, fontWeight: 'bold' }}
			contentStyle={{ color: '#6c757d' }}
		>
			<Descriptions.Item label='Year'>{data.Year}</Descriptions.Item>
			<Descriptions.Item label='Rated'>{data.Rated}</Descriptions.Item>
			<Descriptions.Item label='Released'>{data.Released}</Descriptions.Item>
			<Descriptions.Item label='Type'>{data.Type}</Descriptions.Item>
			<Descriptions.Item label='BoxOffice'>{data.BoxOffice}</Descriptions.Item>
			<Descriptions.Item label='DVD'>{data.DVD}</Descriptions.Item>
			<Descriptions.Item label='Production'>
				{data.Production}
			</Descriptions.Item>
			<Descriptions.Item label='Runtime'>{data.Runtime}</Descriptions.Item>
		</Descriptions>
	);

	const Ratings = (
		<List
			dataSource={data.Ratings}
			grid={{ column: 3 }}
			renderItem={(item) => (
				<Descriptions
					labelStyle={{ color: '#6c757d', fontSize: 15, fontWeight: 'bold' }}
					contentStyle={{ color: '#6c757d' }}
				>
					<Descriptions.Item label={item.Source}>
						{item.Value}
					</Descriptions.Item>
				</Descriptions>
			)}
		/>
	);

	const displayRatings = (
		<Descriptions
			column={3}
			title={<Heading>Ratings</Heading>}
			labelStyle={{ color: '#6c757d', fontSize: 15, fontWeight: 'bold' }}
			contentStyle={{ color: '#6c757d' }}
		>
			<Descriptions.Item label='Metascore'>{data.Metascore}</Descriptions.Item>
			<Descriptions.Item label='imdbRating'>
				{data.imdbRating}
			</Descriptions.Item>
			<Descriptions.Item label='imdbVotes'>{data.imdbVotes}</Descriptions.Item>
			<Descriptions.Item>{Ratings}</Descriptions.Item>
		</Descriptions>
	);

	const { id } = useParams();
	return (
		<DeviceViewWrapper
			style={{ background: '#020916', borderRadius: 5, padding: 5 }}
		>
			<ImageBox width={400} src={data.Poster} />
			<div>
				<Space>
					<Descriptions
						column={1}
						title={<Heading>{data.Title}</Heading>}
						size='small'
						labelStyle={{ color: '#6c757d', fontSize: 15, fontWeight: 'bold' }}
						contentStyle={{ color: '#6c757d' }}
					>
						<Descriptions.Item>{details}</Descriptions.Item>

						<Descriptions.Item>{data.Plot}</Descriptions.Item>
						<Descriptions.Item label='Genre'>{data.Genre}</Descriptions.Item>
						<Descriptions.Item label='Language'>
							{data.Language}
						</Descriptions.Item>
						<Descriptions.Item label='Actors'>{data.Actors}</Descriptions.Item>
						<Descriptions.Item label='Director'>
							{data.Director}
						</Descriptions.Item>
						<Descriptions.Item label='Writer'>{data.Writer}</Descriptions.Item>

						<Descriptions.Item label='Country'>
							{data.Country}
						</Descriptions.Item>
						<Descriptions.Item label='Awards'>{data.Awards}</Descriptions.Item>
						<Descriptions.Item>{displayRatings}</Descriptions.Item>
					</Descriptions>
				</Space>
			</div>
		</DeviceViewWrapper>
	);
};

export default MovieDetails;
