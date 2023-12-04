import React, { useEffect, useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import { TagPicker, Tag } from "../tagPicker";
import { useServicesAPI } from "../../services/services-hook.ts";
import { RequestMethod } from "../../services/types.ts";

export interface ToDoTaskProps {
  title: string;
  description: string;
  dueAt: string;
  priority: number;
  tags?: any;
}

interface tagsProps {
  id: number;
  name: string;
  background: string | null;
  createdAt: string;
}

interface CreateTaskModalProps {
  show: boolean;
  onClose: () => void;
  onCreate: (task: ToDoTaskProps) => void;
  allTags: tagsProps[];
  editTags: (tags: any) => void;
}

const CreateTaskModal: React.FC<CreateTaskModalProps> = ({
  show,
  onClose,
  onCreate,
  allTags,
  editTags,
}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState(1);
  const [tags, setTags] = useState<tagsProps[]>([]);

  const [CreateTask, CreateTaskResponse] = useServicesAPI({
    endpoint: "task",
    method: RequestMethod.POST,
  });

  const handleSubmit = () => {
    if (!title) {
      return;
    }

    const tagsids = tags.map((tag) => tag.id);

    const newTask: ToDoTaskProps = {
      title,
      description,
      dueAt: getCurrentDateTime("time", dueDate),
      priority,
      tags: tagsids.length > 0 ? tagsids : undefined,
    };

    CreateTask({ body: newTask });
  };

  useEffect(() => {
    if (CreateTaskResponse) {
      onCreate(CreateTaskResponse as ToDoTaskProps);
      onClose();
    }
  }, [CreateTaskResponse]);

  const getCurrentDateTime = (param?: "date" | "time", date?: string) => {
    const currentDate = date ? new Date(date) : new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const day = String(currentDate.getDate()).padStart(2, "0");
    const hours = String(currentDate.getHours()).padStart(2, "0");
    const minutes = String(currentDate.getMinutes()).padStart(2, "0");
    const seconds = String(currentDate.getSeconds()).padStart(2, "0");

    if (param === "date") {
      return `${year}-${month}-${day}`;
    } else if (param === "time") {
      return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    } else {
      return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    }
  };

  const handleAddTag = (tag: tagsProps) => {
    if (!tags.some((t) => t.id === tag.id)) {
      setTags([...tags, tag]);
      if (!allTags.some((t) => t.id === tag.id)) {
        editTags([...allTags, tag]);
      }
    }
  };

  const handleRemoveTag = (tag: tagsProps) => {
    setTags(tags.filter((t) => t.id !== tag.id));
  };

  const handleMarkdownChange = (value?: string) => {
    if (value !== undefined) {
      setDescription(value);
    }
  };

  if (!show) return null;

  return (
    <div
    className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black bg-opacity-50"

      onClick={onClose}
    >
      <div
        className="p-4 sm:p-8 bg-[#252525] rounded-lg max-w-full sm:max-w-[1100px] w-full"

        onClick={(e) => e.stopPropagation()}
      >
        {/* Task Title Input */}
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="text-2xl text-[#F7F7F7] w-full mb-4 rounded-lg pl-2"
          placeholder="Task Title"
        />
        {/* Markdown Editor for Description */}
        <MDEditor
          value={description}
          onChange={handleMarkdownChange}
          preview="edit"
          className="rounded-lg"
        />
        {/* Due Date Input */}
        <input
          type="date"
          value={dueDate || getCurrentDateTime("date")}
          onChange={(e) => setDueDate(e.target.value)}
          className="w-full pl-2 mt-4 appearance-none rounded-mg"
        />
        {/* Priority Input */}
        <input
          type="number"
          value={priority}
          onChange={(e) => setPriority(Number(e.target.value))}
          className="w-full pl-2 mt-4 rounded-md"
          min={1}
          max={5}
        />
        {/* Tags Selection */}
        {tags && (
          <div className="flex flex-wrap mt-4">
            {tags.map((tag) => (
              <Tag key={tag.name} tag={tag} onRemove={handleRemoveTag} />
            ))}
          </div>
        )}
        <TagPicker
          onAdd={handleAddTag}
          onRemove={handleRemoveTag}
          tags={allTags}
        />
        {/* Action Buttons */}
        <div className="flex justify-end mt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 mr-2 text-white bg-red-500 rounded"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 text-white bg-black rounded"
          >
            Create Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateTaskModal;
