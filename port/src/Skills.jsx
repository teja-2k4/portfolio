import html from './assets/html.png'
import css from './assets/css.png'
import javascript from './assets/javascript.png'
import react from './assets/react.png'
import node from './assets/node.png'
import express from './assets/express.png'
import mongo from './assets/mongo.png'
import github from './assets/github.png'
import python from './assets/python.png'
import c from './assets/c.png'
import java from './assets/java.png'
import chatgpt from './assets/chatgpt.png'
import aws from './assets/aws.png'
function Skill(){
const arr = [html,css,javascript,java,react,node,express,mongo,github,python,c,chatgpt,aws];
    return(<>
        <div className="skill" ><label id='skill' />
            <h3><b>Skills</b></h3>
            <h5>Web Development</h5>
            <div className='box'>

            <img src={html} />
            <img src={css} />
            <img src={javascript} />
            <img src={react} />
            <img src={node} />
            <img src={express} />
            <img src={mongo} />
            <br/>
            <h5>Coding Langauge</h5>
            <img src={java} />
            <img src={c} />
            <img src={python} />
            <br/>
            <h5>Technical skills</h5>
            <img src={chatgpt} />
            <img src={github} />
            </div>
        </div>
    </>)
}
export default Skill