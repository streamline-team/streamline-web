import React, { useEffect, useRef, useState } from "react";
import {
  Calendar,
  Sliders,
  BarChart,
  Circle,
  Plus,
  Minus,
  X,
} from "react-feather";

interface ToDoTaskProps {
  title: string;
  description: string;
  done: boolean;
  dueDate: Date;
  prority: number;
  tags: string[];
}

const ToDoTask: React.FC<ToDoTaskProps> = ({
  title,
  description,
  done,
  dueDate,
  prority,
  tags,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isTruncated, setIsTruncated] = useState(true);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const tagsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (descriptionRef.current) {
      console.log(descriptionRef.current.scrollHeight);
      const lineHeight = parseInt(
        getComputedStyle(descriptionRef.current).lineHeight || "0",
        10
      );
      const maxHeight = lineHeight * 2; // Two lines of text
      const descriptionHeight = descriptionRef.current.scrollHeight; // Use scrollHeight to get full height

      if (descriptionHeight > maxHeight) {
        setIsTruncated(true);
        if (!isExpanded) {
          descriptionRef.current.style.maxHeight = `${maxHeight}px`;
          descriptionRef.current.classList.add("overflow-hidden");
        } else {
          descriptionRef.current.style.maxHeight = "none";
          descriptionRef.current.classList.remove("overflow-hidden");
        }
      } else {
        setIsTruncated(false);
      }
    }
  }, [description, isExpanded]);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const [isTagsExpanded, setIsTagsExpanded] = useState(false);

  const expandTags = () => {
    setIsTagsExpanded(!isTagsExpanded);
  };

  const calculateTagsFit = (
    tagsContainerRef: React.RefObject<HTMLDivElement>,
    tagWidth: number
  ): number => {
    if (tagsContainerRef.current) {
      const containerWidth = tagsContainerRef.current.offsetWidth;
      const availableWidth = containerWidth - 16; // Subtract padding

      return Math.floor(availableWidth / tagWidth);
    }

    return 0;
  };

  const [tagsToShow, setTagsToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (tagsContainerRef.current) {
        console.log(tagsContainerRef.current.offsetWidth);
        const tagWidth = 100; // Width of a tag
        const tagsFit = calculateTagsFit(tagsContainerRef, tagWidth);

        setTagsToShow(tagsFit);
      }
    };

    handleResize(); // Initial check

    window.addEventListener("resize", handleResize); // Listen for resize events

    return () => {
      window.removeEventListener("resize", handleResize); // Clean up the event listener
    };
  }, [tagsContainerRef, isExpanded]);

  return (
    <div className="w-full bg-[#333333] rounded-2xl p-4">
      <div className="flex flex-wrap items-center justify-between mb-4 md:mb-0">
        <div className="flex items-center justify-between">
          <input
            type="checkbox"
            defaultChecked={done}
            className="w-6 h-6 mr-2 bg-transparent border-2 border-gray-500 rounded-md appearance-none checked:bg-gray-500 checked:border-transparent focus:outline-none"
            onChange={(e) => {
              done = e.target.checked;
            }}
          />
          <h1 className="text-[#F7F7F7]">{title}</h1>
        </div>
        <div className="relative flex">
          <Calendar className="p-1 mr-2 text-[#6A6A6A]" />
          <p className="text-[#6A6A6A]">{dueDate.toDateString()}</p>
        </div>
      </div>
      {description && (
        <div onClick={toggleExpand} className="cursor-pointer">
          <p
            ref={descriptionRef}
            className={`mb-4 text-left ${
              isTruncated && !isExpanded
                ? "bg-gradient-to-b from-[#F7F7F7] to-transparent bg-clip-text text-transparent " // Add 'text-left' class
                : "text-[#F7F7F7]"
            }`}
          >
            {description}
          </p>
        </div>
      )}

      <div
        className="flex items-center justify-between mb-4 md:mb-0"
        ref={tagsContainerRef}
      >
        <div className="relative flex flex-wrap">
          {tags.length > 0 && (
            <div className="flex flex-wrap">
              {tags
                .slice(0, isTagsExpanded ? tags.length : tagsToShow)

                .map((tag, index) => (
                  <div
                    key={index}
                    className="flex items-center px-2 py-1 mr-2 bg-[#6ED8D2] rounded-lg opacity-50 mb-1"
                  >
                    <span className="text-[#083633] flex items-center">
                      <Circle className="h-2 fill-[#083633]" />
                      {tag}
                    </span>
                  </div>
                ))}
              {tags.length > 3 && !isTagsExpanded && (
                <button onClick={expandTags} className="text-white">
                  <Plus />
                </button>
              )}
              {isTagsExpanded && (
                <button onClick={expandTags} className="text-white">
                  <Minus />
                </button>
              )}
            </div>
          )}
        </div>
        {prority && (
          <div className="flex">
            <div className="flex mr-2">
              <BarChart className="p-1 text-white" />
              <p>{prority}</p>
            </div>
            <button>
              <Sliders className="p-1 text-white hover:bg-[#000000] rounded-md" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ToDoTask;
