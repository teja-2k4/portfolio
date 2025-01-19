import img from './assets/img.jpg'
import { useEffect,useState } from 'react';
function Body(){
    const [word,setword] = useState('');
    let i = 0;
    const arr = ['W','E','B',' ','D','E','V','E','L','O','P','E','R'];
    useEffect(
        ()=>{
            setInterval(() =>{
                if(i < arr.length){
                    let com = arr[i];
                    i++;
                    setword(prev =>[prev,com]);        
                }
                else{
                    i = 0;
                    setword('');
                }
            },800);
        } ,[]
        
    );
    return(
        <>
        <div className="body">
        <div className='img'>
            <img className="pic" src={img} alt='img'/>
        </div>
        <div className="sub">
            <p>  I am Eshwar <br/> <br/> I am a <br/> <br/> {  word}</p>
            
           <button className='hire'><a href='mailto:tejapavuluri38@gmail.com?subject=Hello'>Hire me</a></button> 
        </div>

        </div>
        </>
    )
}
export default Body