import React from "react";

function TrainingForm(props) {
 
  return (
    <main>
      <div className="form">
        <h3>Enter how your training did look like today:</h3>
        <form>
          <input
            type="date"
            name="date"
            value={props.data.date}
            onChange={props.handleChange}
          />
          <input
            placeholder="Exercise"
            type="text"
            name="myexercise"
            value={props.data.myexercise}
            onChange={props.handleChange}
          />
          <input
            placeholder="Name of your horse"
            type="text"
            name="name"
            value={props.data.name}
            onChange={props.handleChange}
          />
          <select
            name="gait"
            value={props.data.gait}
            onChange={props.handleChange}
          >
            <option value=""> - Choose gait -</option>
            <option value="walk">Walk</option>
            <option value="trot">Trot</option>
            <option value="canter">Canter</option>
          </select>
          <input
            placeholder="Rating"
            type="number"
            name="rating"
            min="0"
            max="10"
            value={props.data.rating}
            onChange={props.handleChange}
          />
          <button onClick={props.handleClick}>Add exercise</button>
        </form>
      </div>
    </main>
  );
}

export default TrainingForm;
