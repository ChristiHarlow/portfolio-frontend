import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Project = () => {
    const [project, setProject] = useState([]);
    const params = useParams();
    useEffect(() => {
        const getProject = async () => {
            let host = "http://localhost:3001";
            if (window.location.host.indexOf("christialeciaharlow.com") !== -1) {
                host = "https://api.christialeciaharlow.com";
            }

            const response = await fetch(`${host}/project/${params.id}`);
            const data = await response.json();
            setProject(data.project);
        };

        getProject();
    }, [params.id]);

    if (!project) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        );
    }

    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        Christi Alecia Harlow
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggler="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    aria-current="page"
                                    to="/"
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/#about">
                                    About
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/#contact">
                                    Contact
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/#portfolio">
                                    Portfolio
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <section id="project">
                <h2>{project.name}</h2>
                <div className="row">
                    <div className="col-4 text-center">
                        <img
                            src={`/${project.imageURL}`}
                            className="img-fluid"
                            alt=""
                        />
                        <div id="navigateArrows"></div>
                    </div>

                    <div className="col-8">
                        <div>
                            <h3>Summary</h3>
                            <p>{project.summary}</p>
                        </div>
                        <div className="row">
                            <div className="col">
                                <h3>Objectives</h3>
                                <ul>{project.objectives}</ul>
                            </div>
                            <div className="col">
                                <h3>Future Improvements</h3>
                                <ul>{project.futureImprovements}</ul>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <h3>Links</h3>
                                <a target="_blank" href={project.links}rel="noopener noreferrer">
                                    <button
                                        type="button"
                                        className="btn btn-primary"
                                    >
                                        GitHub
                                    </button>
                                </a>
                            </div>
                            <div className="col">
                                <h3>Tech Stack</h3>
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: project.techStack,
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Project;
