import React from "react";
import trash from "../images/trash.png"

function TrainingList(props) {
  return (
    <div className="exercise-list">
      <h4>My own training progress with:</h4>
      {props.data.map((exercise, index) => (
        <p key={index} style={{display: exercise.show ? "block" : "none"}}>
          {exercise.date} your {exercise.myexercise} with {exercise.name} in {exercise.gait} went
          this way {exercise.rating} <img src={trash} alt="trash" className="trash-can" onClick={() => {props.deleteExercise(exercise.id)}}/>
        </p>
      ))}
    </div>
  );
}

export default TrainingList;

