import React from 'react';

import logo from './images/logo.svg';

function App() {
  return (
    <div className="bg-tLightGrayCyan font-SpaceMono">
      <header className="py-16">
        <img src={logo} alt="logo" className="mx-auto mb-8"/>
      </header>
      <main className="bg-white rounded-t-3xl -mt-12 p-8">
        <section className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <label htmlFor="" className="font-bold text-xl text-tDarkGrayCyan">Bill</label>
            <input type="number" className="bg-tLightCyan p-4"/>
          </div>
          <div className="flex flex-col gap-4">
            <label htmlFor="" className="font-bold text-xl text-tDarkGrayCyan">Select Tip %</label>
            <div className="grid grid-cols-2 grid-rows-3 gap-4">
              <button className="p-4 bg-tVeryDarkCyan text-white rounded-lg font-bold text-2xl">5%</button>
              <button className="p-4 bg-tVeryDarkCyan text-white rounded-lg font-bold text-2xl">10%</button>
              <button className="p-4 bg-tVeryDarkCyan text-white rounded-lg font-bold text-2xl">15%</button>
              <button className="p-4 bg-tVeryDarkCyan text-white rounded-lg font-bold text-2xl">25%</button>
              <button className="p-4 bg-tVeryDarkCyan text-white rounded-lg font-bold text-2xl">50%</button>
              <button className="p-4 bg-tLightCyan text-tDarkGrayCyan rounded-lg font-bold text-2xl">Custom</button>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <label htmlFor="" className="font-bold text-xl text-tDarkGrayCyan">Number of People</label>
            <input type="number" className="bg-tLightCyan p-4"/>
          </div>
        </section>
        <section className="bg-tVeryDarkCyan p-8 rounded-3xl gap-8 flex flex-col mt-8 mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-white text-xl">Tip Amount</h1>
              <h2 className="text-tGrayCyan">/ person</h2>
            </div>
            <h1 className="text-tStrongCyan font-bold text-3xl">$4.27</h1>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-white text-xl">Total</h1>
              <h2 className="text-tGrayCyan">/ person</h2>
            </div>
            <h1 className="text-tStrongCyan font-bold text-3xl">$4.27</h1>
          </div>
          <button className="p-4 bg-tStrongCyan text-tVeryDarkCyan uppercase rounded-lg font-bold text-2xl">Reset</button>
        </section>
      </main>
    </div>
  );
}

export default App;
