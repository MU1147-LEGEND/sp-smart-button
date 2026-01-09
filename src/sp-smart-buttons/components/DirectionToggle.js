export default function DirectionToggle({ value, onChange }) {
	const options = ["horizontal", "vertical"];

	return (
		<div className="sp-toggle">
			{options.map((option) => (
				<button
					key={option}
					type="button"
					className={`sp-toggle__btn ${value === option ? "is-active" : ""}`}
					onClick={() => onChange(option)}
				>
					{option === "horizontal" ? "Horizontal" : "Vertical"}
				</button>
			))}
		</div>
	);
}
