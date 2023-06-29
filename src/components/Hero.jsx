import { logo } from '../assets';

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center mb-10 pt-3 w-full'>
        <img
          src={logo}
          alt='sumz_logo'
          className='w-28 object-contain'
        />
        <a
          href='https://github.com/GuillermoSMG'
          target='_blank'
          className='rounded-xl bg-black text-white px-3 py-1 font-bold'
          rel='noreferrer'
        >
          Github
        </a>
      </nav>
      <h1 className='head_text'>
        Summarize Articles with <br className='max-md:hidden' />
        <span className='orange_gradient'>OpenIA GPT-4</span>
      </h1>
      <h2 className='desc'>
        Summize is an open-source article summarizer that turns long articles
        into concise summaries, making reading easier.
      </h2>
    </header>
  );
};
export default Hero;
