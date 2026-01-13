import { useState } from "@wordpress/element";
import "./unitdropdown.scss";

const UnitDropdown = ({ value = "px", onChange }) => {
	const [open, setOpen] = useState(false);

	return (
		<div
			className="sp-smart-button-unit-dropdown"
			onMouseEnter={() => setOpen(true)}
			onMouseLeave={() => setOpen(false)}
		>
			<div className="sp-smart-button-unit-value">{value}</div>

			{open && (
				<div className="sp-smart-button-unit-menu">
					<span
						className="sp-smart-button-unit-item"
						onClick={() => onChange("px")}
					>
						px
					</span>
					<span
						className="sp-smart-button-unit-item"
						onClick={() => onChange("em")}
					>
						em
					</span>
				</div>
			)}
		</div>
	);
};

export default UnitDropdown;
