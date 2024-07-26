import { useSelector, useDispatch } from "react-redux"


export const CounterApp = () => {
    const counterVal = useSelector((storeState) => storeState.counter);
    const dispatch = useDispatch();
    return (
        <div>
            <h1 className="posthd" style={{color:'darkblue'}}>A Basic Counter App</h1>
            <p style={{margin: "0 auto", color:"brown", textAlign:"justify", width:"400px", height:"auto"}}>This is a simple basic counter app. By this app, you can increase the value  of the counter, or you can decrease the value of counter by clicking the button. Every time you click, the counter will re-render and the value will change.</p>
            <h1 style={{color:"crimson", textAlign:"center", fontSize:"30px", marginTop: '30px'}}>The value of the Counter is {counterVal}</h1>
            <div className="btnArea">
                <button className="btnC" onClick={() => dispatch({type: 'ADD', payload: 1})}>Add 1</button>
                <button className="btnC" onClick={() => dispatch({type: 'ADD', payload: 5})}>Add 5</button>
                <button className="btnC" onClick={() => dispatch({type: 'ADD', payload: 10})}>Add 10</button>
                <button className="btnC" onClick={() => dispatch({type: 'MINUS', payload: 1})}>Deduct 1</button>
                <button className="btnC" onClick={() => dispatch({type: 'MINUS', payload: 5})}>Deduct 5</button>
                <button className="btnC" onClick={() => dispatch({type: 'MINUS', payload: 10})}>Deduct 10</button>
                <button className="btnC" onClick={() => dispatch({type: 'MULTI', payload: 10})}>Multiply by 10</button>
                <button className="btnC" onClick={() => dispatch({type: 'DIVIDE', payload: 10})}>Divide by 10</button>
            </div>
        </div>
    )
}