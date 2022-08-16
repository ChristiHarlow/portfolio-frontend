const Contact = () => {
    return (
        <section
            id="contact"
            className="d-flex flex-column justify-content-center"
        >
            <h1>Contact</h1>
            <div className="row">
                <div className="col">
                    <h5>
                        To connect fill out the form and send an
                        <a href="mailto:christiharlow@msn.com"> email.</a>
                    </h5>
                </div>
                <form
                    className="col-sm-12 col-md-6"
                    action="https://mailthis.to/christiharlow@msn.com"
                    method="POST"
                >
                    <div className="row">
                        <div className="col">
                            <input
                                type="text"
                                placeholder="First Name"
                                name="firstName"
                            />
                        </div>
                        <div className="col">
                            <input
                                type="text"
                                placeholder="Last Name"
                                name="lastName"
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <input
                                type="text"
                                placeholder="Email"
                                name="_replyto"
                            />
                        </div>
                    </div>
                    <div>
                        <textarea
                            type="text"
                            placeholder="I'm listening"
                        ></textarea>
                    </div>
                    <div>
                        <button type="submit" className="btn btn-primary">
                            📬 Send
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;
