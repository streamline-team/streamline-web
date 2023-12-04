import { Search, BarChart, Sliders, X, Calendar, ArrowUp } from "react-feather";
import { useState, useEffect } from "react";
import ToDoTask from "../toDoTask/index.tsx";
import CreateNewTask from "../createNewTask/index.tsx";
import { useServicesAPI } from "../../services/services-hook.ts";

interface tagsProps {
  id: number;
  name: string;
  background: string | null;
  createdAt: string;
}

interface ToDoTaskProps {
  id: number;
  title: string;
  description: string;
  done: boolean;
  dueAt: string;
  createdAt: string;
  priority: number;
  tags: tagsProps[];
}

const toDoComp = (): JSX.Element => {
  const [priority, setPriority] = useState<number>();
  const [tags, setTags] = useState<tagsProps[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [availableTags, setAvailableTags] = useState<tagsProps[]>([]);
  const [tasks, setTasks] = useState<ToDoTaskProps[]>([]);
  const [showTagsDropdown, setShowTagsDropdown] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [itemPosition, setItemPosition] = useState(true);
  const [tagSearch, setTagSearch] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [filteredTasks, setFilteredTasks] = useState<ToDoTaskProps[]>([]);
  const [showArchive, setShowArchive] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [normalTasks, setNormalTasks] = useState<ToDoTaskProps[]>([]);
  const [archiveTasks, setArchiveTasks] = useState<ToDoTaskProps[]>([]);

  const [listTasks, listTasksResponse] = useServicesAPI({
    endpoint: "task",
  });

  const [ListTags, ListTagsResponse] = useServicesAPI({
    endpoint: "tag",
  });

  useEffect(() => {
    ListTags();
    listTasks();
  }, []);

  useEffect(() => {
    const filterTasks = () => {
      const filtered = filteredTasks.filter((task) => {
        if (
          search &&
          !task.title.toLowerCase().includes(search.toLowerCase())
        ) {
          return false;
        }
        if (
          date &&
          getCurrentDateTime(task.dueAt) !== getCurrentDateTime(date)
        ) {
          return false;
        }
        if (priority !== undefined && task.priority !== priority) {
          return false;
        }
        if (
          tags.length > 0 &&
          !tags.every((selectedTag) =>
            task.tags?.some((tag) => tag.id === selectedTag.id)
          )
        ) {
          return false;
        }

        return true;
      });

      const finalFilteredTasks = filtered.length > 0 ? filtered : tasks;

      setFilteredTasks(finalFilteredTasks);
    };

    if (!search && !date && priority === undefined && tags.length === 0) {
      setFilteredTasks(tasks);
    } else {
      filterTasks();
    }
  }, [search, date, priority, tags, tasks, showArchive]);

  useEffect(() => {
    const normalTasks = filteredTasks.filter((task) => !task.done);
    const archiveTasks = filteredTasks.filter((task) => task.done);
    setNormalTasks(normalTasks);
    setArchiveTasks(archiveTasks);
  }, [filteredTasks, showArchive, listTasksResponse]);

  useEffect(() => {
    if (ListTagsResponse && Array.isArray(ListTagsResponse)) {
      const uniqueTags = Array.from(
        new Set(ListTagsResponse.map((tag) => tag.name))
      ).map((name) => ListTagsResponse.find((tag) => tag.name === name));
      setAvailableTags(uniqueTags as tagsProps[]);
    }
  }, [ListTagsResponse]);

  useEffect(() => {
    if (!listTasksResponse || !isInitialLoad) {
      return;
    }

    const sortedTasks = [...(listTasksResponse as any)].sort(
      (a, b) => new Date(a.dueAt).getTime() - new Date(b.dueAt).getTime()
    );

    setTasks(sortedTasks);
    setIsInitialLoad(false);
  }, [listTasksResponse, showArchive, isInitialLoad]);

  const handleTaskUpdate = (updatedTask: ToDoTaskProps) => {
    const updatedTasks = tasks
      .map((task) => (task.id === updatedTask.id ? updatedTask : task))
      .sort(
        (a, b) => new Date(a.dueAt).getTime() - new Date(b.dueAt).getTime()
      );
    setTasks(updatedTasks);
  };

  const handleTaskDelete = (taskId: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };
  const handleCreateTask = (newTask: ToDoTaskProps) => {
    setTasks(
      [...tasks, newTask].sort(
        (a, b) => new Date(a.dueAt).getTime() - new Date(b.dueAt).getTime()
      )
    );
  };

  const handleTagRemove = (tag: tagsProps) => {
    const updatedTags = Array.from(
      new Set(tags.filter((t) => t.id !== tag.id))
    );

    setTags(updatedTags);
  };

  const handleDropdownChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setPriority(Number(event.target.value));
    setShowDropdown(!showDropdown);
  };

  const toggleDropdown = () => {
    if (priority == undefined) {
      setShowDropdown(!showDropdown);
    }
  };

  const toggleTagsDropdown = () => {
    if (window.innerWidth > 768) {
      setItemPosition(false);
    } else {
      setItemPosition(true);
    }
    setShowTagsDropdown(!showTagsDropdown);
  };

  const handleTagCheck = (tag: tagsProps, isChecked: boolean) => {
    if (isChecked) {
      setTags([...tags, tag]);
    } else {
      setTags(tags.filter((t) => t !== tag));
    }
  };

  const handleTagSearchChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTagSearch(event.target.value);
  };

  const filteredTags = availableTags.filter((tag) =>
    tag.name.toLowerCase().includes(tagSearch.toLowerCase())
  );

  const getCurrentDateTime = (date: any) => {
    const currentDate = new Date(date);
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const day = String(currentDate.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  };

  const toggleArchiveView = () => {
    setShowArchive(!showArchive);
  };

  return (
    <div className="items-center justify-center h-screen align-middle w-screen-xl">
      <div>
        <div className="relative flex drop-shadow-sm drop-shadow-opacity-25 ">
          <input
            className="w-full h-12 pl-12 pr-4 align-middle rounded-xl border border-[#434343]"
            placeholder="Search tasks..."
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <Search />
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between mb-4 md:mb-0">
          <div className="flex items-center justify-between">
            <input
              type="date"
              className="flex px-4 py-2 my-2 mr-2 text-white bg-[#333333] stroke-[#5D5D5D] rounded cursor-pointer border border-[#434343]"
              onChange={(e) => setDate(e.target.value)}
            ></input>
            <div>
              <button
                className="flex px-4 py-2 my-2 mr-2 w-44 text-white bg-[#333333] stroke-[#5D5D5D] rounded cursor-pointer items-center justify-between border border-[#434343] "
                onClick={toggleDropdown}
              >
                <BarChart className="mr-2" />
                <div>Priority</div>
                <div>{priority}</div>

                {priority && (
                  <X
                    className="z-10 ml-1 text-white cursor-pointer"
                    onClick={() => {
                      setPriority(undefined);
                    }}
                  />
                )}
              </button>

              {showDropdown && (
                <select
                  value={priority}
                  onChange={handleDropdownChange}
                  className="absolute z-10 block rounded-md shadow-lg w-44"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              )}
            </div>
          </div>
          <div className="relative">
            <button
              className="flex px-4 py-2 my-2 text-white bg-[#333333] stroke-[#5D5D5D] rounded cursor-pointer border border-[#434343]"
              onClick={toggleTagsDropdown}
            >
              <Sliders className="mr-2 rotate-90" />
              Tags
            </button>
            {showTagsDropdown && (
              <div
                className="absolute start-0 z-10 w-40 mt-2 bg-[#333333] rounded shadow-lg border border-[#434343]"
                style={itemPosition ? { right: "-60px" } : { left: "-60px" }}
              >
                <div className="p-2">
                  <input
                    placeholder="Search tags..."
                    className="w-full p-1 mb-2 border rounded"
                    onChange={handleTagSearchChange}
                  />
                </div>
                <div className="overflow-y-auto max-h-40">
                  {filteredTags.map((tag, index) => (
                    <div key={index} className="flex items-center p-2">
                      <input
                        type="checkbox"
                        className="w-4 h-4 mr-2"
                        checked={tags.includes(tag)}
                        onChange={(e) => handleTagCheck(tag, e.target.checked)}
                      />
                      <span className="ml-2">{tag.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        <div>
          <button onClick={toggleArchiveView} className="...">
            {showArchive ? "Show All Tasks" : "Show Archive"}
          </button>
        </div>
        {tags && (
          <div className="flex flex-wrap mt-4">
            {tags.map((tag, index) => (
              <div
                key={index}
                className="flex items-center px-3 py-1 mt-2 mr-2 bg-[#083633] rounded-lg"
              >
                <X
                  className="text-white cursor-pointer"
                  onClick={() => handleTagRemove(tag)}
                />
                <span className="mr-1">{tag.name}</span>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="flex flex-wrap mt-4">
        {showArchive
          ? archiveTasks.map((task, i) => {
              const isNewDate =
                i === 0 ||
                getCurrentDateTime(task.dueAt) !==
                  getCurrentDateTime(archiveTasks[i - 1].dueAt);

              return (
                <div className="w-full pb-2" key={task.id + "ws"}>
                  {isNewDate && (
                    <div
                      className="flex items-center pt-1 pb-4"
                      key={getCurrentDateTime(task.dueAt)}
                    >
                      <Calendar className="flex-shrink-0 mr-2 text-[#6A6A6A]" />
                      <p className="text-[#6A6A6A] pr-1">
                        {getCurrentDateTime(task.dueAt)}
                      </p>
                      <hr className="flex-grow border-t border-[#6A6A6A]" />
                    </div>
                  )}

                  <ToDoTask
                    key={task.id}
                    task={task}
                    updateTask={handleTaskUpdate}
                    deleteTask={handleTaskDelete}
                    allTags={availableTags}
                    editTags={setAvailableTags}
                  />
                </div>
              );
            })
          : normalTasks.map((task, i) => {
              const isNewDate =
                i === 0 ||
                getCurrentDateTime(task.dueAt) !==
                  getCurrentDateTime(normalTasks[i - 1].dueAt);

              return (
                <div className="w-full pb-2" key={task.id + "ws"}>
                  {isNewDate && (
                    <div
                      className="flex items-center pt-1 pb-4"
                      key={getCurrentDateTime(task.dueAt)}
                    >
                      <Calendar className="flex-shrink-0 mr-2 text-[#6A6A6A]" />
                      <p className="text-[#6A6A6A] pr-1">
                        {getCurrentDateTime(task.dueAt)}
                      </p>
                      <hr className="flex-grow border-t border-[#6A6A6A]" />
                    </div>
                  )}

                  <ToDoTask
                    key={task.id}
                    task={task}
                    updateTask={handleTaskUpdate}
                    deleteTask={handleTaskDelete}
                    allTags={availableTags}
                    editTags={setAvailableTags}
                  />
                </div>
              );
            })}
      </div>

      <div className="relative">
        <button
          onClick={() => setIsCreateModalOpen(true)}
          className="fixed flex items-center justify-center w-40 h-12 text-black bg-white rounded-lg shadow-lg bottom-4 left-4"
        >
          Create New Task
          <ArrowUp className="w-4 h-4 ml-2" />
        </button>
        {isCreateModalOpen && (
          <CreateNewTask
            show={isCreateModalOpen}
            onClose={() => setIsCreateModalOpen(false)}
            onCreate={handleCreateTask as any}
            allTags={availableTags}
            editTags={setAvailableTags}
          />
        )}
      </div>
    </div>
  );
};

export default toDoComp;
