import React, { useEffect, useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import { TagPicker, Tag } from "../tagPicker";
import { useServicesAPI } from "../../services/services-hook.ts";
import { RequestMethod } from "../../services/types.ts";

interface tagsProps {
  id: number;
  name: string;
  background: string | null;
  createdAt: string;
}

interface ModalProps {
  show: boolean;
  onClose: () => void;
  task: any;
  tags: tagsProps[];
  allTags: tagsProps[];
  editTags: (task: any) => void;
  updateTaskParent: (task: any, tags: any) => void;
}

const editModal: React.FC<ModalProps> = ({
  show,
  onClose,
  task,
  tags,
  allTags,
  editTags,
  updateTaskParent,
}) => {
  const [markdown, setMarkdown] = useState(task.description);
  const [editMode, setEditMode] = useState(false);

  const [updatedTitle, setUpdatedTitle] = useState(task.title);
  const [updatedDone, setUpdatedDone] = useState(task.done);
  const [updatedDueAt, setUpdatedDueAt] = useState(task.dueAt);
  const [updatedPriority, setUpdatedPriority] = useState(task.priority);
  const [updatedTags, setUpdatedTags] = useState(tags);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUpdatedTitle(e.target.value);
  };

  const handlePriorityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUpdatedPriority(parseInt(e.target.value));
  };

  const handleDueDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUpdatedDueAt(e.target.value);
  };

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

  const [UpdateTask, UpdateTaskResponse] = useServicesAPI({
    endpoint: `task/${task.id}`,
    method: RequestMethod.PATCH,
  });

  const [AddTagToTask] = useServicesAPI({
    method: RequestMethod.POST,
  });
  const [RemoveTagFromTask] = useServicesAPI({
    method: RequestMethod.DELETE,
  });

  const updateTask = () => {
    const updateTasks = {
      title: updatedTitle,
      description: markdown,
      done: updatedDone,
      dueAt: getCurrentDateTime("time", updatedDueAt),
      priority: updatedPriority,
    };

    const existingTags = tags.map((tag) => tag.id);
    const updatedTagsIds = updatedTags.map((tag) => tag.id);

    const tagsToAdd = updatedTags.filter(
      (tag) => !existingTags.includes(tag.id)
    );
    tagsToAdd.forEach((tag) => {
      AddTagToTask({ endpoint: `task/${task.id}/tag/${tag.id}` });
    });

    const tagsToRemove = tags.filter((tag) => !updatedTagsIds.includes(tag.id));
    tagsToRemove.forEach((tag) => {
      RemoveTagFromTask({ endpoint: `task/${task.id}/tag/${tag.id}` });
    });

    if (
      updatedTitle === task.title &&
      markdown === task.description &&
      updatedDone === task.done &&
      updatedDueAt === task.dueAt &&
      updatedPriority === task.priority &&
      updatedTags.length === tags.length &&
      updatedTags.every((tag, index) => tag.id === tags[index].id)
    ) {
      onClose();
      setEditMode(false);
      return;
    }
    UpdateTask({ body: updateTasks });

    onClose();
    setEditMode(false);
  };

  useEffect(() => {
    if (UpdateTaskResponse) {
      updateTaskParent(UpdateTaskResponse, updatedTags);
    }
  }, [UpdateTaskResponse]);

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  const handleBackgroundClick = () => {
    onClose();
    setEditMode(false);
  };

  const handleModalContentClick = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
  };

  const handleAddTag = (tag: tagsProps) => {
    const tagExists = updatedTags.some((t) => t.id === tag.id);
    if (!tagExists) {
      setUpdatedTags((prevTags) => [...prevTags, tag]);
      if (!allTags.some((t) => t.id === tag.id)) {
        editTags([...allTags, tag]);
      }
    }
  };

  const handleRemoveTag = (tag: tagsProps) => {
    setUpdatedTags((prevTags) => prevTags.filter((t) => t.id !== tag.id));
  };

  const handleMarkdownChange = (value?: string) => {
    if (value !== undefined) {
      setMarkdown(value);
    }
  };

  if (!show) return null;

  return (
    <div
    className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black bg-opacity-50"

      onClick={handleBackgroundClick}
    >
      <div
        className="p-4 sm:p-8 bg-[#252525] rounded-lg max-w-full sm:max-w-[1100px] w-full "
        onClick={handleModalContentClick}
      >
        <div className="flex flex-wrap items-center justify-between mb-8 md:flex-nowrap">
          <div className="flex bg-[#333333] border border-[#434343] p-1 rounded-lg mr-0 sm:mr-2 w-full sm:w-auto justify-center mb-2">
            <input
              type="checkbox"
              checked={updatedDone}
              className="w-8 h-8 mr-2 bg-transparent border-2 border-gray-500 rounded-md appearance-none checked:bg-gray-500 checked:border-transparent focus:outline-none"
              onChange={(e) => {
                setUpdatedDone(e.target.checked);
              }}
            />
            <input
              className="text-2xl text-[#F7F7F7]"
              placeholder={task.title}
              value={updatedTitle}
              onChange={handleTitleChange}
            ></input>
          </div>

          <div className="flex bg-[#333333] border border-[#434343] p-1 rounded-lg w-full sm:w-auto justify-center">
            <input
              type="date"
              defaultValue={getCurrentDateTime("date", task.dueAt)}
              className="flex px-4   mr-2 text-[#F7F7F7] bg-[#333333] stroke-[#5D5D5D] rounded cursor-pointer "
              onChange={handleDueDateChange}
            ></input>
            <input
              className="text-2xl text-[#F7F7F7]"
              placeholder={task.priority.toString()}
              type="number"
              min={1}
              max={5}
              value={updatedPriority}
              onChange={handlePriorityChange}
            ></input>
          </div>
        </div>

        <div className="my-2 text-[#F7F7F7] border-[#434343] border rounded-lg bg-[#333333] w-full overflow-x-auto break-words">
          {editMode ? (
            <MDEditor
              value={markdown}
              onChange={handleMarkdownChange}
              preview="edit"
            />
          ) : (
            <div onClick={toggleEditMode}>
              <MDEditor.Markdown source={markdown} />
            </div>
          )}
        </div>
        <button className="text-[#F7F7F7]" onClick={toggleEditMode}>
          {editMode ? "View" : "Edit"}
        </button>

        <div className="flex flex-wrap mt-4">
          {updatedTags.map((tag) => (
            <Tag key={tag.name} tag={tag} onRemove={handleRemoveTag} />
          ))}
        </div>

        <TagPicker
          onAdd={handleAddTag}
          onRemove={handleRemoveTag}
          tags={allTags}
        />
        <div className="flex items-center justify-center space-x-2">
          <button
            onClick={() => {
              onClose();
              setEditMode(false);
            }}
            className="px-4 py-2 mt-2 text-[#F7F7F7] bg-red-500 rounded"
          >
            Close
          </button>
          <button
            onClick={() => {
              updateTask();
              onClose();
              setEditMode(false);
            }}
            className="px-4 py-2 mt-2 text-[#F7F7F7] bg-black rounded"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default editModal;
