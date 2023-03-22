import styled from 'styled-components';
import { Button, Card, Image, List, Pagination, Space } from 'antd';

export const DeviceViewWrapper = styled(Space)`
	display: flex;
	justify-content: space-between;
`;

export const Main = styled.div`
	display: flex;
`;

export const ButtonStyle = styled(Button)`
	margin-left: 4px;
`;

export const MoviesWrapper = styled.section`
	border: 2px solid blue;
	border-radius: 1rem;
	padding: 2rem;
`;

export const CardView = styled(Card)`
	background-color: #5b5959;
	border: none;
`;

export const Box = styled.span`
	padding: 1px;
	border: 1px solid #141414;
`;

export const ImageBox = styled(Image)`
	border-radius: 5px;
`;

export const Heading = styled.h1`
	color: white;
	margin: 0;
	text-underline-offset: 5px;
	text-decoration: underline;
`;

export const Paginate = styled(Pagination)`
	background-color: #8c918c;
	border-radius: 5px;
`;
