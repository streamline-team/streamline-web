import React, { useEffect, useRef, useState } from "react";
import { Calendar, BarChart, Circle, Plus, Minus } from "react-feather";
import MDEditor from "@uiw/react-md-editor";
import "./index.css";
import EditTask from "../editTask/index.tsx";
import { useServicesAPI } from "../../services/services-hook.ts";
import { RequestMethod } from "../../services/types.ts";

interface ToDoTaskProps {
  task: any;
  updateTask: (task: any) => void;
  deleteTask: (id: number) => void;
  allTags: tagsProps[];
  editTags: (task: any) => void;
}

interface tagsProps {
  id: number;
  name: string;
  background: string | null;
  createdAt: string;
}

const ToDoTask: React.FC<ToDoTaskProps> = ({
  task,
  updateTask,
  deleteTask,
  allTags,
  editTags,
}) => {
  const descriptionRef = useRef<HTMLDivElement>(null);
  const tagsContainerRef = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTagsExpanded, setIsTagsExpanded] = useState(false);
  const [newtags, setTags] = useState<tagsProps[]>(task.tags);
  const [titleNew, setTitle] = useState(task.title);
  const [descriptionNew, setDescription] = useState(task.description);
  const [dueAtNew, setDueAt] = useState(task.dueAt);
  const [doneNew, setDone] = useState(task.done);
  const [priorityNew, setPriority] = useState(task.priority);

  const [UpdateTask] = useServicesAPI({
    endpoint: `task/${task.id}`,
    method: RequestMethod.PATCH,
  });

  const [DeleteTask] = useServicesAPI({
    endpoint: `task/${task.id}`,
    method: RequestMethod.DELETE,
  });

  const handleDelete = () => {
    deleteTask(task.id);
    DeleteTask();
  };

  const onDoneHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDone(e.target.checked);
    UpdateTask({ body: { done: e.target.checked } });
  };

  useEffect(() => {
    if (descriptionRef.current) {
      const lineHeight = parseInt(
        getComputedStyle(descriptionRef.current).lineHeight || "0",
        10
      );
      const maxHeight = lineHeight * 2;
      const descriptionHeight = descriptionRef.current.scrollHeight;

      if (descriptionHeight > maxHeight) {
        descriptionRef.current.style.maxHeight = `${maxHeight}px`;
        descriptionRef.current.classList.add("overflow-hidden");
      }
    }
  }, [descriptionNew]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const expandTags = () => {
    setIsTagsExpanded(!isTagsExpanded);
  };

  const calculateTagsFit = (
    tagsContainerRef: React.RefObject<HTMLDivElement>,
    tagWidth: number
  ): number => {
    if (tagsContainerRef.current) {
      const containerWidth = tagsContainerRef.current.offsetWidth;
      const availableWidth = containerWidth - 16;

      return Math.floor(availableWidth / tagWidth);
    }

    return 0;
  };

  const [tagsToShow, setTagsToShow] = useState(7);

  useEffect(() => {
    const handleResize = () => {
      if (tagsContainerRef.current) {
        const tagWidth = 100;
        const tagsFit = calculateTagsFit(tagsContainerRef, tagWidth);

        setTagsToShow(tagsFit);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [tagsContainerRef]);

  const getCurrentDateTime = (date: any) => {
    const currentDate = new Date(date);
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const day = String(currentDate.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  };

  const adjustColorContrast = (color: string): string => {
    const hexToRgb = (hex: string): number[] => {
      const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
      hex = hex.replace(shorthandRegex, (r, g, b) => r + r + g + g + b + b);
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result
        ? [
            parseInt(result[1], 16),
            parseInt(result[2], 16),
            parseInt(result[3], 16),
          ]
        : [0, 0, 0];
    };

    const calculateBrightness = (rgb: number[]): number => {
      return (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
    };

    const rgb = hexToRgb(color);
    if (!rgb) {
      throw new Error("Invalid color format");
    }

    const brightness = calculateBrightness(rgb);
    const textColor =
      brightness > 128 ? "rgba(0, 0, 0, 0.7)" : "rgba(255, 255, 255, 0.7)";
    return textColor;
  };

  const handleDivClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const targetElement = e.target as HTMLElement;
    if (
      targetElement.classList.contains("w-full") ||
      targetElement.classList.contains("justify-between")
    ) {
      openModal();
    }
  };

  const updateTaskParent = (task: any, tags: tagsProps[]) => {
    if (tags) {
      setTags(tags);
    }

    setTitle(task.title);
    setDescription(task.description);
    setDueAt(task.dueAt);
    setDone(task.done);
    setPriority(task.priority);
  };

  useEffect(() => {
    updateTask({
      id: task.id,
      title: titleNew,
      description: descriptionNew,
      done: doneNew,
      dueAt: dueAtNew,
      priority: priorityNew,
      tags: newtags,
    });
  }, [titleNew, descriptionNew, doneNew, dueAtNew, priorityNew, newtags]);

  return (
    <div
      className="w-full min-w-full bg-[#333333] rounded-2xl p-4 mb-2 border border-[#434343] "
      onClick={handleDivClick}
    >
      <div className="flex flex-wrap items-center justify-between min-w-full mb-4 md:mb-0 ">
        <div className="flex items-center justify-between">
          <input
            type="checkbox"
            defaultChecked={doneNew}
            className="w-6 h-6 mr-2 bg-transparent border-2 border-gray-500 rounded-md appearance-none checked:bg-gray-500 checked:border-transparent focus:outline-none"
            onChange={(e) => {
              task.done = e.target.checked;
              onDoneHandle(e);
            }}
          />
          <h1 className="text-[#F7F7F7]">{titleNew}</h1>
        </div>
        <div className="relative flex">
          <Calendar className="p-1 mr-2 text-[#6A6A6A]" />
          <p className="text-[#6A6A6A]">{getCurrentDateTime(dueAtNew)}</p>
        </div>
      </div>
      {task.description && (
        <div onClick={openModal} className="cursor-pointer">
          <div className="cursor-pointer">
            <div
              ref={descriptionRef}
              className="mb-4 mt-2 overflow-x-auto break-words bg-gradient-to-b from-[#F7F7F7] to-transparent bg-clip-text text-transparent"
            >
              <MDEditor.Markdown
                source={descriptionNew}
                className="max-w-full"
              />
            </div>
          </div>
        </div>
      )}

      <div
        className="flex items-center justify-between mt-2 mb-4 md:mb-0"
        ref={tagsContainerRef}
      >
        <div className="relative flex flex-wrap">
          {newtags.length > 0 && (
            <div className="flex flex-wrap">
              {newtags
                .slice(0, isTagsExpanded ? task.tags.length : tagsToShow)

                .map((tag, index) => (
                  <div
                    key={index}
                    className={`flex items-center px-2 py-1 mr-2 rounded-lg opacity-50 mb-1`}
                    style={{
                      background: tag.background ? tag.background : "#083633",
                    }}
                  >
                    <span
                      className={`text-${adjustColorContrast(
                        tag.background as any
                      )} flex items-center`}
                    >
                      <Circle className="h-2 fill-[#083633]" />
                      {tag.name}
                    </span>
                  </div>
                ))}
              {newtags.length > tagsToShow && !isTagsExpanded && (
                <button onClick={expandTags} className="text-[#F7F7F7]">
                  <Plus />
                </button>
              )}
              {isTagsExpanded && (
                <button onClick={expandTags} className="text-[#F7F7F7]">
                  <Minus />
                </button>
              )}
            </div>
          )}
        </div>
        <div className="flex">
          {doneNew && (
            <div className="flex">
              <div className="flex mr-2 text-red-800">
                <button onClick={handleDelete}>Delete</button>
              </div>
            </div>
          )}
          {priorityNew && (
            <div className="flex">
              <div className="flex mr-2">
                <BarChart className="p-1 text-[#F7F7F7]" />
                <p>{priorityNew}</p>
              </div>
            </div>
          )}
        </div>
      </div>
      <EditTask
        show={isModalOpen}
        onClose={closeModal}
        task={task}
        tags={task.tags}
        allTags={allTags}
        updateTaskParent={updateTaskParent}
        editTags={editTags}
      />
    </div>
  );
};

export default ToDoTask;
