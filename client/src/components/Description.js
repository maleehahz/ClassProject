import hw1 from './hw1.png'
import hw2 from './hw2.png'
import hw3 from './hw3.png'
import hw4 from './hw4.png'

function Description() {
    return (
        <main>
            <p>Homework 1 (NASA Homework) was a way to explore html, css, and javascript. The requirements were that this HTML page needed a header, footer, and main elements. This homework also needed a UI which was when a button is clicked, a request will be sent to Astronomy Picture of the Day and that picture and the description of that picture would be displayed.</p>
            <img src={hw1} alt="Homework 1" id="picH1"/>
            <p>Homework 2 (Grid Layout) I explored react components. A grid layout was created where there would be a maximum of eight blocks per row. Also, the blocks had numbers on them and their were some rules. If the number is odd, the block will be colored yellow. If the number is even, then the block will be colored green. If the block is a prime number, then it will be colored red and have a solid black border.</p>
            <img src={hw2} alt="Homework 2" id="picH2"/>
            <p>Homework 3 (P5) I explored P5. I had total control of what I wanted to create. The first box changes color everytime it's clicked, the second box has a rectangle move around the box, the third box lets you draw multiple rectangles and clear it as well, and the last box creates a flickering flower.</p>
            <img src={hw3} alt="Homework 3" id="picH3"/>
            <p>Homework 4 (d3) I used d3 in order to create a graph. The data was found on Yahoo finance chart API. This graph shows the highest value stock each company have during the time interval. Also, you can hover your mouse over this graph and it will show you the highest value stock your mouse is over.</p>
            <img src={hw4} alt="Homework 4" id="picH4"/>
        </main>
    )
}

export default Description