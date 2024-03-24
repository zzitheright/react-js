import logo from "./logo.svg";
import "./App.css";
import Hello, { Test, World } from "./module";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Nav from "./components/layout/Nav";
import Home from "./views/Home";

function App() {

  const listArr = [
    {
      title: "Home",
      des: "홈화면"
    },
    {
      title: "About",
      des: "소개 페이지"
    },
  ]

  return (
    <>
      <Header />
      <Nav />
      {listArr.map((item, index) => (
        <Home key={index} title={item.title} des={item.des} />
      ))}
      {/* <Home title="Home" des="홈 화면" />
      <Home title="About" des="소개 페이지" /> */}
      {/* <Footer /> */}
    </>
  );
}

export default App;
