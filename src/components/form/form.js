import {useState} from 'react';
import classes from '../form/form.module.css'
const basic_val = {
  'current-savings': 1000,
  'yearly-contribution': 1200,
  'expected-return': 7,
  'duration': 10
}


function Form(props){
  const [usInput, setInput] = useState(basic_val)

  const submit = (e) =>{
    e.preventDefault();
    props.onCalculate(usInput);
  }

  const reset = (e) =>{
    setInput(basic_val)
  }

  const inputChange = (input, value) =>{
    setInput((pval) =>{
      return{
        ...pval,
        [input]: +value
      }
    })
    console.log(usInput);
  }



  return (
    <div>
      <form className={classes.form} onSubmit={submit}>

        <div className={classes['input-group']}>
          <p>
            <label  className={classes['current-savings']}>Current Savings ($)</label>
            <input onChange={(event)=> inputChange('current-savings', event.target.value)} type="number" id="current-savings" value={usInput['current-savings']} />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input onChange={(event)=> inputChange('yearly-contribution', event.target.value)} type="number" id="yearly-contribution" value={usInput['yearly-contribution']} />
          </p>
        </div>

        <div className={classes['input-group']}>
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input onChange={(event)=> inputChange('expected-return', event.target.value)} type="number" id="expected-return" value={usInput['expected-return']}/>
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input onChange={(event)=> inputChange('duration', event.target.value)} type="number" id="duration" value={usInput['duration']} />
          </p>
        </div>

        <p className={classes.actions}>
          <button type="reset" className={classes.buttonAlt} onClick={reset}>
            Reset
          </button>
          <button type="submit" className={classes.button} >
            Calculate
          </button>
        </p>
      </form>
    </div>
  );
}

export default Form;
