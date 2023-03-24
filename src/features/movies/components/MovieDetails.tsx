import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { DeviceViewWrapper, Heading, ImageBox } from '../styles';
import Meta from 'antd/es/card/Meta';
import { Descriptions, List, Space } from 'antd';
import { useAppSelector } from '../../../redux/store';
import { useMovies } from '../hooks/useMovies';
import { MovieDetailsProps, Rating } from '../data/Movies.model';

const MovieDetails = () => {
	const { GetMovieDetails } = useMovies();

	const { id } = useParams();

	React.useEffect(() => {
		GetMovieDetails(id);
	}, []);

	const movies = useAppSelector((state) => state.movies);
	console.log(movies);

	const data: MovieDetailsProps = movies?.data;

	console.log(data);

	const details = (
		<Descriptions
			column={4}
			labelStyle={{ color: '#6c757d', fontSize: 15, fontWeight: 'bold' }}
			contentStyle={{ color: '#6c757d' }}
		>
			<Descriptions.Item label='Year'>{data?.Year}</Descriptions.Item>
			<Descriptions.Item label='Rated'>{data?.Rated}</Descriptions.Item>
			<Descriptions.Item label='Released'>{data?.Released}</Descriptions.Item>
			<Descriptions.Item label='Type'>{data?.Type}</Descriptions.Item>
			<Descriptions.Item label='BoxOffice'>{data?.BoxOffice}</Descriptions.Item>
			<Descriptions.Item label='DVD'>{data?.DVD}</Descriptions.Item>
			<Descriptions.Item label='Production'>
				{data?.Production}
			</Descriptions.Item>
			<Descriptions.Item label='Runtime'>{data?.Runtime}</Descriptions.Item>
		</Descriptions>
	);

	const Ratings = (
		<List
			dataSource={data?.Ratings}
			grid={{ column: 3 }}
			renderItem={(item: Rating) => (
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
			<Descriptions.Item label='Metascore'>{data?.Metascore}</Descriptions.Item>
			<Descriptions.Item label='imdbRating'>
				{data?.imdbRating}
			</Descriptions.Item>
			<Descriptions.Item label='imdbVotes'>{data?.imdbVotes}</Descriptions.Item>
			<Descriptions.Item>{Ratings}</Descriptions.Item>
		</Descriptions>
	);

	return (
		<>
			{movies?.status === 'loading' ? (
				<h1>Loading...</h1>
			) : (
				<>
					<DeviceViewWrapper
						style={{ background: '#020916', borderRadius: 5, padding: 5 }}
					>
						<ImageBox width={400} src={data?.Poster} />
						<div>
							<Space>
								<Descriptions
									column={1}
									title={<Heading>{data?.Title}</Heading>}
									size='small'
									labelStyle={{
										color: '#6c757d',
										fontSize: 15,
										fontWeight: 'bold',
									}}
									contentStyle={{ color: '#6c757d' }}
								>
									<Descriptions.Item>{details}</Descriptions.Item>

									<Descriptions.Item>{data?.Plot}</Descriptions.Item>
									<Descriptions.Item label='Genre'>
										{data?.Genre}
									</Descriptions.Item>
									<Descriptions.Item label='Language'>
										{data?.Language}
									</Descriptions.Item>
									<Descriptions.Item label='Actors'>
										{data?.Actors}
									</Descriptions.Item>
									<Descriptions.Item label='Director'>
										{data?.Director}
									</Descriptions.Item>
									<Descriptions.Item label='Writer'>
										{data?.Writer}
									</Descriptions.Item>

									<Descriptions.Item label='Country'>
										{data?.Country}
									</Descriptions.Item>
									<Descriptions.Item label='Awards'>
										{data?.Awards}
									</Descriptions.Item>
									<Descriptions.Item>{displayRatings}</Descriptions.Item>
								</Descriptions>
							</Space>
						</div>
					</DeviceViewWrapper>
					<Link to='/movies'>Go back to Movies List</Link>
				</>
			)}
		</>
	);
};

export default MovieDetails;
