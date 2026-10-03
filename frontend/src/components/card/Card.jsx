import { ChevronRight } from "lucide-react";


const Card = ({
  imagePath,
  title,
  description,
  actionArrow,
  height,
  width,
}) => {
  return (
    <div className="flex flex-col p-8 gap-2">
      <img
        className="border rounded object-cover object-center hover:scale-105 cursor-pointer transition-transform duration-300"
        style={{
          height: height || "400px",
          width: width || "280px",
        }}
        src={imagePath}
        alt={title}
      />

      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <p className="text-[16px] p-2">{title}</p>

          {description && (
            <p className="text-[14px] px-2 text-gray-600">{description}</p>
          )}
        </div>

        {actionArrow && (
          <span className="cursor-pointer pr-2 py-2 items-center">
            <ChevronRight />
          </span>
        )}
      </div>
    </div>
  );
};

export default Card;
