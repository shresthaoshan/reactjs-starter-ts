import React from 'react';
import { Box, CardView, DeviceViewWrapper, Paginate } from '../styles';
import { List, Space } from 'antd';
import Meta from 'antd/es/card/Meta';
import { Link } from 'react-router-dom';

const AllMovies: React.FC = () => {
	const data = [
		{
			Title: 'How to Train Your Dragon',
			Year: '2010',
			imdbID: 'tt0892769',
			Type: 'movie',
			Poster:
				'https://m.media-amazon.com/images/M/MV5BMjA5NDQyMjc2NF5BMl5BanBnXkFtZTcwMjg5ODcyMw@@._V1_SX300.jpg',
		},
		{
			Title: 'How I Met Your Mother',
			Year: '2005–2014',
			imdbID: 'tt0460649',
			Type: 'series',
			Poster:
				'https://m.media-amazon.com/images/M/MV5BNjg1MDQ5MjQ2N15BMl5BanBnXkFtZTYwNjI5NjA3._V1_SX300.jpg',
		},
		{
			Title:
				'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
			Year: '1964',
			imdbID: 'tt0057012',
			Type: 'movie',
			Poster:
				'https://m.media-amazon.com/images/M/MV5BZWI3ZTMxNjctMjdlNS00NmUwLWFiM2YtZDUyY2I3N2MxYTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
		},
		{
			Title: 'How to Train Your Dragon 2',
			Year: '2014',
			imdbID: 'tt1646971',
			Type: 'movie',
			Poster:
				'https://m.media-amazon.com/images/M/MV5BMzMwMTAwODczN15BMl5BanBnXkFtZTgwMDk2NDA4MTE@._V1_SX300.jpg',
		},
		{
			Title: 'How the Grinch Stole Christmas',
			Year: '2000',
			imdbID: 'tt0170016',
			Type: 'movie',
			Poster:
				'https://m.media-amazon.com/images/M/MV5BNWNiNTczNzEtMjQyZC00MjFmLTkzMDMtODk4ZGMyZmE0N2E4XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
		},
		{
			Title: 'How to Lose a Guy in 10 Days',
			Year: '2003',
			imdbID: 'tt0251127',
			Type: 'movie',
			Poster:
				'https://m.media-amazon.com/images/M/MV5BMjE4NTA1NzExN15BMl5BanBnXkFtZTYwNjc3MjM3._V1_SX300.jpg',
		},
		{
			Title: 'How to Get Away with Murder',
			Year: '2014–2020',
			imdbID: 'tt3205802',
			Type: 'series',
			Poster:
				'https://m.media-amazon.com/images/M/MV5BZDQ5ZDRhMWItNjA5Ni00MDhiLTgwN2EtZjFkYzgzNjBhZTIyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg',
		},
		{
			Title: 'How to Train Your Dragon: The Hidden World',
			Year: '2019',
			imdbID: 'tt2386490',
			Type: 'movie',
			Poster:
				'https://m.media-amazon.com/images/M/MV5BMjIwMDIwNjAyOF5BMl5BanBnXkFtZTgwNDE1MDc2NTM@._V1_SX300.jpg',
		},
		{
			Title: 'How to Be Single',
			Year: '2016',
			imdbID: 'tt1292566',
			Type: 'movie',
			Poster:
				'https://m.media-amazon.com/images/M/MV5BNzI4MDMwMzUwNF5BMl5BanBnXkFtZTgwMDgyNzkyNzE@._V1_SX300.jpg',
		},
		{
			Title: 'How to Lose Friends & Alienate People',
			Year: '2008',
			imdbID: 'tt0455538',
			Type: 'movie',
			Poster:
				'https://m.media-amazon.com/images/M/MV5BMjY0MzFmMDgtY2ZiOC00M2QyLWFmOWMtOTBmZWY4OWE2YTYzXkEyXkFqcGdeQXVyMjA5MTIzMjQ@._V1_SX300.jpg',
		},
	];

	return (
		<>
			<List
				grid={{ gutter: 10, column: 5 }}
				dataSource={data}
				renderItem={(item) => (
					<List.Item>
						<Link to={`/movies/${item.imdbID}`}>
							<CardView
								hoverable
								cover={<img style={{ height: 300 }} alt='' src={item.Poster} />}
							>
								<Meta title={item.Title} />
								<DeviceViewWrapper style={{ marginTop: 6 }}>
									<span>year: {item.Year}</span> <Box>{item.Type}</Box>
								</DeviceViewWrapper>
							</CardView>
						</Link>
					</List.Item>
				)}
			/>

			<Space>
				<Paginate
					defaultCurrent={1}
					hideOnSinglePage
					total={5000}
					showSizeChanger={false}
				/>
			</Space>
		</>
	);
};

export default AllMovies;
