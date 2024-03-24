function Hello() {
  console.log("Hello, world!");
  return(
    <>
      <div>
        <h2>컴포넌트 만들기</h2>
      </div>
      <div>
        <p>안녕하세요.</p>
      </div>
    </>
  )
}

export function World() {
  return(
    <h3>나의 세상!!</h3>
  )
}

export function Test() {
  return (
    <h4>테스트입니다.</h4>
  )
}

// export { World }
export default Hello;
