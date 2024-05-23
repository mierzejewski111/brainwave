const Hero = () => {
  const date = new Date();
  const months = ["styczeń", "luty", "marzec", "kwiecień", "maj", "czerwiec"];
  return (
    <>
      <div className="mt-[2vh] w-[80%] mx-auto h-[80vh] border-8 rounded-3xl ">
        <p className="leading-[60px] text-[30px] text-center">
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            mBank
          </span>{" "}
          Otrzymaj do 450 zł za otwarcie konta!
        </p>
        {/*  */}
        <div className="bg-[#DFFDFF] w-[45%]  rounded-3xl ml-[25px] mb-3">
          <h1 className="text-center text-black ">Otwórz konto</h1>
          <p className="text-black text-[24px] ml-3 leading-[100px]">
            1 Przejdź na stronę promocji z naszego{" "}
            <a
              href="https://www.mbank.pl/indywidualny/konta/konta-osobiste/konto-polandrock/"
              className="text-red-600"
              target="_blank"
            >
              linku
            </a>
            <input
              type="checkbox"
              className="ml-[40px]  h-[20px]  w-[20px] rounded-3xl"
            />
          </p>
          <p className="text-black text-[24px] ml-3 leading-[100px]">
            2 Zamów karte debetową do konta{" "}
            <input
              type="checkbox"
              className="ml-[40px]  h-[20px]  w-[20px] rounded-3xl"
            />
          </p>
          <p className="text-black text-[24px] ml-3 leading-[100px]">
            3 Zaznacz wszystkie zgody{" "}
            <input
              type="checkbox"
              className="ml-[40px]  h-[20px]  w-[20px] rounded-3xl"
            />
          </p>
          <p className="text-black text-[24px] ml-3 leading-[100px]">
            4 Potwierdz swoją tożsamość przez selfie{" "}
            <input
              type="checkbox"
              className="ml-[40px]  h-[20px]  w-[20px] rounded-3xl"
            />
          </p>
        </div>
        <div className="bg-[#DFFDFF] w-[45%]  rounded-3xl ml-[25px]">
          <h1 className="text-center text-black ">
            Zadania do wykonania od: {date.getDate()} {months[date.getMonth()]}{" "}
            do: {date.getDate() + 7} {months[date.getMonth()]}
          </h1>

          <p className="text-black text-[24px] ml-3 leading-[100px]">
            1. Wpływ na 1000 zł{" "}
            <input
              type="checkbox"
              className="ml-[40px]  h-[20px]  w-[20px] rounded-3xl"
            />
          </p>
          <p className="text-black text-[24px] ml-3 leading-[100px]">
            2. 8 tranzakcji kartą lub blikiem{" "}
            <input
              type="checkbox"
              className="ml-[40px]  h-[20px]  w-[20px] rounded-3xl"
            />
          </p>
        </div>
        <div className="bg-[#DFFDFF] w-[45%] ml-[50%] rounded-3xl ml-[25px] mt-[-650px]">
          <h1 className="text-center text-black ">
            Zadania do wykonania od: 1 lipca do: 31 lipca
          </h1>

          <p className="text-black text-[24px] ml-3 leading-[100px]">
            1. Wpływ na 1000 zł{" "}
            <input
              type="checkbox"
              className="ml-[40px]  h-[20px]  w-[20px] rounded-3xl"
            />
          </p>
          <p className="text-black text-[24px] ml-3 leading-[100px]">
            2. 8 tranzakcji kartą lub blikiem{" "}
            <input
              type="checkbox"
              className="ml-[40px]  h-[20px]  w-[20px] rounded-3xl"
            />
          </p>
        </div>
        <div className="bg-[#DFFDFF] w-[45%] ml-[50%] rounded-3xl ml-[25px] mt-[100px]">
          <h1 className="text-center text-black ">
            Zadania do wykonania od: 1 sierpnia do: 31 sierpnia
          </h1>

          <p className="text-black text-[24px] ml-3 leading-[100px]">
            1. Wpływ na 1000 zł{" "}
            <input
              type="checkbox"
              className="ml-[40px]  h-[20px]  w-[20px] rounded-3xl"
            />
          </p>
          <p className="text-black text-[24px] ml-3 leading-[100px]">
            2. 8 tranzakcji kartą lub blikiem{" "}
            <input
              type="checkbox"
              className="ml-[40px]  h-[20px]  w-[20px] rounded-3xl"
            />
          </p>
        </div>

        {/*  */}
      </div>

      <div className="mt-[2vh] w-[80%] mx-auto h-[80vh] border-8 rounded-3xl"></div>
    </>
  );
};

export default Hero;
