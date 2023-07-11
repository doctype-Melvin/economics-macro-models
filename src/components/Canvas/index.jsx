import { useRef, useEffect, useState } from "react";
import { styled } from "styled-components";

export default function Canvas() {
	const [coordinates, setCoordinates] = useState([125, 125]);
	const canvasRef = useRef(null);

	const handleXChange = (newX) =>
		setCoordinates((prevState) => [newX, prevState[1]]);

	const handleYChange = (newY) =>
		setCoordinates((prevState) => [prevState[0], newY]);

	useEffect(() => {
		const canvas = canvasRef.current;
		const context = canvas.getContext("2d");

		const width = canvas.width;
		const height = canvas.height;

		context.clearRect(0, 0, width, height);

		context.beginPath();
		context.moveTo(0, height - 1.5);
		context.lineTo(width, height - 1.5);
		context.moveTo(1.5, height);
		context.lineTo(1.5, 1.5);
		context.strokeStyle = "black";
		context.lineWidth = 3;
		context.stroke();
	}, []);

	useEffect(() => {
		const canvas = canvasRef.current;
		const context = canvas.getContext("2d");

		const canvasX = coordinates[0];
		const canvasY = coordinates[1];

		context.clearRect(5, 0, canvas.width - 5, canvas.height - 5);

		context.beginPath();
		context.arc(canvasX, canvasY, 5, 0, 2 * Math.PI);
		context.fillStyle = "crimson";
		context.fill();
	}, [coordinates]);

	return (
		<StyledSection>
			<StyledCanvas ref={canvasRef} width={250} height={250}></StyledCanvas>
			<input
				type="range"
				id="xValue"
				min="10"
				max="230"
				defaultValue="125"
				onChange={(event) => handleXChange(event.target.value)}
			/>
			<p>
				X Value: <output>{coordinates[0]}</output>{" "}
			</p>
			<input
				type="range"
				id="xValue"
				min="10"
				max="230"
				defaultValue="125"
				onChange={(event) => handleYChange(event.target.value)}
			/>
			<p>
				Y Value: <output>{coordinates[1]}</output>{" "}
			</p>
		</StyledSection>
	);
}

const StyledCanvas = styled.canvas`
	background-color: lightcyan;
	justify-self: center;
	padding: 20px;
`;

const StyledSection = styled.section`
	grid-column: 2 / 3;
`;
