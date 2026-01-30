import { ReactComponent as Capa } from "../../assets/Capa_1.svg";
import { ReactComponent as Logo } from "../../assets/Logo.svg";

const PanelBanner = ({ label }) => {
	return (
		<>
			<div className="sp-panel-banner">
				<div className="sp-panel-banner-left">
					<Logo />
					<p>{label}</p>
				</div>
				<div className="sp-panel-banner-right">
					<Capa />
				</div>
			</div>
		</>
	);
};

export default PanelBanner;
