import { styled } from "styled-components";
import Canvas from "../../components/Canvas";

export default function ClassicalPage() {
	return (
		<SinglePageContainer>
			<PageTitle>Classical Model</PageTitle>
			<PageDescription>
				This page will discuss the Classical Model of economics.
			</PageDescription>
			<Canvas />
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
