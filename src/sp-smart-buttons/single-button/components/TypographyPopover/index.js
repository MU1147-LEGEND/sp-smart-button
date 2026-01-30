import { Button, Popover } from "@wordpress/components";
import { useState } from "@wordpress/element";
import TypographyPanel from "./TypographyPanel";

const TypographyPopover = ({ typography, onChange }) => {
	const [open, setOpen] = useState(false);

	return (
		<div className="sp-typography-control">
			<div className="sp-typography-header">
				<span className="sp-typography-label">Typography</span>

				<Button className="sp-typography-trigger" onClick={() => setOpen(true)}>
					Aa
				</Button>
			</div>

			{open && (
				<Popover
					position="bottom right"
					onClose={() => setOpen(false)}
					focusOnMount="container"
				>
					<div className="sp-typography-popover">
						<TypographyPanel value={typography} onChange={onChange} />
					</div>
				</Popover>
			)}
		</div>
	);
};

export default TypographyPopover;
