import "./styles.css";

export default function Content({ children }) {
	return (
		<section aria-label="Content container" className="content-container">
			{children}
		</section>
	);
}
