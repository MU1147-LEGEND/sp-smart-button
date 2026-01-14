export default function TabToggle({ value, onChange, tabOptions }) {

	return (
		<div className="sp-toggle">
			{tabOptions.map((option) => (
				<button
					key={option}
					type="button"
					className={`sp-toggle__btn ${value === option ? "is-active" : ""}`}
					onClick={() => onChange(option)}
				>
					{option.charAt(0).toUpperCase() + option.slice(1)}
				</button>
			))}
		</div>
	);
}
