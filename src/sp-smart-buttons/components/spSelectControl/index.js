import { SelectControl } from "@wordpress/components";
import "./style.scss";

/**
 * @param {string} label
 * @param {string} value
 * @param {Array<{label:string,value:string}>} options
 * @param {(val:string)=>void} onChange
 * @param {string} className
 * @param {number|string} width
 */
const SpSelectControl = ({
	label = "Select",
	value = "",
	options = [],
	onChange,
	className = "",
	width = 80,
}) => {
	return (
		<div className={`sp-smart-button-select-row ${className}`}>
			<span className="sp-smart-button-select-label">{label}</span>

			<div
				className="sp-smart-button-select-field"
				style={{ width: typeof width === "number" ? `${width}px` : width }}
			>
				<SelectControl
					value={value}
					options={options}
					onChange={(val) => onChange?.(val)}
				/>
			</div>
		</div>
	);
};

export default SpSelectControl;
