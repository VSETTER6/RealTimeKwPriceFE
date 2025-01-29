import React from "react";

function UserSettingsComponent() {
  return (
    <div className="flex-grow">
      <div className="divider flex items-center flex-grow mt-10">
        <div className="border-t border-[#04a4ff] w-full"></div>
        <div className="text-[#ffd700] text-2xl font-bold px-8  whitespace-nowrap">
          User Settings
        </div>
        <div class="border-t border-[#04a4ff] w-full"></div>
      </div>

      <div className="mt-5">
        <label
          htmlFor="Username"
          className="block text-lg font-semibold text-[#ffd700]">
          Username
        </label>
        <input
          type="username"
          id="Username"
          placeholder="johndough123"
          className="mt-3 rounded-md shadow-sm sm:text-m border-gray-700 bg-gray-800 text-white h-10 w-full pl-2"
        />
        <div className="flex justify-end mt-5">
          <a
            className="inline-block rounded border border-[#ffd700] bg-[#ffd700] px-8 py-3 text-sm font-medium text-white hover:bg-[#ccac00] hover:text-white focus:outline-none focus:ring active:text-[#ffd700] mr-5"
            href="#">
            Clear
          </a>
          <a
            className="inline-block rounded border border-[#04a4ff] bg-[#04a4ff] px-8 py-3 text-sm font-medium text-white hover:bg-[#0383cc] hover:text-white focus:outline-none focus:ring active:text-[#04a4ff]"
            href="#">
            Save
          </a>
        </div>
      </div>

      <div className="divider flex items-center flex-grow mt-10">
        <div className="border-t border-[#1e2a3a] w-full"></div>
      </div>

      <div className="mt-5">
        <label
          htmlFor="UserEmail"
          className="block text-lg font-semibold text-[#ffd700]">
          Email
        </label>
        <input
          type="email"
          id="UserEmail"
          placeholder="john@rhcp.com"
          className="mt-3 rounded-md shadow-sm sm:text-m border-gray-700 bg-gray-800 text-white h-10 w-full pl-2"
        />
        <div className="flex justify-end mt-5">
          <a
            className="inline-block rounded border border-[#ffd700] bg-[#ffd700] px-8 py-3 text-sm font-medium text-white hover:bg-[#ccac00] hover:text-white focus:outline-none focus:ring active:text-[#ffd700] mr-5"
            href="#">
            Clear
          </a>
          <a
            className="inline-block rounded border border-[#04a4ff] bg-[#04a4ff] px-8 py-3 text-sm font-medium text-white hover:bg-[#0383cc] hover:text-white focus:outline-none focus:ring active:text-[#04a4ff]"
            href="#">
            Save
          </a>
        </div>
      </div>

      <div className="divider flex items-center flex-grow mt-10">
        <div className="border-t border-[#1e2a3a] w-full"></div>
      </div>

      <div className="mt-5">
        <label
          htmlFor="Phonenumber"
          className="block text-lg font-semibold text-[#ffd700]">
          Phone number
        </label>
        <input
          type="phonenumber"
          id="Phonenumber"
          placeholder="0000-11 11 11"
          className="mt-3 rounded-md shadow-sm sm:text-m border-gray-700 bg-gray-800 text-white h-10 w-full pl-2"
        />
        <div className="flex justify-end mt-5">
          <a
            className="inline-block rounded border border-[#ffd700] bg-[#ffd700] px-8 py-3 text-sm font-medium text-white hover:bg-[#ccac00] hover:text-white focus:outline-none focus:ring active:text-[#ffd700] mr-5"
            href="#">
            Clear
          </a>
          <a
            className="inline-block rounded border border-[#04a4ff] bg-[#04a4ff] px-8 py-3 text-sm font-medium text-white hover:bg-[#0383cc] hover:text-white focus:outline-none focus:ring active:text-[#04a4ff]"
            href="#">
            Save
          </a>
        </div>
      </div>

      <div className="divider flex items-center flex-grow mt-10">
        <div className="border-t border-[#1e2a3a] w-full"></div>
      </div>

      <div className="mt-5">
        <label
          htmlFor="Location"
          className="block text-lg font-semibold text-[#ffd700]">
          Location
        </label>
        <select
          name="HeadlineAct"
          id="HeadlineAct"
          className="mt-3 rounded-md shadow-sm sm:text-m border-gray-700 bg-gray-800 text-white h-10 w-full pl-2">
          <option value="SE1">SE1 - Luleå</option>
          <option value="SE2">SE2 - Sundsvall</option>
          <option value="SE3">SE3 - Stockholm</option>
          <option value="SE4">SE4 - Malmö</option>
        </select>
        <div className="flex justify-end mt-5 mb-10">
          <a
            className="inline-block rounded border border-[#ffd700] bg-[#ffd700] px-8 py-3 text-sm font-medium text-white hover:bg-[#ccac00] hover:text-white focus:outline-none focus:ring active:text-[#ffd700] mr-5"
            href="#">
            Clear
          </a>
          <a
            className="inline-block rounded border border-[#04a4ff] bg-[#04a4ff] px-8 py-3 text-sm font-medium text-white hover:bg-[#0383cc] hover:text-white focus:outline-none focus:ring active:text-[#04a4ff]"
            href="#">
            Save
          </a>
        </div>
      </div>
    </div>
  );
}

export default UserSettingsComponent;
