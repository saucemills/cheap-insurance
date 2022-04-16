/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable require-jsdoc */
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Steps from './components/Steps';


export default function Home() {
  return (
    <main className='h-screen m-0'>
      <div className='min-h-full mb-[-40px]'>
        <Navbar />
        <Hero />
        <Steps />
      </div>
      <Footer />
    </main>
  );
}
