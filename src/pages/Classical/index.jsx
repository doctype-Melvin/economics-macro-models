import { styled } from "styled-components";

export default function ClassicalPage() {
	return (
		<SinglePageContainer>
			<PageTitle>Classical Model</PageTitle>
			<PageDescription>
				This page will discuss the Classical Model of economics.
			</PageDescription>
			<CoordinateContainer />
		</SinglePageContainer>
	);
}

const SinglePageContainer = styled.section`
	display: grid;
	grid-template-columns: 0.1fr 1fr 0.1fr;
	grid-template-rows: auto;
`;

const PageTitle = styled.h1`
	grid-column: 2 / 3;
	text-align: center;
`;

const PageDescription = styled.p`
	grid-column: 2 / 3;
`;

const CoordinateContainer = styled.div`
	height: 15rem;
	width: 15rem;
	background-color: lightcyan;
	grid-column: 2 / 3;
	justify-self: center;
`;
