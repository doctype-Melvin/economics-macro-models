import { styled } from "styled-components";
import { GiHamburgerMenu as Burger } from "react-icons/gi";
import { TfiClose as CloseIcon } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navigation() {
	const [expandNavigation, setExpandNavigation] = useState(false);

	const handleToggle = () => setExpandNavigation(!expandNavigation);

	return (
		<StyledNavigation>
			{expandNavigation && (
				<>
					<StyledNavigationLink
						to="/classical"
						aria-label="Link to Classical Model"
					>
						Classical
					</StyledNavigationLink>
					<StyledNavigationLink
						to="/keynesian"
						aria-label="Link to Keynesian Model"
					>
						Keynesian
					</StyledNavigationLink>
					<StyledNavigationLink to="/is-lm" aria-label="Link to IS-LM Model">
						IS-LM
					</StyledNavigationLink>
					<StyledNavigationLink to="/as-ad" aria-label="Link to AS-AD Model">
						AS-AD
					</StyledNavigationLink>
					<StyledNavigationLink
						to="/new-keynesian"
						aria-label="Link to New Keynesian Model"
					>
						New Keynesian
					</StyledNavigationLink>
					<StyledNavigationLink to="/dsge" aria-label="Link to DSGE Model">
						DSGE
					</StyledNavigationLink>
				</>
			)}
			<ToggleButton onClick={handleToggle}>
				{expandNavigation ? <CloseIcon /> : <Burger />}
			</ToggleButton>
		</StyledNavigation>
	);
}

const StyledNavigation = styled.nav`
	display: grid;
	grid-template-columns: 1fr 0.2fr;
	grid-template-rows: auto;
	background-color: lightgray;
	padding: 0.35rem;
	row-gap: 0.5rem;
`;

const StyledNavigationLink = styled(Link)`
	text-decoration: none;
	color: black;
	grid-column: 1 / 2;
`;

const ToggleButton = styled.button`
	background-color: transparent;
	font-size: 1.25rem;
	height: 35px;
	border: none;
	grid-column: 2 / 3;
	grid-row: 1 / 3;
`;
