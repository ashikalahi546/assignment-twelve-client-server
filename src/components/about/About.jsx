
const About = () => {
  return (
    <div className="my-14 flex lg:flex-row flex-col items-center gap-8">
      <div className='bg-[url("/image/about.png")] md:h-96 sm:h-80 h-72 lg:w-6/12 w-full   bg-no-repeat bg-cover rounded-3xl'></div>
      <div className="lg:w-6/12">
        <h2 className="md:text-2xl text-xl font-medium">About us</h2>
        <p className="mt-4 text-base leading-6">
          House with fat bassline, huge beats & soulful male vocal. Extended
          club remix v Piano-led deep house with fat bassline, huge beats &
          soulful male vocal. club remix Piano. Piano-led deep house with fat
          bassline, huge beats & soulful male vocal. Extended club remix v
          Piano-led deep house with fat bassline, huge beats & soulful male
          vocal. club remix Piano huge beats & soulful male vocal.
        </p>
        <button className="bg-primary mt-7 px-5 py-2 text-white  md:text-sm text-xs  font-medium rounded-lg hover:bg-pink-500 duration-100 delay-150">
          Learn more
        </button>
      </div>
    </div>
  );
};

export default About;
