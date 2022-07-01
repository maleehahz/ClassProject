/*
 * For Tips and Advanced Usage read this Blog Post
 * https://levelup.gitconnected.com/integrating-p5-sketches-into-your-react-app-de44a8c74e91
 */
import React from 'react';
import Sketch from 'react-p5';

class Obj2 extends React.Component {

	setup = (p5, parentRef) => {
		let cnv = p5.createCanvas(200, 200).parent(parentRef);
        cnv.position(300, 400)
        p5.frameRate(10)
	};

	draw = (p5) => {
		let x = Math.floor(Math.random() * 150)
        let y = Math.floor(Math.random() * 150)

        p5.background("#baa7b0ff");
        p5.fill(255);
        p5.rect(x, y, 50, 50);
	};

	render() {
		return (
			<div className="Obj">
				<Sketch setup={this.setup} draw={this.draw} />
			</div>
		);
	}
}

export default Obj2;