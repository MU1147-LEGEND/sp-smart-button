import { Button } from "@wordpress/components";
import { MediaUpload, MediaUploadCheck } from "@wordpress/block-editor";
import { useMemo } from "@wordpress/element";

const ALLOWED_TYPES = [
	"image/svg+xml",
	"image/png",
	"image/jpeg",
	"image/webp",
];

const CustomIconPicker = ({
	value = { id: 0, url: "", alt: "", mime: "" },
	onChange,
	label = "Custom Icon",
}) => {
	const hasIcon = !!value?.url;

	const preview = useMemo(() => {
		if (!value?.url) return null;

		return (
			<img
				className="sp-custom-icon-preview"
				src={value.url}
				alt={value.alt || "Icon"}
			/>
		);
	}, [value]);

	return (
		<div className="sp-custom-icon-picker">
			<div className="sp-custom-icon-top">
				<span className="sp-custom-icon-label">{label}</span>

				{hasIcon && (
					<Button
						isDestructive
						variant="tertiary"
						size="small"
						onClick={() => onChange?.({ id: 0, url: "", alt: "", mime: "" })}
					>
						Remove
					</Button>
				)}
			</div>

			<div className="sp-custom-icon-body">
				<div className="sp-custom-icon-box">
					{hasIcon ? preview : <span className="sp-custom-icon-empty">+</span>}
				</div>

				<MediaUploadCheck>
					<MediaUpload
						onSelect={(media) => {
							onChange?.({
								id: media?.id || 0,
								url: media?.url || "",
								alt: media?.alt || "",
								mime: media?.mime || "",
							});
						}}
						allowedTypes={ALLOWED_TYPES}
						value={value?.id || 0}
						render={({ open }) => (
							<Button
								className="sp-custom-icon-btn"
								variant="secondary"
								onClick={open}
							>
								{hasIcon ? "Replace Icon" : "Upload Icon"}
							</Button>
						)}
					/>
				</MediaUploadCheck>
			</div>
		</div>
	);
};

export default CustomIconPicker;
