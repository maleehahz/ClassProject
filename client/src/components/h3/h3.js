import './hw3.css'
import Obj1 from './Obj1'
import Obj2 from './Obj2'
import Obj3 from './Obj3'
import Obj4 from './Obj4'

function createMarkup() {
    return {__html: `
        <body id="h3">
            <div>
                <header id="header">
                    <h1>p5 in HTML</h1>
                    <h4 id="subHeader">Exploring the different libraries and styles of P5</h4>
                </header>
                <main>
                    <div>
                        <h2 id="head2">Using p5</h2>
                        <p>The four boxes below have various functions. Some involve the mouse moving or the mouse clicking. Other boxes do not involve any kind of events.</p>
                        <ul>
                            <li>The first box will change color everytime it is clicked.</li>
                            <li>The second box changes the position of the box to a random (x,y) coordinate wiht a framerate of 10.</li>
                            <li>The third box will follow your mouse's (x,y) coordinates and draw squares at those coordinates. If you don't move your mouse, then the squares will spiral. Also, clicking on this box will clear the box of all the squares.</li>
                            <li>The fourth box creates a flower with the petal's colors constantly changing.</li>
                        </ul>
                        <div id="myCanvas"></div>
                        <div id="mySecondCanvas"></div>
                        <div id="myThirdCanvas"></div>
                        <div id="myFourthCanvas"></div>
                    </div>
                </main>
            </div>
        </body>
        `
    }
}

function Three() {
    return (
        <>
        <div dangerouslySetInnerHTML={createMarkup()}></div>
        <Obj1/>
        <Obj2/>
        <Obj3/>
        <Obj4/>
        </>
    )
}

export default Three