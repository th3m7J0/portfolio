import React from 'react';

import Section01 from './components/section01-component/Section01';
import Section02 from './components/section02-component/Section02';
import Section03 from './components/section03-component/Section03';
import Section04 from './components/section04-component/Section04';
import SignUp from './components/sign-up-component/SignUp';
import Section05 from './components/section05-component/Section05';
import Section06 from './components/section06-component/Section06';
import Section07 from './components/section07-component/Section07';
import Register from './components/register-component/Register';
import Footer from './components/footer-component/Footer';


function App() {
  return (
    <div className="App">
        <Section01/>
        <Section02/>
        <Section03/>
        <Section04/>
        <SignUp/>
        <Section05/>
        <Section06/>
        <Section07/>
        <Register/>
        <Footer/>
    </div>
  );
}

export default App;
