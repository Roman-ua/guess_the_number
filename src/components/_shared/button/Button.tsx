import {reg} from "../../../utils/utilsCommon";
import './Button.css'

interface Props {
  clickHandler: () => void;
  title: string;
  data?: string;
}

const Button = ({title, clickHandler, data}: Props) => {
  return (
    <button
      onClick={clickHandler}
      className={'common_button'}
      disabled={data ? data !== '' && !reg.test(data) || data.split('').length < 4 : false}
    >
      {title}
    </button>
  )
}

export default Button;
