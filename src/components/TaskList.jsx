// // src/components/TaskList.jsx

// const TaskList = () => {

//     const task = {
//         text: 'Learn React',
//         done: true
//     }

//     return (
//         <section className="task-list">
//             <h1>Task List</h1>
//             <p>{task.text}</p>

//             <p>{2 + 2}</p>
//             <p>{task.done}</p>
//             {task.done ? 'Complete' : 'Incomplete'}
//             <p>{task.done ? `✅ ${task.text}`: task.text}</p>


//         </section>
//     )
// }

// export default TaskList


const TaskList = () => {

    const task = {
        text: 'Learn React',
        done: true
    }

    let taskDisplay = '' 

    if (task.done === true) {
        taskDisplay = `✅ ${task.text}`
    } else {
        taskDisplay = task.text
    }

    return (
        <>
            <section className="taskList">
                <h1>Task List</h1>
                <p>{taskDisplay}</p>
                <hr />
            </section>
        </>
    )
}

export default TaskList
