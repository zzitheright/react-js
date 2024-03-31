import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header"
import Home from "./components/views/home/Home";
import Event from "./grammar/Event";

function App() {

  const navArr = [
    { title: 'Home' }, { title: 'About' }, { title: 'Signin' }
  ]

  return (
    <div className="wrap">
      <Event />
      <Header title="dashboard" nav={navArr} />

      <Home title="home" desc="홈 화면" />
      <Home title="about" desc="소개 화면" />
      <Home title="signin" desc="로그인 화면" />
      
      <Footer />      
    </div>
  );
}

export default App;
