import { Button, Popover } from "@wordpress/components";
import { useState } from "@wordpress/element";
import * as FaIcons from "react-icons/fa";
import IconPicker from "../iconPicker";

const IconLibraryPopup = ({ value = "", onChange }) => {
	const [open, setOpen] = useState(false);

	const Icon = value && typeof value === "string" ? FaIcons[value] : null;

	return (
		<div className="sp-icon-select">
			<Button
				className="sp-icon-select-trigger"
				onClick={(e) => {
					
					setOpen((prev) => !prev);
				}}
				aria-expanded={open}
			>
				{Icon ? <Icon /> : <span className="sp-icon-select-empty">+</span>}
			</Button>

			{open && (
				<Popover
					position="bottom left"
					onClose={() => setOpen(false)}
					focusOnMount="container"
				>
					<div
						className="sp-icon-select-popover"
						onClick={(e) => e.stopPropagation()}
					>
						<IconPicker
							value={value}
							onChange={(newIcon) => {
								onChange?.(newIcon);
								setOpen(false); //close after selected
							}}
						/>
					</div>
				</Popover>
			)}
		</div>
	);
};

export default IconLibraryPopup;
