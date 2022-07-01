/* 
 * HW2: Exploring React Compnents 
 * Create a grid layout that depending on the number, even, odd,
 * or prime, the style of each block will change.
 *    odd - block's color is yellow
 *    even - block's color is green
 *    prime - block's color is red with black border
 */

// functions that will be used inside the functions

/*
 * Checks if the number is a prime number
 * Function is based off of the following stack overflow discussion:
 *    https://stackoverflow.com/questions/40200089/number-prime-test-in-javascript
 */
const isPrime = num => {
  for(let i = 2, s = Math.sqrt(num); i <= s; i++)
      if(num % i === 0) return false; 
  return num > 1;
}

/*
 * Creates an array given that start and end of the array
 */
const createArray = (s, e) => {
  const arr = []
  for(let i = s; i <= e; i++) {
    arr.push(i);
  }
  return arr;
}

// Main block compnent functions used to style and display blocks

/*
 * Depending on whether the number is prime, even, or, odd,
 * this function will change the block style to fit what 
 * type the number is
 */
function BlockColor({num}) {
  if (isPrime(num)) {
    return <div style={{
      backgroundColor: 'red',
      borderStyle: 'solid',
      borderWidth: '3px',
      color: 'black',
      textAlign: 'center'}}>{
        num}
      </div>
  }
  if (num % 2 === 0) {
    return <div style={{
      backgroundColor: 'green',
      color: 'black',
      textAlign: 'center'
    }}>
      {num}
    </div>
  }
  return <div style={{
    backgroundColor: 'yellow',
    color: 'black',
    textAlign: 'center'
  }}>
    {num}
  </div>
}

/*
 * This is the layout for the first type of grid
 * Grid with dark background and smaller blocks 
 */
function Grid1({list}) {
  return (
    <>
      <div
        style={{
          color: 'white',
          backgroundColor: '#2D2F40',
          width: window.innerWidth,
          height: window.innerHeight,
          display: 'grid',
          gridTemplateColumns: '30px 30px 30px 30px 30px 30px 30px 30px',
          gridColumnGap: '5px',
          gridRowGap: '50px',
          textAlign: 'center', 
          alignContent: 'center',
          justifyContent: 'center'
        }}
      >
      {list.map(l => (
        <div key={l}>
          <BlockColor num={l} />
        </div>
      ))}
      </div>
    </>
  );
}

/*
 * This is the layout for the second type of grid
 * Grid with white background and longer blocks 
 */
function Grid2({list}) {
  return (
    <>
      <div
        style={{
          backgroundColor: 'white',
          width: window.innerWidth,
          height: window.innerHeight,
          display: 'grid',
          gridTemplateColumns: '100px 100px 100px 100px 100px 100px 100px 100px',
          gridColumnGap: '5px',
          gridRowGap: '40px',
          textAlign: 'center', 
          alignContent: 'center',
          justifyContent: 'center'
        }}
      >
      {list.map(l => (
        <div key={l}>
          <BlockColor num={l} />
        </div>
      ))}
      </div>
    </>
  );
}

// App function

/*
 * This is the main app function
 * You can change the start and end which will
 * change the grid type
 * If the end is less than 79, then it will be the Grid1,
 * else it will be Grid2
 */
function App() {
  const start = 1;
  const end = 49;
  const arr = createArray(start, end);
  if (end < 79) {
    return (
      <>
        <Grid1 list={arr}/>
      </>
    );
  }
  return <Grid2 list={arr}/>;
}

export default App;

// NOTES FOR ME
// bug to fix: when I go full screen mode, I have to refresh the page again
// then the screen shows what it actually is
// For example, if I go full screen mode for grid1, then it may happen
// that the dark background doesn't fill the whole screen
// this is fixed by refreshing the page