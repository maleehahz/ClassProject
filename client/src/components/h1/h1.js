import './hw1.css'

function createMarkup() {
    return {__html: `
            <body>
                <header>
                    <div id="tab1" class="content">
                        <h2>Website Info</h2>
                        <p>This website will be constantly updated with new features. The first feature that is being added is a UI which consists of a single button that, when clicked, will send a request to <a href="https://api.nasa.gov">APOD (Astronomy Picture of the Day)</a> API by NASA and process the response received from the server. Also, below are header tabs and when clicked on the content you are reading right now will change.</p>
                    </div>

                    <div id="tab2" class="content">
                        <h2>Last Updated</h2>
                        <h4>Below are the dates this page was edited</h4>
                        <p>06/06/2022</p>
                    </div>

                    <div id="tab3" class="content">
                        <h2>References</h2>
                        <p><a href="https://www.w3schools.com/howto/howto_js_tab_header.asp">Interactive Tabs Creation</a> Used as a reference when creating interactive tabs</p>	
                    </div>

                    <div class="flex-container">
                        <div class="buttons">
                            <button class="link" onclick="openTab('tab1', this)" id="default">Website Info</button>
                        </div>

                        <div class="buttons">
                            <button class="link" onclick="openTab('tab2', this)">Last Updated</button>
                        </div>

                        <div class="buttons">
                        <button class="link" onclick="openTab('tab3', this)">References</button>
                        </div>

                    </div>
                </header>
                <h2>Astronomy Picture of the Day</h2>
                <p>Click on the button below in order to see what the astronomy picture of the day is. Changing the date will give you a new picture depending on that date.</p>
                <div>
                    <button type="button" id="AJAXButton" onclick="makeRequest()">Make a request!</button>
                    <input type="date" id="dateInput" name="startDate"></input>
                </div>
                <div>
                    <img id="imgHolder" src="https://via.placeholder.com/150" alt="placeholder"/>
                    <p id="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <footer>
                    <p>Author: Maleehah Zafar</p>
                    <p><a href="mailto:maleehahz@vt.edu">maleehahz@vt.edu</a></p>
                    <p>CS 3744: Introduction to GUI and Computer Graphics</p>
                </footer>
            </body>
        `}
}

function One() {
    return <div dangerouslySetInnerHTML={createMarkup()}></div>
}

// function One() {
//     return (
//         <>
//             <body onload="done()">
//                 <header>
//                     <div id="tab1" class="content">
//                         <h2>Website Info</h2>
//                         <p>This website will be constantly updated with new features. The first feature that is being added is a UI which consists of a single button that, when clicked, will send a request to <a href="https://api.nasa.gov">APOD (Astronomy Picture of the Day)</a> API by NASA and process the response received from the server. Also, below are header tabs and when clicked on the content you are reading right now will change.</p>
//                     </div>

//                     <div id="tab2" class="content">
//                         <h2>Last Updated</h2>
//                         <h4>Below are the dates this page was edited</h4>
//                         <p>06/06/2022</p>
//                     </div>

//                     <div id="tab3" class="content">
//                         <h2>References</h2>
//                         <p><a href="https://www.w3schools.com/howto/howto_js_tab_header.asp">Interactive Tabs Creation</a> Used as a reference when creating interactive tabs</p>	
//                     </div>

//                     <div class="flex-container">
//                         <div class="buttons">
//                             <button class="link" onclick="openTab('tab1', this)" id="default">Website Info</button>
//                         </div>

//                         <div class="buttons">
//                             <button class="link" onclick="openTab('tab2', this)">Last Updated</button>
//                         </div>

//                         <div class="buttons">
//                         <button class="link" onclick="openTab('tab3', this)">References</button>
//                         </div>

//                     </div>
//                 </header>
//                 <h2>Astronomy Picture of the Day</h2>
//                 <p>Click on the button below in order to see what the astronomy picture of the day is. Changing the date will give you a new picture depending on that date.</p>
//                 <div>
//                     <button type="button" id="AJAXButton">Make a request!</button>
//                     <input type="date" id="dateInput" name="startDate"></input>
//                 </div>
//                 <div>
//                     <img id="imgHolder" src="https://via.placeholder.com/150" alt="placeholder"/>
//                     <p id="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
//                 </div>
//                 <footer>
//                     <p>Author: Maleehah Zafar</p>
//                     <p><a href="mailto:maleehahz@vt.edu">maleehahz@vt.edu</a></p>
//                     <p>CS 3744: Introduction to GUI and Computer Graphics</p>
//                 </footer>
//             </body>
//         </>
//     )
// }

export default One