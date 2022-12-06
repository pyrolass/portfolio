const Home = () => {
  return (
    <main>
      <div className="flex h-screen">
        <section className=" w-3/6 pt-10  flex flex-col justify-between">
          <div className=" mx-32">
            <h1 className="font-bold text-5xl">
              <p className="hover:animate-bounce inline-block">H</p>
              <p className="hover:animate-bounce inline-block">i</p>
              <p className="hover:animate-bounce inline-block">!</p>
              <p className="inline"> </p>
              <p className="hover:animate-bounce inline-block">I</p>
              <p className="inline"> </p>
              <p className="hover:animate-bounce inline-block">A</p>
              <p className="hover:animate-bounce inline-block">M</p>
              <br />
              <p className="hover:animate-bounce inline-block">L</p>
              <p className="hover:animate-bounce inline-block">a</p>
              <p className="hover:animate-bounce inline-block">s</p>
              <p className="inline"> </p>
              <p className="hover:animate-bounce inline-block">Z</p>
              <p className="hover:animate-bounce inline-block">o</p>
              <p className="hover:animate-bounce inline-block">z</p>
              <p className="hover:animate-bounce inline-block">k</p>
            </h1>
            <h3 className="pt-10">
              I am a Native IOS/Flutter developer and a backend developer with a
              passion for building apps and websites.
            </h3>
          </div>
          <div className=" bg-red-500 h-44 px-32 py-10 text-white font-bold text-lg flex justify-between">
            <h1>Number of project</h1>
            <div className=" w-1/2">
              <div className="flex mb-2 justify-between">
                <h3>Mobile Application:</h3>
                <h3 className="">6</h3>
              </div>
              <hr className=" py-2" />
              <div className="flex mb-2 justify-between">
                <h3>Web Apps:</h3>
                <h3 className="">2</h3>
              </div>
              <hr />
            </div>
          </div>
        </section>
        <section className=" bg-black w-3/6 flex justify-center">
          <div className=" bg-white w-96 h-96 rounded-full m-auto bg-clip-content  flex "></div>
        </section>
      </div>
    </main>
  );
};

export default Home;
