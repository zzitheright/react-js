const Nav = ({ nav }) => {

  // props.nav = [{ title: 'Home' }, { title: 'About' }, { title: 'Signin' }]
  
  // let list = [
  //   // <li>
  //   //   <a href="#">{props.nav[0].title}</a>
  //   // </li>,
  //   // <li>
  //   //   <a href="#">{props.nav[1].title}</a>
  //   // </li>,
  //   // <li>
  //   //   <a href="#">{props.nav[2].title}</a>
  //   // </li>

  // ]

  // // for (let 초기값; 조건; 증감) {실행문}
  // for(let i = 0; i < props.nav.length; i++) {
  //   list.push(
  //     <li key={props.nav[i]}>
  //       <a href="#">{props.nav[i].title}</a>
  //     </li>
  //   )
  // }
  
  return (
    <nav>
      <ul>
        {nav.map((item, index) => (
          <li key={index}>
            <a href="#">{item.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav