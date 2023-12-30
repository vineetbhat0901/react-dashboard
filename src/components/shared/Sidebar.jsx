import React from 'react';
import { FcBullish } from "react-icons/fc";

function Sidebar() {
  return (
    <div className="bg-neutral-900 text-white w-40 flex flex-col">
        <div className='flex item-center gap-2 px-1 py-3'>
        <FcBullish />
        <span>Openshop</span>
        </div>
        <div className='flex-1'>Top part</div>
        <div>Bottom Part</div>
    </div>
  );
}

export default Sidebar;