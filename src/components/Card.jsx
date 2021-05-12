export default function Card({title="Card title", description="lorem ipsum", link=false, linkCode=false, image="https://wallpaperaccess.com/full/945950.jpg", tech=""}){
    
    if(link){
        link = (
            <a className="btn btn-secondary btn-sm mx-1" href={link} target="_blank" rel="noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-link-45deg" viewBox="0 0 16 16">
                <path d="M4.715 6.542L3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.001 1.001 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
                <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 0 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 0 0-4.243-4.243L6.586 4.672z"/>
                </svg> Link
            </a>
        )
    }
    if(linkCode){
        linkCode = (
            <a className="btn btn-secondary btn-sm mx-1" href={linkCode} target="_blank" rel="noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-code" viewBox="0 0 16 16">
                <path d="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8l3.147-3.146zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8l-3.147-3.146z"/>
                </svg>Code
            </a>
        )
    }
    
    return <>
        <div className="card m-0 p-0">
            <div className="row no-gutters project-row">
                <div className="col-md-4">
                    <img className="project-image" src={image} alt="project cover" />
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title text-dark">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p><b>Tech</b>: {tech}</p>
                    {link}
                    {linkCode}
                </div>
                </div>
            </div>
        </div>
    </>
}