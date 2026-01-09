import { InspectorControls, useBlockProps } from "@wordpress/block-editor";
import Button from "./components/Button";
import { Panel } from "@wordpress/components";
import { PanelBody } from "@wordpress/components";
import ButtonContainer from "./components/ButtonContainer";
import selectedIcon from "./assets/selected.svg";
import { __ } from "@wordpress/i18n";

export default function Edit({ attributes, setAttributes }) {
	const { variant } = attributes;

	const handleButtonClick = (btnVariant) => {
		setAttributes({ variant: btnVariant });
	};

	const variants = ["default", "ghost", "gradient"];

	return (
		<div {...useBlockProps()}>
			<InspectorControls>
				<Panel>
					{/* button style */}
					<PanelBody title={__("General", "sp-smart-button")}>
						<h3>Buttons Style</h3>
						<div className="inspector-variant-wrapper">
							{variants.map((value) => (
								<ButtonContainer
									variant={variant}
									currentVariant={value}
									handleButtonClick={handleButtonClick}
									selectedIcon={selectedIcon}
								/>
							))}
						</div>
					</PanelBody>

					{/* button text */}
					<PanelBody
						title={__("Button Label", "sp-smart-button")}
						initialOpen={false}
					>
						<h3>Button Label</h3>
					</PanelBody>

					{/* button icon */}
					<PanelBody title={__("Icon", "sp-smart-button")} initialOpen={false}>
						<h3>Icon</h3>
					</PanelBody>
				</Panel>
			</InspectorControls>
			<Button variant={variant}>Click Me</Button>
		</div>
	);
}
