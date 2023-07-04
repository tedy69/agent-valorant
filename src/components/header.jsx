import { useEffect, useRef } from "react";
import scrollReveal from "scrollreveal";

function Header({ agent }) {
  const sectionRef = useRef(null);
  const sovaImg = document.querySelector(".sova-img");

  window.addEventListener("scroll", () => {
    let value = window.scrollY;

    if (sovaImg) {
      sovaImg.style.top = value * -0.2 + "px";

      if (value > 250) {
        sovaImg.style.top = -50 + "px";
      }
      if (value === 0) {
        sovaImg.style.top = 10 + "%";
      }
    }
  });

  useEffect(() => {
    if (sectionRef.current) {
      const scrollreveal = scrollReveal({
        origin: "bottom",
        distance: "200px",
        duration: 2000,
      });
      scrollreveal.reveal(".sova-img-container", {
        distance: "200px",
        reset: true,
      });
      scrollreveal.reveal("#agent-name", {
        reset: true,
      });
      scrollreveal.reveal(".desc-container", {
        reset: true,
      });
    }
  }, [sectionRef]);
  return (
    <header ref={sectionRef}>
      <video autoPlay muted loop id="myVideo">
        <source
          src="https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt29d7c4f6bc077e9e/5eb26f54402b8b4d13a56656/agent-background-generic.mp4"
          type="video/mp4"
        />
      </video>
      <div className="sova-img-container">
        <img
          src={agent ? agent.bustPortrait : ""}
          alt={agent ? agent.displayName : ""}
          className="sova-img"
          width={1000}
        />
        <img
          src={agent ? agent.background : ""}
          alt={agent ? agent.displayName : ""}
          className="sova-img-background"
          width={500}
        />
      </div>
      <div className="header-text-container">
        <h1 id="agent-name">{agent ? agent.displayName : ""}</h1>
        <div className="desc-container">
          <p>// ROLE</p>
          <h2>
            <img
              src={agent ? agent.role.displayIcon : ""}
              alt={agent ? agent.role.displayName : ""}
            />{" "}
            {agent ? agent.role.displayName : ""}
          </h2>
          <p>{agent ? agent.description : ""}</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
