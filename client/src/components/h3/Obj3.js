import React from 'react';
import Sketch from 'react-p5';

class Obj3 extends React.Component {

    angle = 0.0;

	setup = (p5, parentRef) => {
		let cnv = p5.createCanvas(200, 200).parent(parentRef);
        cnv.position(550, 400)
        cnv.background("#b1b5c8ff")
        cnv.mousePressed((event) => {
            p5.background("#b1b5c8ff")
        })

	};

	draw = (p5) => {
		p5.translate(p5.mouseX, p5.mouseY)
        p5.rotate(this.angle)
        p5.rect(-15, -15, 15, 15)
        this.angle += 0.1;
	};

	render() {
		return (
			<div className="Obj">
				<Sketch setup={this.setup} draw={this.draw} />
			</div>
		);
	}
}

export default Obj3;