import { styled } from "styled-components";

export default function Footer() {
	return (
		<FooterContainer>
			<span>
				{" "}
				&copy; 2023{" "}
				<StyledFooterLink
					aria-label="Link to doctype-Melvin's Github Profile"
					href="https://www.github.com/doctype-Melvin"
					target="_blank"
					rel="noreferrer"
				>
					doctype-Melvin
				</StyledFooterLink>
			</span>
		</FooterContainer>
	);
}

const FooterContainer = styled.section`
	text-align: center;
`;

const StyledFooterLink = styled.a`
	text-decoration: none;
	color: crimson;
`;
