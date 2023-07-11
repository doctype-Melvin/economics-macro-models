import { styled } from "styled-components";

export default function Dummy() {
	return (
		<PageContentContainer className="page-content">
			<h1>Hello World!</h1>
			<p>This is a dummy page</p>
		</PageContentContainer>
	);
}

const PageContentContainer = styled.section`
	flex: 2;
`;
