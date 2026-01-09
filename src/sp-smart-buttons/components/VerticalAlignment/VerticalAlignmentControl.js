import { Tooltip } from "@wordpress/components";
import "../../assets/css/align-button-style.scss";
import AlignCenterIcon from "./icons/AlignCenterIcon";
import AlignLeftIcon from "./icons/AlignLeftIcon";
import AlignRightIcon from "./icons/AlignRightIcon";

const OPTIONS = [
	{
		value: "flex-start",
		label: "Align left",
		Icon: AlignLeftIcon,
	},
	{
		value: "vertical-center",
		label: "Align center",
		Icon: AlignCenterIcon,
	},
	{
		value: "flex-end",
		label: "Align right",
		Icon: AlignRightIcon,
	},
];

export default function VerticalAlignmentControl({
	value = "flex-start",
	onChange,
}) {
	return (
		<div className="sp-align-control">
			{OPTIONS.map(({ value: option, label, Icon }) => (
				<Tooltip key={option} text={label}>
					<button
						type="button"
						className={`sp-align-control__btn vertical-control-btn ${
							value === option ? "is-active" : ""
						}`}
						onClick={() => onChange(option)}
						aria-pressed={value === option}
						aria-label={label}
					>
						<Icon className="sp-align-control__icon" />
					</button>
				</Tooltip>
			))}
		</div>
	);
}
