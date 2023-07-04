import { useEffect, useRef, useState } from "react";
import scrollReveal from "scrollreveal";

function Agent({ agents, onData }) {
  const [agentActive, setAgentActive] = useState(null);
  const sectionRef = useRef(null);

  function handleClick(agent) {
    setAgentActive(agent.uuid);
    onData(agent);
  }

  useEffect(() => {
    if (sectionRef.current) {
      const scrollreveal = scrollReveal({
        origin: "bottom",
        distance: "200px",
        duration: 2000,
      });
      scrollreveal.reveal("#other-agents", {
        origin: "left",
      });
      scrollreveal.reveal(".agent", { delay: 500 });
      scrollreveal.reveal(".play-now", {});
    }
  }, []);

  useEffect(() => {
    if (agents.length > 0) {
      onData(agents[0]);
      setAgentActive(agents[0].uuid);
    }
  }, [agents]);

  return (
    <section className="other-agents" ref={sectionRef}>
      <h1 id="other-agents">
        <span>//</span> OTHER AGENTS
      </h1>
      <div className="agents-container">
        {agents.map((agent) => {
          if (agent.uuid != "ded3520f-4264-bfed-162d-b080e2abccf9") {
            return (
              <a
                className={agentActive == agent.uuid ? "agent pick" : "agent"}
                id={agent.uuid}
                key={agent.uuid}
                onClick={() => handleClick(agent)}
              >
                <img src={agent.displayIconSmall} alt="" width={150} />
              </a>
            );
          }
        })}
      </div>
    </section>
  );
}

export default Agent;
