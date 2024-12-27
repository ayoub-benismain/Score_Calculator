import React, { useState } from "react";
import "./App.css";

const subjects = [
  { name: "Analyse", coeff: 1.5, ds: 30, tp: 0, exam: 70 },
  { name: "Algebre", coeff: 1.5, ds: 30, tp: 0, exam: 70 },
  { name: "Algorithme", coeff: 2, ds: 30, tp: 0, exam: 70 },
  { name: "Systeme Logique", coeff: 2, ds: 10, tp: 20, exam: 70 },
  { name: "Programmation", coeff: 1.5, ds: 10, tp: 20, exam: 70 },
  { name: "Logique Formelle", coeff: 1.5, ds: 30, tp: 0, exam: 70 },
  { name: "Multimedia", coeff: 1.5, ds: 30, tp: 0, exam: 70 },
  { name: "Systeme d'exploitation", coeff: 1.5, ds: 10, tp: 20, exam: 70 },
  { name: "Francais", coeff: 1, ds: 30, tp: 0, exam: 70 },
  { name: "Anglais", coeff: 1, ds: 30, tp: 0, exam: 70 },
];

const App = () => {
  const [scores, setScores] = useState(
    subjects.map(() => ({ ds: "", tp: "", exam: "" }))
  );
  const [overallScore, setOverallScore] = useState(0);

  const calculateTotal = () => {
    let overall = 0;
    let totalCoeff = 0;

    // eslint-disable-next-line no-unused-vars
    const totals = scores.map((score, index) => {
      const { ds, tp, exam } = score;
      const subject = subjects[index];
      const total =
        (parseFloat(ds || 0) * subject.ds) / 100 +
        (parseFloat(tp || 0) * subject.tp) / 100 +
        (parseFloat(exam || 0) * subject.exam) / 100;
      overall += total * subject.coeff;
      totalCoeff += subject.coeff;
      return total.toFixed(2);
    });

    setOverallScore((overall / totalCoeff).toFixed(2));
  };

  const resetForm = () => {
    setScores(subjects.map(() => ({ ds: "", tp: "", exam: "" })));
    setOverallScore(0);
  };

  return (
    <div>
      <div className="header">
        <h1>Score Calculator</h1>
      </div>

      <div className="grid">
        {subjects.map((subject, index) => (
          <div key={index} className="card">
            <h2>{subject.name}</h2>
            <div className="inputs">
              <input
                type="number"
                value={scores[index].ds}
                placeholder={`DS (${subject.ds}%)`}
                onChange={(e) => {
                  const updatedScores = [...scores];
                  updatedScores[index].ds = e.target.value;
                  setScores(updatedScores);
                }}
              />
              {subject.tp > 0 && (
                <input
                  type="number"
                  value={scores[index].tp}
                  placeholder={`TP (${subject.tp}%)`}
                  onChange={(e) => {
                    const updatedScores = [...scores];
                    updatedScores[index].tp = e.target.value;
                    setScores(updatedScores);
                  }}
                />
              )}
              <input
                type="number"
                value={scores[index].exam}
                placeholder={`Exam (${subject.exam}%)`}
                onChange={(e) => {
                  const updatedScores = [...scores];
                  updatedScores[index].exam = e.target.value;
                  setScores(updatedScores);
                }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="footer">
        <p>Overall Weighted Score: {overallScore}</p>
        <button onClick={calculateTotal}>Calculate</button>
        <button onClick={resetForm}>Reset</button>
        <p>Made it by Ayoub ben ismain</p>
        <p>Ken 7atit akther ml 5 f analyse rak tekdheb</p>
      </div>
    </div>
  );
};

export default App;
