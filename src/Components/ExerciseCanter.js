import React from "react";

function ExerciseCanter (props) {
    const exerciseCanter = props.data.filter((exercise) => exercise.gait === "canter");
    return (
        <div className="box-5">
            <h4>Exercises in canter:</h4>
            {exerciseCanter.map((exercise, index) => (
                <p key={index} style={{display: exercise.show ? "block" : "none"}}>
                  {exercise.myexercise}
                </p>
              ))}
        </div>
    )
}

export default ExerciseCanter