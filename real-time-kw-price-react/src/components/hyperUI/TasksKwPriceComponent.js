import React from "react";

function TasksKwPriceComponent() {
  return (
    <div>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w text-center">
          <h2 className="text-3xl font-bold text-[#fafaf8] sm:text-4xl">
            Vad kostar sysslan idag?
          </h2>

          <p className="mt-4 text-[#6a7181] sm:text-xl">
            Se hur mycket saker och ting kostar med dagens elpriser.
          </p>
        </div>

        <dl className="mg-6 grid grid-cols-1 gap-4 divide-y divide-[#1e2a3a] sm:mt-8 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
          <div className="flex flex-col px-4 py-8 text-center">
            <dd className="text-4xl font-extrabold text-[#04a4ff] md:text-5xl mb-3">
              1,86kr
            </dd>

            <dt className="order-last text-lg font-medium text-[#99a1ae] mb-1">
              Ta en dusch
            </dt>

            <dt className="order-last text-s font-medium text-[#495667]">
              10 min, 160 liter vatten = ~6 kWh
            </dt>
          </div>

          <div className="flex flex-col px-4 py-8 text-center">
            <dd className="text-4xl font-extrabold text-[#ffd700] md:text-5xl mb-3">
              13,95kr
            </dd>

            <dt className="order-last text-lg font-medium text-[#99a1ae] mb-1">
              Ladda elbilen
            </dt>

            <dt className="order-last text-s font-medium text-[#495667]">
              Nissan Leaf 10-80% = ~45 kWh
            </dt>
          </div>

          <div className="flex flex-col px-4 py-8 text-center">
            <dd className="text-4xl font-extrabold text-[#04a4ff] md:text-5xl mb-3">
              0,25kr
            </dd>

            <dt className="order-last text-lg font-medium text-[#99a1ae] mb-1">
              Köra en tvättmaskin
            </dt>

            <dt className="order-last text-s font-medium text-[#495667]">
              Genomsnittlig = ~0,8 kWh
            </dt>
          </div>

          <div className="flex flex-col px-4 py-8 text-center">
            <dd className="text-4xl font-extrabold text-[#ffd700] md:text-5xl mb-3">
              0,02kr
            </dd>

            <dt className="order-last text-lg font-medium text-[#99a1ae] mb-1">
              Titta på TV en timme
            </dt>

            <dt className="order-last text-s font-medium text-[#495667]">
              Genomsnittlig = ~0,06 kWh
            </dt>
          </div>
        </dl>
      </div>
    </div>
  );
}

export default TasksKwPriceComponent;
