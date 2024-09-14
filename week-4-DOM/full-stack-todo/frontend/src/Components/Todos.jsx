/*
todos=[{
    title:'Go to the gym',
    description:'You need to go to the gym',
}]
*/

export function Todos({ todos, setTodos }) {
    function deleteTodo(id){
        setTodos((prev)=>{
            return prev.filter((t)=> t._id!==id)
        })
    }
    return (
      <div>
        {todos.map(function (todo) {
          return (
            <div key={todo._id}>
              <h1>{todo.title}</h1>
              <h2>{todo.description}</h2>
              <button
                onClick={async () => {
                  const response = await fetch('http://localhost:3000/completed', {
                    method: 'PUT',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                      id: todo._id,
                    }),
                  });
                  const data = await response.json();
                  deleteTodo(todo._id)
                  alert('Todo marked as completed');
                }}
              >
                {todo.completed === true ? 'Completed' : 'Mark as Complete'}
              </button>
            </div>
          );
        })}
      </div>
    );
  }
  