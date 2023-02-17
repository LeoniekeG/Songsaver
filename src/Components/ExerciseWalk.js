import React from "react";

function ExerciseWalk (props) {
    const exerciseWalk = props.data.filter((exercise) => exercise.gait === "walk");
    return (
        <div className="box-3">
            <h4>Exercises in walk:</h4>
            {exerciseWalk.map((exercise, index) => (
                <p key={index} style={{display: exercise.show ? "block" : "none"}}>
                  {exercise.myexercise}
                </p>
              ))}
        </div>
    )
}

export default ExerciseWalk
