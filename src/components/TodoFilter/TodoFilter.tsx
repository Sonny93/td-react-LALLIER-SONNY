import useTodoList from "hooks/useTodoList";
import { useCallback, useEffect, useState } from "react";
import { TaskList } from "types";
import TodoFilterButton from "./TodoFilterButton";

const ALL_KEY = "all";
const COMPLETED_KEY = "completed";
const UNCOMPLETED_KEY = "uncompleted";

export default function TodoFilter({
  onFilterChange,
}: {
  onFilterChange: (todoList: TaskList) => void;
}) {
  const [selectedKey, setSelectedKey] = useState<string>(ALL_KEY);
  const { todoList } = useTodoList();

  const getFilterResult = useCallback(
    (key: string) => {
      let tasks = todoList;

      switch (key) {
        case COMPLETED_KEY:
          tasks = todoList.filter((t) => t.completed);
          break;
        case UNCOMPLETED_KEY:
          tasks = todoList.filter((t) => !t.completed);
          break;
      }

      return tasks;
    },
    [todoList]
  );

  const handleSelectorChange = useCallback(
    (key: string) => {
      onFilterChange(getFilterResult(key));
      setSelectedKey(key);
    },
    [getFilterResult, onFilterChange]
  );

  useEffect(
    () => handleSelectorChange(selectedKey),
    [getFilterResult, handleSelectorChange, onFilterChange, selectedKey]
  );

  const availableKeys = [
    [ALL_KEY, "Toutes", "filter-btn-all"],
    [COMPLETED_KEY, "Complétées", "filter-btn-done"],
    [UNCOMPLETED_KEY, "Non complétées", "filter-btn-undone"],
  ];
  return (
    <ul
      css={{
        marginBottom: "1em",
        display: "flex",
        justifyContent: "center",
        gap: ".25em",
        flexWrap: "wrap",
      }}
    >
      {availableKeys.map(([value, text, testDataAttr]) => (
        <TodoFilterButton
          selected={selectedKey === value}
          onClick={() => handleSelectorChange(value)}
          data-cy={testDataAttr}
          key={testDataAttr}
        >
          {text}
        </TodoFilterButton>
      ))}
    </ul>
  );
}
