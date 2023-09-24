import { connect, Connect } from "react-redux";
import { toggleTodo } from "../actions";
import Todolist from "../components/TodoList";
import { VisibilityFilters } from "../actions";

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALLL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter((t) => t.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter((t) => !t.completed);
    default:
      throw new Error("Unknown Fiter:" + filter);
  }
};

const mapStateToPrps = (state) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter),
});

const mapDispatchToProps = dispatch =>({
    toggleTodo:id => dispatch(toggleTodo(id))
})


export default connect(mapStateToPrps, mapDispatchToProps)(Todolist);