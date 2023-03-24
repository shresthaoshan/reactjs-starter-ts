import React, { memo, useState } from 'react';
import { Box, CardView, DeviceViewWrapper, Paginate } from '../styles';
import { List, Space } from 'antd';
import Meta from 'antd/es/card/Meta';
import { Link } from 'react-router-dom';
import { AllMovie } from '../data/Movies.model';

const AllMovies: React.FC<AllMovie> = (props) => {
	const { movies, onPageChange, page } = props;
	const [pageno, setPageno] = useState(page);

	const handleChange = (page: number) => {
		setPageno(page);
		onPageChange(page);
	};

	return (
		<>
			<List
				grid={{ gutter: 10, column: 5 }}
				dataSource={movies?.Search}
				renderItem={(item) => (
					<List.Item key={item.imdbID}>
						<Link to={`/movies/${item.imdbID}`}>
							<CardView
								hoverable
								cover={
									<img style={{ height: 300 }} alt='' src={item?.Poster} />
								}
							>
								<Meta title={item?.Title} />
								<DeviceViewWrapper style={{ marginTop: 6 }}>
									<span>year: {item?.Year}</span> <Box>{item?.Type}</Box>
								</DeviceViewWrapper>
							</CardView>
						</Link>
					</List.Item>
				)}
			/>

			<Space>
				<Paginate
					defaultCurrent={pageno}
					hideOnSinglePage
					total={Number(movies.totalResults)}
					showSizeChanger={false}
					onChange={handleChange}
				/>
			</Space>
		</>
	);
};

export default memo(AllMovies);
