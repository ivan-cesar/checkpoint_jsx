import imageInSrc from './imageInSrc.png'
import './App.css';
import './Style.css'

function App() {
  return (
    <div style={{border:"solid 1px black",maxWidth:"100vw",textAlign:"center"}}>
      <h1 className='title red'><span style={{color:"#000"}}>EPINZAGNE</span> <span style={{color:"#000"}}>I</span>van <span style={{color:"#000"}}>C</span>esar</h1>
      <br/>
      <img src={imageInSrc}/>
      <br/>
      <img src='imageInPublic.png'/>
      <br/>
      <video width="320" height="240" controls>
          <source src="myVideo.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
