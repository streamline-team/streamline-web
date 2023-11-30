import { Search, BarChart, Sliders, X } from "react-feather";
import { useEffect, useState } from "react";
import ToDoTask from "../toDoTask/index.tsx";
import { useServicesAPI } from "../../services/services-hook.ts";

interface Task {
  createdAt: string;
  description: string;
  done: boolean;
  dueDate: string | null;
  id: number;
  priority: number;
  title: string;
  updatedAt: string;
  userId: number;
}

const toDoComp = (): JSX.Element => {
  /* getData(), response, loading, error, status, clearState */
  const [listTasks, listTasksResponse, listTasksLoading, listTasksError] =
    useServicesAPI<Task[]>({
      endpoint: "task",
    });

  useEffect(() => {
    listTasks();
  }, []);

  console.warn(listTasksLoading);
  console.warn(listTasksError);
  console.warn(listTasksResponse);

  const [priority, setPriority] = useState<number>();
  const [tags, setTags] = useState<string[]>([]);
  const [newTag, setNewTag] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [availableTags, setAvailableTags] = useState([
    "homework",
    "daily",
    "chores",
  ]);
  const handleTagRemove = (tag: string) => {
    const updatedTags = tags.filter((t) => t !== tag);
    setTags(updatedTags);
  };

  const handleDropdownChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setPriority(Number(event.target.value));
    setShowDropdown(!showDropdown);
  };

  const [showTagsDropdown, setShowTagsDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const [itemPosition, setItemPosition] = useState(true);

  const toggleTagsDropdown = () => {
    if (window.innerWidth > 768) {
      setItemPosition(false);
    } else {
      setItemPosition(true);
    }
    setShowTagsDropdown(!showTagsDropdown);
  };

  const removeTag = (tag: string) => {
    const updatedTags = availableTags.filter((t) => t !== tag);
    setAvailableTags(updatedTags);
  };

  const handleTagCheck = (tag: string, isChecked: boolean) => {
    if (isChecked) {
      setTags([...tags, tag]);
    } else {
      setTags(tags.filter((t) => t !== tag));
    }
  };

  const addNewTag = () => {
    if (newTag && !availableTags.includes(newTag)) {
      setAvailableTags([...availableTags, newTag]);
      setTags([...tags, newTag]);
      setNewTag("");
    }
  };

  return (
    <div className="items-center justify-center h-screen align-middle w-screen-xl">
      <div>
        <div className="relative flex">
          <input
            className="w-full h-12 pl-12 pr-4 align-middle shadow-lg rounded-xl"
            placeholder="Search tasks..."
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <Search />
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between mb-4 md:mb-0">
          <div className="flex items-center justify-between">
            <input
              type="date"
              className="flex px-4 py-2 my-2 mr-2 text-white bg-[#333333] stroke-[#5D5D5D] rounded cursor-pointer"
            ></input>
            <div>
              <button
                className="flex px-4 py-2 my-2 mr-2 w-44 text-white bg-[#333333] stroke-[#5D5D5D] rounded cursor-pointer items-center justify-between"
                onClick={toggleDropdown}
              >
                <BarChart className="mr-2" />
                <div>Priority</div>
                <div>{priority}</div>

                {priority && (
                  <X
                    className="ml-1 text-white cursor-pointer"
                    onClick={() => setPriority(undefined)}
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
              className="flex px-4 py-2 my-2 text-white bg-[#333333] stroke-[#5D5D5D] rounded cursor-pointer"
              onClick={toggleTagsDropdown}
            >
              <Sliders className="mr-2 rotate-90" />
              Tags
            </button>
            {showTagsDropdown && (
              <div
                className="absolute start-0 z-10 w-40 mt-2 bg-[#333333] rounded shadow-lg"
                style={itemPosition ? { right: "-60px" } : { left: "-60px" }}
              >
                <div className="p-2">
                  <input
                    type="text"
                    value={newTag}
                    onChange={(e) => setNewTag(e.target.value)}
                    placeholder="Add new tag..."
                    className="w-full p-1 mb-2 border rounded"
                  />
                  <button
                    onClick={addNewTag}
                    className="w-full p-1 text-white bg-black rounded"
                  >
                    Add Tag
                  </button>
                </div>
                {availableTags.map((tag) => (
                  <div key={tag} className="flex items-center p-2">
                    <input
                      type="checkbox"
                      checked={tags.includes(tag)}
                      onChange={(e) => handleTagCheck(tag, e.target.checked)}
                      className="flex"
                    />
                    <span className="ml-2">{tag}</span>
                    <X
                      className="ml-1 text-white cursor-pointer"
                      onClick={() => removeTag(tag)}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        {tags.length > 0 && (
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
                <span className="mr-1">{tag}</span>
              </div>
            ))}
          </div>
        )}
      </div>
      <ToDoTask
        title="title"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in ante ut elit pretium aliquam sit amet vel ligula. Fusce fringilla interdum nibh, pellentesque efficitur tellus dictum at. Nunc laoreet risus id vestibulum tempus. In tempus aliquam tempor. Maecenas egestas ligula et molestie feugiat. Morbi egestas augue volutpat, ultricies dui id, ornare sem. Donec in fringilla eros. Vestibulum pulvinar nunc eget ante maximus, ac vulputate metus elementum. Pellentesque accumsan, nunc suscipit sagittis egestas, mi tortor porta sapien, sed commodo neque nisl vel tortor."
        done={true}
        dueDate={new Date()}
        prority={1}
        tags={[
          "tag1",
          "tag2",
          "tag2",
          "tag2",
          "tag2",
          "tag2",
          "tag2",
          "tag2",
          "tag2",
          "tag2",
          "tag2",
          "tag2",
          "tag2",
          "tag2",
          "tag2",
        ]}
      />
    </div>
  );
};

export default toDoComp;
