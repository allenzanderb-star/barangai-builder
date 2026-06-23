import { useState } from "react";
import "./App.css";

function App() {
  const [form, setForm] = useState({
    problem: "",
    location: "",
    beneficiaries: "",
    resources: "",
    constraints: "",
    timeline: "",
  });

  const [plan, setPlan] = useState(null);

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function generatePlan() {
    const projectTitle = `Community Action Plan for ${form.problem}`;

    const generatedPlan = {
      title: projectTitle,
      rootCause: [
        "Limited access to resources or services in the target community.",
        "Lack of structured implementation plan.",
        "Possible budget, manpower, or infrastructure constraints.",
      ],
      solution: `A context-aware community project for ${form.location} focused on solving: ${form.problem}.`,
      activities: [
        "Conduct quick community validation and beneficiary mapping.",
        "Identify local partners such as barangay officials, NGOs, schools, or health centers.",
        "Create a small pilot project using available resources.",
        "Monitor results using simple impact indicators.",
        "Improve the model before scaling to nearby communities.",
      ],
      budget: [
        "Materials and supplies",
        "Training and orientation",
        "Transportation and logistics",
        "Monitoring and documentation",
      ],
      timeline: [
        "Week 1: Community assessment",
        "Week 2: Planning and partner coordination",
        "Week 3-4: Pilot implementation",
        "Week 5: Monitoring and feedback",
        "Week 6: Scale-up recommendation",
      ],
      impactMetrics: [
        "Number of beneficiaries served",
        "Number of households or individuals reached",
        "Improvement in access to service",
        "Community satisfaction rating",
        "Readiness for replication or scaling",
      ],
      sustainability: [
        "Assign local focal person or committee.",
        "Train community volunteers.",
        "Create simple maintenance or monitoring checklist.",
        "Link project to possible LGU, CSR, or NGO funding.",
      ],
    };

    setPlan(generatedPlan);
  }

  return (
    <div className="app">
      <div className="container">
        <h1>BarangAI</h1>
        <p className="subtitle">
          From community problem to implementation-ready solution.
        </p>

        <div className="card">
          <h2>Community Need Form</h2>

          <label>What is the problem?</label>
          <textarea
            name="problem"
            value={form.problem}
            onChange={handleChange}
            placeholder="Example: Limited access to clean drinking water"
          />

          <label>Location</label>
          <input
            name="location"
            value={form.location}
            onChange={handleChange}
            placeholder="Example: Barangay San Isidro"
          />

          <label>Target beneficiaries</label>
          <input
            name="beneficiaries"
            value={form.beneficiaries}
            onChange={handleChange}
            placeholder="Example: 500 households, 1 public school"
          />

          <label>Available resources</label>
          <textarea
            name="resources"
            value={form.resources}
            onChange={handleChange}
            placeholder="Example: barangay hall, volunteers, small budget"
          />

          <label>Constraints</label>
          <textarea
            name="constraints"
            value={form.constraints}
            onChange={handleChange}
            placeholder="Example: limited funds, no technical staff"
          />

          <label>Desired timeline</label>
          <input
            name="timeline"
            value={form.timeline}
            onChange={handleChange}
            placeholder="Example: 1 to 2 months"
          />

          <button onClick={generatePlan}>Generate Project Plan</button>
        </div>

        {plan && (
          <div className="result">
            <h2>{plan.title}</h2>

            <section>
              <h3>Problem Summary</h3>
              <p>
                The community in <strong>{form.location}</strong> is facing{" "}
                <strong>{form.problem}</strong>. The affected beneficiaries are{" "}
                <strong>{form.beneficiaries}</strong>.
              </p>
            </section>

            <section>
              <h3>Root Cause Analysis</h3>
              <ul>
                {plan.rootCause.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h3>Recommended Solution</h3>
              <p>{plan.solution}</p>
            </section>

            <section>
              <h3>Implementation Activities</h3>
              <ul>
                {plan.activities.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h3>Budget Categories</h3>
              <ul>
                {plan.budget.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h3>Timeline</h3>
              <ul>
                {plan.timeline.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h3>Impact Metrics</h3>
              <ul>
                {plan.impactMetrics.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h3>Sustainability Plan</h3>
              <ul>
                {plan.sustainability.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;