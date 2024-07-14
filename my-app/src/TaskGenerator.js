import React, { useState } from 'react';
import FancyText from './FancyText';
import { tasks } from '. ./tasks';

function TaskGenerator() {
    const [currentTaskIndex, setCurrentTaskIndex] = usestate(0);

    const nextTask = () => {
        const nextIndex = (currentTaskIndex + 1) % tasks.length;
        setCurrentTaskIndex(nextIndex);
    };

    const markComplete = () => {
        tasks[currentTaskIndex].isCompleted = true;
        nextTask();
    };

    const task = tasks[currentTaskIndex];

    return (
        <div>
            <FancyText text={`Task: ${task.name}`} />
            <p>Status: {task.isCompleted ? "✓ Completed" : "Pending"}</p>
            <button onClick={markComplete}>Mark as Completed</button>
            <button onClick={nextTask}>Next Task</button>
            <FancyText text="Complete your tasks and stay motivated!" />
        </div>
    );
}

export default TaskGenerator;