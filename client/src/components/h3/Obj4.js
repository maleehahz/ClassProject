/*
 * For Tips and Advanced Usage read this Blog Post
 * https://levelup.gitconnected.com/integrating-p5-sketches-into-your-react-app-de44a8c74e91
 */
import React from 'react';
import Sketch from 'react-p5';

class Obj4 extends React.Component {

	setup = (p5, parentRef) => {
		let cnv = p5.createCanvas(200, 200).parent(parentRef);
        cnv.position(800, 400)
	};

	draw = (p5) => {
		p5.background("#b2abbfff")
        p5.push()
        p5.translate(100, 100)
        p5.noStroke()
        const colors = ['#baa7b0ff', '#b1b5c8ff', '#bfd5e2ff', '#c7ebf0ff']
        for (let i = 0; i < 8; i++) {
            let color = colors[Math.floor(Math.random() * 4)]
            p5.fill(color)
            p5.ellipse(0, 0, 20, 150)
            p5.rotate(p5.radians(45))
        }
        p5.pop()
        p5.noStroke()
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

export default Obj4;