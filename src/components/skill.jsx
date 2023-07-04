import { useEffect } from "react";
import { abilities } from "../static/dummyAbilities";
import scrollReveal from "scrollreveal";

// const hamburger = document.querySelector(".hamburger");
// const bar = document.querySelectorAll(".bar");
// const navMenu = document.querySelector(".nav-menu");
// const sovaImg = document.querySelector(".sova-img");

// const agentName = document.querySelector("#agent-name");
// const agentPict = document.querySelectorAll(".agent");

function Skill() {
  const scrollreveal = scrollReveal({
    origin: "bottom",
    distance: "200px",
    duration: 2000,
  });

  useEffect(() => {
    scrollreveal.reveal(".skill-container h1", { origin: "left" });
    scrollreveal.reveal(".abilities-ico", { origin: "left" });
    scrollreveal.reveal(".abilities-text", { origin: "left" });
  }, []);

  const skillRadio = document.getElementsByName("skill-btn");
  const abilitiesBtn = document.querySelectorAll(".abilities-ico");
  const abilitiesTextHead = document.getElementById("abilities-text-head");
  const abilitiesTextBody = document.getElementById("abilities-text-body");
  const abilitiesSrc = document.getElementById("abilities-src");

  const skillBtn = (id) => {
    skillRadio[id].checked = true;
    if (skillRadio[id].checked == true) {
      abilitiesTextHead.innerHTML = abilities[5][id]["skill"];
      abilitiesTextBody.innerHTML = abilities[5][id]["desc"];
      abilitiesSrc.classList.add("show");
      abilitiesSrc.src = abilities[5][id]["video"];
      addBtn(id);
    }
  };

  const addBtn = (id) => {
    for (let i = 0; i < abilitiesBtn.length; i++) {
      if (i == id) {
        abilitiesBtn[i].classList.add("animate");
      } else {
        abilitiesBtn[i].classList.remove("animate");
      }
    }
  };

  return (
    <section className="skill-container" id="skill">
      <h1>
        <span>//</span> SPECIAL ABILITIES
      </h1>
      <div className="abilities-container">
        <div className="abilities-button-text">
          <div className="abilities-button">
            <div className="radio-container">
              <input
                type="radio"
                name="skill-btn"
                className="radio-btn"
                value="0"
              />
              <input
                type="radio"
                name="skill-btn"
                className="radio-btn"
                value="1"
              />
              <input
                type="radio"
                name="skill-btn"
                className="radio-btn"
                value="2"
              />
              <input
                type="radio"
                name="skill-btn"
                className="radio-btn"
                value="3"
              />
            </div>
            <button
              className="abilities-ico"
              id="0"
              onClick={() => skillBtn(0)}
            >
              <img
                src="https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltce7928301a67a33a/5eaf861103f6e72ff388cc20/TX_Jett_Q.png"
                alt=""
              />
            </button>
            <button
              className="abilities-ico"
              id="1"
              onClick={() => skillBtn(1)}
            >
              <img
                src="https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blta0beeaa4a7e1ed78/5eaf8611b8a6356e4ddc1013/TX_Jett_E.png"
                alt=""
              />
            </button>
            <button
              className="abilities-ico"
              id="2"
              onClick={() => skillBtn(2)}
            >
              <img
                src="https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf137993847c71770/5eaf8611d4b10d15d3e8db4e/TX_Jett_C.png"
                alt=""
              />
            </button>
            <button
              className="abilities-ico"
              id="3"
              onClick={() => skillBtn(3)}
            >
              <img
                src="https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltb3e956f9fb96318e/5eaf86112b79652f27c32a06/TX_Jett_X.png"
                alt=""
              />
            </button>
          </div>
          <br />
          <div className="abilities-text">
            <h2 id="abilities-text-head">
              Choose ability by pressing a button above
            </h2>
            <br />
            <p id="abilities-text-body"></p>
          </div>
          <br />
        </div>
        <video
          controls
          autoPlay
          loop
          className="abilities-vid"
          id="abilities-src"
        >
          <source src="" type="video/mp4" />
        </video>
      </div>
    </section>
  );
}

export default Skill;
