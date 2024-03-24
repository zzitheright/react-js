function Home({ title, des }) {
  // const { title, des } = props
  
  // const props = {
  //   title: "Home",
  //   des: "홈 화면",
  // }
  
  return (
    <article>
      <h2>{title}</h2>
      <p>이 페이지는 {des} 입니다.</p>
    </article>
  )
}

export default Home