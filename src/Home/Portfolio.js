import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Portfolio = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const getProjects = async () => {
            let host = "http://localhost:3001";
            if (window.location.host.indexOf(".herokuapp.com") !== -1) {
                host = "https://christiharlow-portfolio-back.herokuapp.com";
            }

            const response = await fetch(`${host}/favorites`);
            const data = await response.json();
            setProjects(data.projects);
        };

        getProjects();
    }, []);

    return (
        <section
            id="portfolio"
            className="d-flex flex-column justify-content-center"
        >
            <h3>Portfolio</h3>
            <p>
                To view more details about the projects, click on any of the
                cards
            </p>

            <div className="row">
                {projects.map((project) => {
                    return (
                        <div key={project.id} className="col-sm-6 col-md-4">
                            <div className="card">
                                <img
                                    src={project.imageURL}
                                    className="card-img-top"
                                    alt="Screenshot"
                                />
                                <div className="card-body">
                                    <h5 className="card-title">
                                        {project.name}
                                    </h5>
                                    <p className="card-text">
                                        {project.summary}
                                    </p>
                                    <Link
                                        to={`/project/${project.id}`}
                                        className="btn btn-primary"
                                    >
                                        {" "}
                                        Learn more
                                    </Link>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Portfolio;
