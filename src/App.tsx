import React, { useState } from "react";

import logo from "./images/logo.svg";
import iconPerson from "./images/icon-person.svg";
import iconDolar from "./images/icon-dollar.svg";

function App() {
  const [billValue, setBillValue] = useState<number>();
  const [billTax, setBillTax] = useState<number>();
  const [billPeople, setPeople] = useState<number>();

  function calculateTotal(){
    if (billValue == null || billTax == null || billPeople == null) return 0;
    return ((billValue+billTax/100*billValue)/billPeople).toFixed(2);
  }

  function taxPerPerson(){
    if (billValue == null || billTax == null || billPeople == null) return 0;
    return ((billTax/100*billValue)/billPeople).toFixed(2);
  }

  return (
    <div className="bg-tLightGrayCyan font-SpaceMono lg:pb-32">
      <header className="py-16">
        <img src={logo} alt="logo" className="mx-auto mb-8" />
      </header>
      <main className="bg-white rounded-t-3xl lg:rounded-3xl -mt-12 p-8 max-w-4xl mx-auto lg:flex lg:gap-8">
        <section className="flex flex-col gap-8 lg:w-3/6">
          <div className="flex flex-col gap-4">
            <label htmlFor="" className="font-bold text-lg text-tDarkGrayCyan">
              Bill
            </label>
            <div className="relative">
              <img
                src={iconDolar}
                alt="icon person"
                className="absolute top-0 h-2/6 mt-4 ml-4 pointer-events-none"
              />
              <input
                type="number"
                onChange={(event) => setBillValue(Number(event.target.value))}
                className="bg-tLightCyan px-4 py-2 rounded-lg w-full pl-12 text-right font-bold text-3xl text-tVeryDarkCyan focus:outline-none focus:ring focus:ring-tStrongCyan"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <label htmlFor="" className="font-bold text-lg text-tDarkGrayCyan">
              Select Tip %
            </label>
            <div className="grid grid-cols-2 grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 gap-4">
              <button
                onClick={() => setBillTax(5)}
                className={`${billTax === 5 ? "bg-tStrongCyan text-tVeryDarkCyan" : "bg-tVeryDarkCyan text-white"} p-4 rounded-lg font-bold text-2xl`}
              >
                5%
              </button>
              <button
                onClick={() => setBillTax(10)}
                className={`${billTax === 10 ? "bg-tStrongCyan text-tVeryDarkCyan" : "bg-tVeryDarkCyan text-white"} p-4 rounded-lg font-bold text-2xl`}
              >
                10%
              </button>
              <button
                onClick={() => setBillTax(15)}
                className={`${billTax === 15 ? "bg-tStrongCyan text-tVeryDarkCyan" : "bg-tVeryDarkCyan text-white"} p-4 rounded-lg font-bold text-2xl`}
              >
                15%
              </button>
              <button
                onClick={() => setBillTax(25)}
                className={`${billTax === 25 ? "bg-tStrongCyan text-tVeryDarkCyan" : "bg-tVeryDarkCyan text-white"} p-4 rounded-lg font-bold text-2xl`}
              >
                25%
              </button>
              <button
                onClick={() => setBillTax(50)}
                className={`${billTax === 50 ? "bg-tStrongCyan text-tVeryDarkCyan" : "bg-tVeryDarkCyan text-white"} p-4 rounded-lg font-bold text-2xl`}
              >
                50%
              </button>
              <input
                onChange={(event) => setBillTax(Number(event.target.value))}
                className="p-4 bg-tLightCyan text-tDarkGrayCyan rounded-lg font-bold text-2xl text-right focus:outline-none focus:ring focus:ring-tStrongCyan"
                placeholder="Custom"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <label htmlFor="" className="font-bold text-lg text-tDarkGrayCyan">
                Number of People
              </label>
              <p className={`${billPeople !== 0 && 'hidden'} font-bold text-red-600`}>Can't be zero</p>
            </div>
            <div className="relative">
              <input
                type="number"
                onChange={event => setPeople(Number(event.target.value))}
                className={`${billPeople === 0 && "ring-red-600 ring"} bg-tLightCyan rounded-lg px-4 py-2 w-full pl-12 text-right font-bold text-3xl text-tVeryDarkCyan focus:outline-none focus:ring focus:ring-tStrongCyan`}
              />
              <img
                src={iconPerson}
                alt="icon person"
                className="absolute top-0 h-2/6 mt-4 ml-4 pointer-events-none"
              />
            </div>
          </div>
        </section>
        <section className="bg-tVeryDarkCyan p-8 rounded-3xl gap-8 flex flex-col mt-8 mb-8 lg:w-3/6 lg:mb-0">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-white text-xl">Tip Amount</h1>
              <h2 className="text-tGrayCyan">/ person</h2>
            </div>
            <h1 className="text-tStrongCyan font-bold text-3xl">${taxPerPerson()}</h1>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-white text-xl">Total</h1>
              <h2 className="text-tGrayCyan">/ person</h2>
            </div>
            <h1 className="text-tStrongCyan font-bold text-3xl">
              ${calculateTotal()}
            </h1>
          </div>
          <button className="p-4 bg-tStrongCyan text-tVeryDarkCyan uppercase rounded-lg font-bold text-2xl lg:mt-auto">
            Reset
          </button>
        </section>
      </main>
    </div>
  );
}

export default App;
