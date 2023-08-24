export default function Subjects({subjects}){
    return(
        <div className="component container2 margin cent">
            <h1>{subjects.Subject}</h1>
            <p><img src={subjects.Image}></img></p>
            <h2>Class: {subjects.Class}</h2>
            <br/>
            <h3>Containment infomation:</h3>
            <p>{subjects.Containment}</p>
            <h3>Description:</h3>
            <p>{subjects.Summary}</p>
        </div>
    )
}