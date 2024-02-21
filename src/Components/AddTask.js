import { useState } from "react";

const AddTask = ({ onAdd }) => {
    const [text, setTask] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();

        if (!text) {
            alert('Please add Task');
            return;
        }

        onAdd({ text, day, reminder });

        setTask('');
        setDay('');
        setReminder(false);
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="form-control">
                <label>Task</label>
                <input
                    type="text"
                    placeholder="Add a new task"
                    value={text}
                    onChange={(e) => setTask(e.target.value)}
                />
            </div>
            <div className="form-control">
                <label>Day and Time</label> {/* Updated placeholder text */}
                <input
                    type="text"
                    placeholder="Add day and time"
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                />
            </div>
            <div className="form-control form-control-check">
                <label>Set reminder</label>
                <input
                    type="checkbox"
                    checked={reminder}
                    onChange={(e) => setReminder(e.currentTarget.checked)}
                />
            </div>
            <input type="submit" className="btn save" />
        </form>
    );
}

export default AddTask;
