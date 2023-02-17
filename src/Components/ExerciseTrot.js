import React from "react";

function ExerciseTrot (props) {
    const exerciseTrot = props.data.filter((exercise) => exercise.gait === "trot");
    return (
        <div className="box-4">
            <h4>Exercises in trot:</h4>
            {exerciseTrot.map((exercise, index) => (
                <p key={index} style={{display: exercise.show ? "block" : "none"}}>
                  {exercise.myexercise}
                </p>
              ))}
        </div>
    )
}

export default ExerciseTrot