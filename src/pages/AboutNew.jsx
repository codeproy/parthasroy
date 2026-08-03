import '../styles/About.css';

function About() {
  return (
    <section className="about">
      <h1>About Me</h1>
      <p>Engineer with curiosity and passion for Applied AI</p>
      
      <p>
        Hello! I'm Partha Sarathy Roy, a software engineer with 20 years of experience building applications and frameworks.  I help enterprise build or maintain customized automation frameworks and tailored solution as per business objective.
      </p>

      <p>
        When I'm not coding, you can find me playing soccer, tennis , badminton or exploring new technologies.
      </p>

      <h2>Skills & Expertise</h2>
      <p style={{ textAlign: 'left' }}>
        <strong>Languages:</strong> Python, Java, JavaScript & Typescript <br/>
        <strong>Agent Frameworks:</strong> Langchain, Langgraph, DeepAgents, Claude SDK, CrewAI and  MCP Adapters<br/>
        <strong>Agent Harness:</strong> Google Gemini, GitHub Co-Pilot, Claude Code and Open Source Agent Harness<br/>
        <strong>Agentic Patterns:</strong> React Agents, Mult-Agent Design, Model Context Protocol, Retrieval Augmented Generation, Semantic Search, Hybrid Search, Custom Agents, Agent Skills<br/>
        <strong>Soft Skills:</strong> Problem-solving, Team collaboration, Project management
      </p>


      <h2>Education</h2>
      <p style={{ textAlign: 'left' }}>
        <strong>Bachelor of Technology in Electronics and Communication Engineering</strong><br/>
        Kalyani Government Engineering College, India
      </p>

      <p style={{ textAlign: 'center', marginTop: '40px', color: '#667eea' }}>
        <strong>Feel free to reach out !!</strong>
      </p>
    </section>
  )
}

export default About