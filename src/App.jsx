import './App.css';
import bg from './assets/creative.webp';
import Header from './components/Header.jsx';

function App() {
  const style = {
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  return (
    <main style={style} className='w-screen h-screen'>
    <Header/>
    <div className='w-full h-full flex flex-col justify-center px-[4rem]'>
      <h1 className='text-white font-bold text-[5rem]'>Creative</h1>
      <p className='text-white text-[2rem] font-bold'>design studio.</p>
      <button className='w-[10rem] py-[6px] bg-white rounded-3xl mt-[1rem] text-[#111] hover:animate-spin'>Explore Now</button>
    </div>
    </main>
  );
}

export default App;
