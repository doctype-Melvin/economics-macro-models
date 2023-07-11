import { styled } from "styled-components";

export default function Navigation() {
	return (
		<StyledNavigation>
			<StyledNavigationLink href="#" aria-label="Link to Classical Model">
				Classical
			</StyledNavigationLink>
			<StyledNavigationLink href="#" aria-label="Link to Keynesian Model">
				Keynesian
			</StyledNavigationLink>
			<StyledNavigationLink href="#" aria-label="Link to IS-LM Model">
				IS-LM
			</StyledNavigationLink>
			<StyledNavigationLink href="#" aria-label="Link to AS-AD Model">
				AS-AD
			</StyledNavigationLink>
			<StyledNavigationLink href="#" aria-label="Link to New Keynesian Model">
				New Keynesian
			</StyledNavigationLink>
			<StyledNavigationLink href="#" aria-label="Link to DSGE Model">
				DSGE
			</StyledNavigationLink>
		</StyledNavigation>
	);
}

const StyledNavigation = styled.nav`
	display: grid;
	grid-template-columns: 100%;
	grid-template-rows: auto;
	background-color: lightgray;
	padding: 0.35rem;
	row-gap: 0.5rem;
`;

const StyledNavigationLink = styled.a`
	text-decoration: none;
	color: black;
`;
