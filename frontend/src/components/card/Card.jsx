import React from 'react'

const Card = ({imagePath,title,description,actionArrow,height,width}) => {
  return (
    <div className="flex flex-col p-8">
      <img
        className={`h-[${height ? height : "300px"}] w-[${width ? width : "260px"}] object-cover object-center border rounded hover:scale-105 cursor-pointer transition-transform duration-300`}
        src={imagePath}
        alt={title}
      />
      <div className="flex justify-between">
        <div className="flex flex-col">
          <p className="text-[16px] p-2">{title}</p>
          {description && <p className="text-[14px]">{description}</p>}
        </div>
        {actionArrow && <div></div>}
      </div>
    </div>
  );
}

export default Card