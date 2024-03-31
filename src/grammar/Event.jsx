import { useState } from "react"


const Event = () => {
    function handleClick(event) {
        // alert('버튼 클릭')
        console.log(event)
        console.log(event.target)
        console.log(event.type)
    }

    const handleChange = (event) => {
        document.querySelector('.text').innerText = event.target.value
    }

    const handleOver = (event) => {
        event.target.style.backgroundColor = 'red'
        event.target.style.color = 'white'
    }

    const [state, setState] = useState(0);

    const handleState = () => {
        setState(state + 1)
    }

    return (
        <div>
            <h2>클릭하여 상태 변경</h2>
            <button onClick={handleState}>클릭 : {state}</button>

            <h3>조건부 렌더링 예제</h3>
            {state >= 5 ? <p>5 이상</p> : <p>5 이하</p>}

            <h1>Event</h1>
            <h2>클릭 이벤트</h2>
            <button onClick={handleClick}>버튼</button>

            <h2>입력 이벤트</h2>
            <input type="text" onChange={handleChange} />
            <div className="text"></div>

            <h2>마우스 오버 이벤트</h2>
            <div onMouseOver={handleOver}>마우스 오버</div>
        </div>
    )
}

export default Event