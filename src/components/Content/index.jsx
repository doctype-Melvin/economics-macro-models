import { styled } from "styled-components";

export default function Content({ children }) {
	return (
		<ContentContainer aria-label="Content container">
			{children}
		</ContentContainer>
	);
}

const ContentContainer = styled.section`
	flex: 1;
`;
