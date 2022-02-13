import {reg} from "../../../utils/utilsCommon";
import './Input.css'

interface Props {
  valueHandler: (value: string) => void;
  value: string;
}

const Input = ({valueHandler, value}: Props) => {
  return (
    <div className={'input_wrapper'}>
      <p>
        {value !== '' && !reg.test(value) ? <span>Must contains only char</span> : null}
      </p>
      <input
        type={'text'}
        maxLength={4}
        className={'common_input'}
        value={value}
        onChange={(e)=>valueHandler(e.target.value)}
      />
    </div>
  )
}

export default Input;
