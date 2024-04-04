import TodoForm from "components/TodoForm/TodoForm";
import PageContainer from "components/PageContainer";
import TodoList from "components/TodoList/TodoList";

function App() {
  return (
    <PageContainer>
      <TodoForm />
      <TodoList />
    </PageContainer>
  );
}

export default App;
