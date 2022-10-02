import React from "react";

const Subscribe = () => {
  return (
    <section className="grid grid-cols-2 gap-20 px-16 mb-4">
      <div>
        <h2>Get notified when we update!</h2>
        <p>
          Get notified when we add new items to our specials menu, <br />
          update our price list of have promos!
        </p>
      </div>
      <div className="flex gap-2">
        <form action="/" className="w-full">
          <input
            type="text"
            className=" w-full rounded-lg px-6 py-3"
            placeholder="gregphillips@gmail.com"
          />
        </form>
        <button className="bg-pink hover:bg-pink text-green font-semibold rounded-lg w-1/2 text-xl block h-12 px-5 py-3 font-rubik">
          Get notified
        </button>
      </div>
    </section>
  );
};

export default Subscribe;
