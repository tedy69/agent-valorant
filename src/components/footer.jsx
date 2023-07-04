function Footer() {
  const handleClick = () => {
    window.location.href = "https://github.com/ega-erinovian/valorant-agent";
  };

  return (
    <footer>
      <img
        src="https://cdn2.steamgriddb.com/file/sgdb-cdn/logo/4bcd537b6c034e297f0030cf08887426.png"
        alt=""
      />
      <p>
        <i className="fas fa-copyright"></i> 2023 Made with ❤ by Mochammad Tedy
        Fazrin
      </p>
      <p className="p2">
        All images, videos, and contents are property of riot games
      </p>
      <div className="social-media-container">
        <a
          href="https://github.com/tedy69/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://tedyfazrin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="https://tedyfazrin.com/logo.png" alt="" />
        </a>
        <a
          href="https://www.instagram.com/tedyfazrin_/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram"></i>
        </a>
      </div>

      <p>
        Special thanks to{" "}
        <span className="pointer" onClick={handleClick}>
          @ega-erinovian
        </span>{" "}
        for open source and I recode for Reactjs.
      </p>
    </footer>
  );
}

export default Footer;
