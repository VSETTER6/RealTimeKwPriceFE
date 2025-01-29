import React from "react";

function SectionComponent() {
  return (
    <div>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
            <div>
              <div className="max-w-lg md:max-w-none">
                <h2 className="text-3xl font-bold text-[#fafaf8] sm:text-3xl">
                  Real Time KW Price hjälper dig hålla koll på elpriserna
                </h2>

                <p className="mt-4 text-[#6a7181] text-xl">
                  Gillar du och ha koll på elpriserna? Då har du kommit helt
                  rätt! Hos Real Time KW Price kan du kolla priserna dag för dag
                  och se vad olika sysslor kostar just idag. Du kan även kolla
                  elpriserna i Sveriges olika elområden.
                </p>
              </div>
            </div>

            <div>
              <img
                src="/images/elnat.jpg"
                className="rounded"
                alt="Elnat.jpg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SectionComponent;
