import {useState, useEffect} from "react"
import Card from "./Card"

export default function Portfolio(){
    const [data, setData] = useState([])
    useEffect(async ()=>{
        const res = await fetch("https://rosarioterranova.github.io/projects.json")
        const data = await res.json()
        setData(data)
    },[])

    return <div className="portfolio-container">
        <h4 className="text-center my-3 text-dark" id="webapps">Web Apps</h4>
        <div className="row project-row">
            {data.filter(el => el.category == "web").map(el => (
                <div className="col-12 col-lg-6 p-1 m-0" key={el.title}>
                    <Card title={el.title} description={el.description} image={el.img} link={el.link} linkCode={el.linkCode} tech={el.tech} /> 
                </div>
            ))}
        </div>
        
        <h4 className="text-center my-3 text-dark" id="mobileapps">Mobile Apps</h4>
        <div className="row project-row">
            {data.filter(el => el.category == "mobile").map(el => (
                <div className="col-12 col-lg-6 p-1 m-0" key={el.title}>
                    <Card title={el.title} description={el.description} image={el.img} link={el.link} linkCode={el.linkCode} tech={el.tech} />
                </div>
            ))}
        </div>

        <h4 className="text-center my-3 text-dark" id="games">Games</h4>
        <div className="row project-row">
            {data.filter(el => el.category == "games").map(el => (
                <div className="col-12 col-lg-6 p-1 m-0" key={el.title}>
                    <Card title={el.title} description={el.description} image={el.img} link={el.link} linkCode={el.linkCode} tech={el.tech} />
                </div>
            ))}
        </div>
    </div>

}