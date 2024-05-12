import React from 'react'

const Card = ({title, amount, icon}) => {
  return (
    <div className="flex items-center bg-zinc-900 w-[250px] py-2 px-3 rounded-lg">
      <div className="rounded-md border border-red-900 w-[40px] h-[40px] flex justify-center items-center">
       {icon}
      </div>
      <div className="flex flex-col font-medium ps-4">
        <p className="text-zinc-400">{title}</p>
        <p>&#8377;{amount}</p>
      </div>
    </div>
  );
}

export default Card