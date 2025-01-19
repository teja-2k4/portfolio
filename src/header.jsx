
function Header(){
    return(
        <><div className="nav"><label id="nav" />
            <ul>
                <a href="#about"><li>About</li></a>
                <a href="#skill"><li>Skills</li></a>
                <a href="#projects"><li>Projects</li></a>
                <a href="./resume.docx" download><li>Resume</li></a>
            </ul>
            </div>
            <a href="#nav"> <button className="top" > ⬆</button></a>
        </>
    )
}
export default Header