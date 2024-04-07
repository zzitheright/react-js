import { useState } from "react";
import switchOn from './../assets/images/switch-on.svg';
import switchOff from './../assets/images/switch-off.svg';
import { FaUmbrellaBeach } from "react-icons/fa6";
import { GiBlockHouse, GiFarmTractor } from "react-icons/gi";
import { FaSkyatlas } from "react-icons/fa";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

function State() {
  // 바닐라 스크립트
  // let name ='김겨울';
  // function changeName() {
  //     // 삼항 연사자
  //     // 조건 ? 참 : 거짓
  //     name = name === '김겨울' ? '김가을' : '김겨울';
  //     // name = '김가을';
  //     console.log(name);
  //     //.name 태그 안의 텍스트를 name 변수로 변경
  //     document.querySelector('.name').innerText = name;
  // }

  // useState() 함수를 사용하여 상태값을 생성
  // const [상태값, 상태값을 변경할 수 있는 함수]
  // =useState(초기값)
  const [name, setName] = useState('김겨울');
  function changeName() {
    setName(name === '김겨울' ? '김가을' : '김겨울');
  }

  const [number, setNumber] = useState(0);

  const [isOn, setIsOn] = useState(false);
  function changeOn() {
    setIsOn(!isOn)
  }

  const sortArr = [
    {
      value: "해변",
      icon: <FaUmbrellaBeach />,
    },
    {
      value: "한옥",
      icon: <GiBlockHouse />,
    },
    {
      value: "농장",
      icon: <GiFarmTractor />,
    },
    {
      value: "전망",
      icon: <FaSkyatlas />,
    },
  ];

  const [selected, setSelected] = useState(0);

  // function handleSelected(e) {
  //   setSelected(e.target.index);
  // }

  const [isToggled, setIsToggled] = useState(false);
  // function toggledOn() {
  //   setIsToggled(!isToggled)
  //   console.log(isToggled)
  // }

  return(
    <>
      <div>
        <h3>햄버거 메뉴</h3>
        {/* <button onClick={toggledOn}><GiHamburgerMenu /></button> */}
        <button onClick={() => setIsToggled(!isToggled)}>{isToggled ? <IoClose /> : <GiHamburgerMenu />}</button>
        <ul style={{ display: isToggled ? 'block' : 'none', }}>
          <li>menu1</li>
          <li>menu2</li>
          <li>menu3</li>
          <li>menu4</li>
        </ul>
      </div>
      <div>
        <h3>menu 클릭시 active 클래스 추가</h3>
        <SortStyled>
          {/* {sortArr.map((index, icon, value)) => (
            <li key={index} icon={icon} value={value} />
            )} */}
            {sortArr.map((item, index) => (
              <li key={index} className={selected === index ? 'active' : ''} onClick={()=> setSelected(index)}>
                {item.icon}
                {item.value}
              </li>
            ))}
          {/* <li className="active">
            <FaUmbrellaBeach />
            해변
          </li>
          <li>
            <GiBlockHouse />
            한옥
          </li>
          <li>
            <GiFarmTractor />
            농장
          </li>
          <li>
            <FaSkyatlas />
            전망
          </li> */}
        </SortStyled>
      </div>
      <div>
        <h3>이미지 토글</h3>
        <img onClick={changeOn} src={isOn ? switchOn : switchOff} alt="switch" style={{ width:'100px' }} />
        <div>{isOn ? '켜짐' : '꺼짐'}</div>
      </div>
      <div>
        <h3>Counter</h3>
        <strong>{number}</strong>
        <button onClick={() => setNumber(number + 1)}>증가</button>
        <button onClick={() => setNumber(number - 1)}>감소</button>
      </div>
      <div>
        <h3>이름 바꾸기</h3>
        <strong className="name">{name}</strong>
        <button onClick={() => setName(name === '김겨울' ? '김가을' : '김겨울')}>이름 바꾸기</button>
        {/* <button onClick={() => {return setName(name === '김겨울' ? '김가을' : '김겨울');}}>이름 바꾸기</button> */}
        {/* <button onClick={changeName}>이름 바꾸기</button> */}
      </div>
    </>
  )
}

const SortStyled = styled.ul`
  display: flex;
  list-style: none;

  li {
    display: flex;
    gap: 10px;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    cursor: pointer;

    &.active {
      color: red;
    }

    svg {
      font-size: 30px;
    }
  }
`

// const SortLiStyled = styled.li`
//   display: flex;
//   list-style: none;
// `

export default State