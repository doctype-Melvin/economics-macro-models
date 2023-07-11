import { useRef, useEffect } from "react";
import { styled } from "styled-components";

export default function Canvas() {
	const canvasRef = useRef(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		const context = canvas.getContext("2d");

		const width = canvas.width;
		const height = canvas.height;
		const centerX = width / 2;
		const centerY = height / 2;

		context.clearRect(0, 0, width, height);

		context.beginPath();
		context.moveTo(0, centerY);
		context.lineTo(width, centerY);
		context.moveTo(centerX, 0);
		context.lineTo(centerX, width);
		context.strokeStyle = "black";
		context.lineWidth = 2;
		context.stroke();
	}, []);

	return <StyledCanvas ref={canvasRef} width={250} height={250}></StyledCanvas>;
}

const StyledCanvas = styled.canvas`
	background-color: lightcyan;
	grid-column: 2 / 3;
	justify-self: center;
`;
