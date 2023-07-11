import { useRef, useEffect } from "react";
import { styled } from "styled-components";

export default function Canvas() {
	const canvasRef = useRef(null);

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

	return <StyledCanvas ref={canvasRef} width={250} height={250}></StyledCanvas>;
}

const StyledCanvas = styled.canvas`
	background-color: lightcyan;
	grid-column: 2 / 3;
	justify-self: center;
	padding: 20px;
`;
