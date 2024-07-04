import React from "react";
import { FaUsers, FaRegNewspaper } from "react-icons/fa6";

function Content() {
  return (
    <div className="px-10 rounded-lg">
      <div className="flex">
        <div className="shadow-lg w-[300px] m-3 p-10 rounded-lg">
          <h3 className="flex items-center">
            <FaUsers className="mr2">Total Users</FaUsers>
            <p className="text-5xl mt-10">37</p>
          </h3>
        </div>
        <div className="shadow-lg w-[300px] m-3 p-10 rounded-lg">
          <h3 className="flex items-center">
            <FaRegNewspaper className="mr2">Total Posts</FaRegNewspaper>
            <p className="text-5xl mt-10">59</p>
          </h3>
        </div>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci ea
        nihil quis suscipit culpa dolore magnam, quod doloribus nesciunt tenetur
        perferendis praesentium at ducimus dicta omnis non temporibus, expedita
        error.
      </p>
    </div>
  );
}

export default Content;
