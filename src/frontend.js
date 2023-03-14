import "./frontend.scss";
import React from "react";
import ReactDOM from "react-dom";
import SVGLotus from "./svgComponents/svgLotus";
import SVGBatch from "./svgComponents/svgBatch";
import SVGBeauty from "./svgComponents/svgBeauty";
import SVGTrusted from "./svgComponents/svgTrusted";

const lasaphireUpdateMe = document.querySelectorAll(".lasaphire-update-me");

lasaphireUpdateMe.forEach(function (lasaphire) {
	const data = JSON.parse(lasaphire.querySelector("pre").innerHTML);
	ReactDOM.render(<LSIcons {...data} />, lasaphire);
	lasaphire.classList.remove("lasaphire-update-me");
});

function LSIcons(props) {
	return (
		<div className="lasaphire-frontend">
			<div className="lasaphire-feature">
				<div className="lasaphire-svgicon lotus">
					<SVGLotus />
				</div>
				<h5>{props.titles[0]}</h5>
				<p>{props.contents[0]}</p>
			</div>
			<div className="lasaphire-feature">
				<div className="lasaphire-svgicon batch">
					<SVGBatch />
				</div>
				<h5>{props.titles[1]}</h5>
				<p>{props.contents[1]}</p>
			</div>
			<div className="lasaphire-feature">
				<div className="lasaphire-svgicon beauty">
					<SVGBeauty />
				</div>
				<h5>{props.titles[2]}</h5>
				<p>{props.contents[2]}</p>
			</div>
			<div className="lasaphire-feature">
				<div className="lasaphire-svgicon trusted">
					<SVGTrusted />
				</div>
				<h5>{props.titles[3]}</h5>
				<p>{props.contents[3]}</p>
			</div>
		</div>
	);
}
