import React, { useState } from 'react';
import { Input } from 'antd';
import { Link } from 'react-router-dom';
import { ButtonStyle, DeviceViewWrapper, Main, MoviesWrapper } from './styles';
import { useMovies } from './hooks/useMovies';
import { useAppSelector } from '../../redux/store';
import AllMovies from './components/AllMovies';

const MoviesView = (): JSX.Element => {
	const [search, setSearch] = useState('');
	const [page, setPage] = useState(1);

	const { GetMovies } = useMovies();

	const handleSearch = (e: any) => {
		e.prventDefault;
		setPage(1);
		if (search === '') {
			GetMovies('new', 1);
		} else {
			GetMovies(search, 1);
		}
	};

	const onPageChange = (pageno: number) => {
		setPage(pageno);
		if (search === '') {
			GetMovies('new', pageno);
		} else {
			GetMovies(search, pageno);
		}
	};

	React.useEffect(() => {
		GetMovies('new', 1);
	}, []);

	const movies = useAppSelector((state) => state.movies);

	return (
		<>
			<DeviceViewWrapper>
				<header>
					<Link to='/'>Back to Home</Link>

					<h1>Search for Movies</h1>
				</header>
				<Main>
					<Input
						value={search}
						placeholder='search...'
						onChange={(e) => setSearch(e.target.value)}
					/>
					<ButtonStyle type='primary' onClick={handleSearch}>
						Search
					</ButtonStyle>
				</Main>
			</DeviceViewWrapper>
			<MoviesWrapper>
				{movies?.status === 'loading' ? (
					<h1>Loading...</h1>
				) : (
					<AllMovies
						movies={movies?.data}
						onPageChange={onPageChange}
						page={page}
					/>
				)}
			</MoviesWrapper>
		</>
	);
};

export default MoviesView;
