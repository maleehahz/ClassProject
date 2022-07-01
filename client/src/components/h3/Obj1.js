/*
 * For Tips and Advanced Usage read this Blog Post
 * https://levelup.gitconnected.com/integrating-p5-sketches-into-your-react-app-de44a8c74e91
 */
import React from 'react';
import Sketch from 'react-p5';

class Obj1 extends React.Component {

	setup = (p5, parentRef) => {
		let cnv = p5.createCanvas(200, 200).parent(parentRef);
        cnv.background(0)
		cnv.position(50, 400)
        cnv.mousePressed((event) => {
            p5.fill(Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256));
            p5.rect(2, 2, 196, 196);
        })
	};

	draw = (p5) => {
		p5.textSize(30)
        p5.text('click here', 200/5, 200/5)
        p5.fill(255)
	};

	render() {
		return (
			<div className="Obj">
				<Sketch setup={this.setup} draw={this.draw} />
			</div>
		);
	}
}

export default Obj1;