import React from 'react';

import logo from './images/logo.svg';

function App() {
  return (
    <div className="bg-tLightGrayCyan font-SpaceMono">
      <header className="py-16">
        <img src={logo} alt="logo" className="mx-auto mb-8"/>
      </header>
      <main className="bg-white rounded-t-3xl -mt-12 p-8">
        <section>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="font-bold text-xl text-tDarkGrayCyan">Bill</label>
            <input type="number" className="bg-tLightCyan p-4"/>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="font-bold text-xl text-tDarkGrayCyan">Select Tip %</label>
            <input type="number" className="bg-tLightCyan p-4"/>
          </div>
        </section>
        <section>

        </section>
      </main>
    </div>
  );
}

export default App;
