import '../styles/About.css';

function About() {
  return (
    <section className="about">
      <h1>About Me</h1>
      <p>Engineer with curiosity and passion for Applied AI</p>
      
      <p>
        Hello! I'm Partha Roy, a software engineer with 20 years of experience building applications and frameworks.  I help enterprise build or maintain customized automation frameworks and tailored solution as per business objective.
      </p>

      <p>
        When I'm not coding, you can find me playing soccer, tennis , badminton or exploring new technologies.
      </p>

      <h2>Skills & Expertise</h2>
      <p style={{ textAlign: 'left' }}>
        <strong>Languages:</strong> Python, Java, JavaScript, Typescript & Cobol<br/>
        <strong>AI Frameworks:</strong> Langchain, Langgraph, DeepAgents, Claude SDK, CrewAI and  MCP Adapters<br/>
        <strong>AI Tools:</strong> Google Gemini, GitHub Co-Pilot and Claude Code<br/>
        <strong>Agentic Patterns:</strong> React Agents, Mult-Agent Design, Model Context Protocol, Retrieval Augmented Generation, Semantic Search, Hybrid Search, Custom Agents, Agent Skills<br/>
        <strong>Soft Skills:</strong> Problem-solving, Team collaboration, Project management
      </p>

      <h2>Experience</h2>
      <p style={{ textAlign: 'left' }}>
        <strong>Principal Software Engineer In Test</strong> @ Roche Canada (2021-Present)<br/>
        Leading quality engineering for multiple projects by building Agentic solutions and robust testing frameworks.<br/><br/>
        
        <strong>Senior IT Analyst</strong> @ Canada Pension Plan (2020-2021)<br/>
        Developed and maintained full-stack web applications, implemented new features, and improved system performance.<br/><br/>
        
        <strong>Senior Associate Projects</strong> @ Cognizant Technology Solutions (2014-2020)<br/>
        Lead high performing team to deliver multiple projects for cloud migrations and legacy system modernization.<br/><br/>
      </p>

      <h2>Education</h2>
      <p style={{ textAlign: 'left' }}>
        <strong>Bachelor of Technology in Electronics and Communication Engineering</strong><br/>
        Kalyani Government Engineering College, WB, India (2002-2006)
      </p>

      <p style={{ textAlign: 'center', marginTop: '40px', color: '#667eea' }}>
        <strong>Feel free to reach out !!</strong>
      </p>
    </section>
  )
}

export default About