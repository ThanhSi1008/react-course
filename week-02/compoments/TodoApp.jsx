import { useState } from 'react';

export default function TodoApp() {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);

    const handleAddTask = () => {
        if (task.trim() === '') return;
        setTasks([
            ...tasks,
            { id: Date.now(), text: task, completed: false },
        ]);
        setTask('');
    };

    const handleDeleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    const handleToggleComplete = (id) => {
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };

    return (
        <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
            <h2>Todo App</h2>
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Enter a task"
                style={{ width: '100%', padding: '8px' }}
            />
            <button onClick={handleAddTask} style={{ width: '100%', padding: '8px', marginTop: '10px' }}>
                Add Task
            </button>
            <ul style={{ listStyleType: 'none', padding: '0' }}>
                {tasks.map((task) => (
                    <li
                        key={task.id}
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            textDecoration: task.completed ? 'line-through' : 'none',
                            marginBottom: '10px',
                        }}
                    >
                        <span
                            onClick={() => handleToggleComplete(task.id)}
                            style={{
                                cursor: 'pointer',
                                color: task.completed ? 'gray' : 'black',
                            }}
                        >
                            {task.text}
                        </span>
                        <button
                            onClick={() => handleDeleteTask(task.id)}
                            style={{
                                background: 'red',
                                color: 'white',
                                border: 'none',
                                borderRadius: '4px',
                                padding: '4px 8px',
                                cursor: 'pointer',
                            }}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
