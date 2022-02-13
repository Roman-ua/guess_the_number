import './attempts.css'

interface Props {
  prevAttempt: string[];
}
const Attempts = ({prevAttempt}: Props) => {
  return <div className={'attempts_wrapper'}>
    {prevAttempt.map((item: string, index)=>{
      return (
        <span key={index}>{item}</span>
      )
    })}
  </div>
}

export default Attempts
