import React, {useEffect, useState} from 'react';
import Layout from "./components/_shared/layout/Layout";
import Input from "./components/_shared/input/Input";
import Button from "./components/_shared/button/Button";
import {randomCharGenerator} from "./utils/utilsCommon";
import Results from "./components/results/Results";
import {useDispatch} from "react-redux";
import {useTypedSelector} from "./hooks/useTypedSelector";
import {actionSetAttempt, actionSetClearAttempt, actionSetSetCurrentNumber} from "./store/actions/actions";
import Attempts from "./components/attempts/attempts";
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('')
  const [result, setResult] = useState(false)
  const {prevAttempt, currentNumber} = useTypedSelector((state)=>state.rootReducer)
  const dispatch = useDispatch()
  const matchResults = () => {
    if(currentNumber === inputValue){
      setResult(true)
      setInputValue('')
    }else {
      dispatch(actionSetAttempt(inputValue))
      setInputValue('')
    }
  }
  const resetStore = () => {
    dispatch(actionSetSetCurrentNumber(''))
    dispatch(actionSetClearAttempt())
    setResult(false)
  }
  useEffect(()=>{
    if(!currentNumber) {
      dispatch(actionSetSetCurrentNumber(`${randomCharGenerator()}`))
    }
  }, [currentNumber])

  return (
    <>
      <Layout>
        <div className={'form_wrapper'}>
          <Input valueHandler={setInputValue} value={inputValue} />
          <Button
            data={inputValue}
            clickHandler={prevAttempt.length === 10 ? resetStore : matchResults}
            title={'Attempt'}
          />
          <Button
            clickHandler={resetStore}
            title={'Reset'}
          />
        </div>
        <Attempts prevAttempt={prevAttempt}/>
        <Results currentNumber={currentNumber} results={result} />
      </Layout>
    </>
  );
}

export default App;
