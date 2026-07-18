import CohortDetails from './CohortDetails';

function App() {
  return (
    <div>
      <h1>Cohorts Details</h1>
      <CohortDetails 
        cohortName="INTADMDF10 -.NET FSD" startedOn="22-Feb-2022" 
        status="Scheduled" coach="Tanay" trainer="Atul Kumar" 
      />
      <CohortDetails 
        cohortName="ADM21JF014 -Java FSD" startedOn="10-Sep-2021" 
        status="Ongoing" coach="Apoorv" trainer="Mukesh" 
      />
      <CohortDetails 
        cohortName="CDBJF21025 -Java FSD" startedOn="24-Dec-2021" 
        status="Ongoing" coach="Smriti" trainer="Ramesh" 
      />
    </div>
  );
}

export default App;