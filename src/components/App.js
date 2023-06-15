import Header from './header/header'
import Table from './table/table'
import Form from './form/form'
import {useState} from 'react';

function App() {

  const [usInput, newInput] = useState(null)
  
  const calculateHandler = (usInput) => {
    newInput(usInput);
  };

  const yearlyData = [];
  
  if (usInput) {
    let currentSavings = +usInput['current-savings'];
    const yearlyContribution = +usInput['yearly-contribution'];
    const expectedReturn = +usInput['expected-return'] / 100;
    const duration = +usInput['duration'];
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }

  return (
    <div>
      <Header/>

      <Form onCalculate={calculateHandler}/>

      {!usInput && <p>EMPTY.</p>}
      {usInput && <Table data={yearlyData}
       initialInvestment={usInput['current-savings']}/>}
    </div>
  );
}

export default App;
