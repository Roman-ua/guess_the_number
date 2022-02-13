import './Results.css'

interface Props {
  results: boolean;
  currentNumber: string;
}

const Results = ({results, currentNumber}: Props) => {
  return <div className={'results_wrapper'}>
      {results && currentNumber.split('').map((item: string, index) => {
        return <span key={index}>{item}</span>
      })}
    </div>
}

export default Results
