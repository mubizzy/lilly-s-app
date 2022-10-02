import React from "react";

const Subscribe = () => {
  return (
    <section className="grid grid-cols-2 gap-2 px-16 mb-4">
      <div>
        <h2>Get notified when we update!</h2>
        <p>
          Get notified when we add new items to our specials menu, <br />
          update our price list of have promos!
        </p>
      </div>
      <div className="flex gap-3">
        <form action="/" className="">
          <input
            type="text"
            className=" w-full rounded-lg px-5 py-5"
            placeholder="gregphillips@gmail.com"
          />
        </form>
        <button className="bg-pink hover:bg-pink text-green font-semibold py-5 px-5 rounded">
          Get notified
        </button>
      </div>
    </section>
  );
};

export default Subscribe;
