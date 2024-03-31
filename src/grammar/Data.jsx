function Data() {
  let a = 1;
  a = 2;
  console.log(a)

  const b = 10;
  // b = 20; // Error
  console.log(b)

  // 문자열(String)
  const name = '홍길동';
  
  // 숫자(Number)
  const age = 20;
  
  // 불리언(Boolean)
  const visible = false;
  
  // 객체(Object)
  const user = {
    name: '가을이',
    age: 1,

  }
  
  // 배열(Array)
  const array = [1, 2, 3]
  
  // 배열 & 객체
  const users = [
    {
      name: '여름이',
      age: 1,
    },
    {
      name: '가을이',
      age: 5,
    },
    {
      name: '겨울이',
      age: 2,
    }
  ]

  const info = {
    birth: '2020-01-01',
    phone: null,
  }

  console.log(info.birth); // 2020-01-01
  console.log(info.phone); // null
  console.log(info.address); // undefined

  const data2 = {
    name: 'vue2',
    desc: '재밌어2'
  }

  return (
    <>
      <ul>
        <li>{info.birth}</li>
        <li>{info.phone || '전화번호 정보 없음'}</li>
        <li>{info.address || '주소 정보 없음'}</li>
      </ul>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user.name} 나이는 {user.age}살입니다.</li>
        ))}
      </ul>
      <ul>
        <li>{users[0].name} 나이는 {users[0].age}살입니다.</li>
        <li>{users[1].name} 나이는 {users[1].age}살입니다.</li>
        <li>{users[2].name} 나이는 {users[2].age}살입니다.</li>
      </ul>
      <ul>
        {array.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <ul>
        <li>{array[0]}</li>
        <li>{array[1]}</li>
        <li>{array[2]}</li>
      </ul>

      <p>나의 이름은 {name}입니다.</p>
      <p>나의 나이는 {age}살입니다.</p>
      <p>
        {/* {조건 ? 참 : 거짓} */}
        {visible ? <span>로그인</span> : <span>로그아웃</span>}
      </p>
      <p>나의 이름은 {user.name}이고, 나이는 {user.age}살이야.</p>
      
      {/* <Func1 name="vue" desc="즐거워" /> */}
      {/* <Func1 {...data2} /> */}
      <Func1 />
      <Func2 />
      <Func3 />
    </>

  )
}

// 함수 선언식(기명 함수)
function Func1({ name = "리액트 테스트", desc = "재미 없어" }) {
  // props = {name: 'vue', desc: '재밌어'}
  // const {name, desc} = props;
  return (
    <>
      <h1>안녕 난 {name}야!</h1>
      <p>{name}는 {desc}.</p>
    </>
  )
}

// 함수 표현식(익명 함수)
const Func2 = function () {
  return (
    <>
      <h1>안녕 난 리액트야!</h1>
      <p>리액트는 재밌어.</p>
    </>
  )
}

// 화살표 함수
const Func3 = () => {
  return <p>화살표 함수</p>
}

export default Data