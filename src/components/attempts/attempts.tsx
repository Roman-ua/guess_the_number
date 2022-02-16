import './attempts.css'

interface Props {
  prevAttempt: string[];
  currentNumber: string;
}
const Attempts = ({prevAttempt, currentNumber}: Props) => {
  return <div className={'attempts_wrapper'}>
    {prevAttempt.map((item: string, index)=>{
      return (
        <span key={index}>{item}</span>
      )
    })}
    {prevAttempt.length === 9 && <div className={'correct'}>The correct number was {currentNumber}</div>}
  </div>
}

export default Attempts
