const Header = () => {
    return (
        <header>
            <section
                id="intro"
                className="d-flex flex-column align-items-center justify-content-center"
            >
                <h1>Christi Alecia Harlow</h1>
                <h3>Full Stack Developer</h3>
                <code>I manifested this!</code>
                <a href="#about">
                    <span className="material-symbols-outlined" id="downArrow">
                        expand_more
                    </span>
                </a>
            </section>
        </header>
    );
};

export default Header;
