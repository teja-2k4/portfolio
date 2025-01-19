
function Project() {

    return (
        <><div className="project-main"><label id="projects" />
            <h3>Internships and Projects</h3>
            <div className="internship">
                <h4>INTERNSHIPS : </h4>
                
                <details><summary>WEB developmemt</summary>Completed web developmemt internship in <b>Street Tech Org</b> <br/>
                Learned About to cooperate with team members and complete the work<br/>
                Learned new technologies to work more effectively.
                </details>
                <br/>
                <details><summary>Python Programming</summary>Completed Pythonprogramming internship in <b>Epro Acadamy</b> <br/>
                Learned About to cooperate with team members and complete the work<br/>
                Learned how to solve Complex coding Questions by Python Programming langauge<br/>
                Learned new technologies to work more effectively.
                </details>
            </div>
            <div className="project-list" >
                <h4>PROJECTS : </h4>
                <a className="projectname" href="https://weather-app-teja.netlify.app/">Weather app</a><br/>
                
                <div className="projectinfo"><br/>
                <li>React js is used to develop this web appllication. </li>
                <li>I used some references from Youtube and Chatgpt to add some new features.</li>
                <li>It feteches data from weather API and display data according to yorur search.</li>
                <li>It provide the current weather info i,e. Temperature climate and display the weather logo.</li>
                <li>Some basic styling is used by developing this web application. </li>
                </div><br/>
                <a className="projectname"  href="https://organic-store-teja.netlify.app/">Organic store</a><br/>
                <div className="projectinfo"><br/>
                <li>React js is used to develop this web appllication. </li>
                <li>I used some references from Doumentation from Website to add some Dynamic property to the app.</li>
                <li>It displays the data of avaiable items and catagories  the items.</li>
                <li>Items list changes dynamically by selecting the catagory of desired.</li>
                <li>Basic Css is implemented in developing the frontend of the app. </li>
                <li>Opens a dailoge box when you add items in your cart</li>
                <li>It is only frontend so we cannot access the cart seperately.</li>
                
                </div> <br/>
            </div>
        </div>

        </>
    )
}
export default Project