import Header from "./components/header";
import Navbar from "./components/navbar";
import Skill from "./components/skill";
import Agent from "./components/agent";
import Footer from "./components/footer";
import axios from "axios";
import { useState, useEffect } from "react";

const client = axios.create({
  baseURL: "https://valorant-api.com/",
});

function App() {
  const [agents, setAgents] = useState([]);
  const [agent, setAgent] = useState(null);

  const handleData = (item) => {
    setAgent(item);
  };

  useEffect(() => {
    async function getAgents() {
      const response = await client.get("/v1/agents");
      setAgents(response.data.data);
    }
    getAgents();
  }, []);

  return (
    <>
      <Navbar />
      <Header agent={agent} />
      <Skill />
      <hr />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Agent agents={agents} onData={handleData} />
      <Footer />
    </>
  );
}

export default App;
