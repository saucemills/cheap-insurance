/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable require-jsdoc */

import Footer from './components/Footer';
import FormBody from './components/FormBody';
import Navbar from './components/Navbar';

export default function form() {
  return (
    <main className='h-screen m-0'>
      <div className='min-h-full mb-[-40px]'>
        <Navbar />
        <FormBody />
      </div>
      <Footer />
    </main>
  );
}
