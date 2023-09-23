import Header from "../components/Header"
import handleSubmit from '../handle/handlesubmit';
import { useRef } from 'react';

export default function Test() {

    const dataRef = useRef()
 
    const submithandler = (e) => {
        e.preventDefault()
        handleSubmit(dataRef.current.value)
        dataRef.current.value = ""
    }

    
    return (
        <>
            <Header />
            <h2>Test</h2>
            <div className="App">
                <form onSubmit={submithandler}>
                    <input type= "text" ref={dataRef} />
                    <button type = "submit">Save</button>
                </form>
            </div>
        </>
    )
}