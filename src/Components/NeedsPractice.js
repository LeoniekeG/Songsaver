import React from "react";

function NeedsPractice (props) {
    const practiceExercise = props.data.filter((exercise) => exercise.rating <= 6);
    return(
        <div className="box-1">
              <h4>These exercises needs practice:</h4>
              {practiceExercise.map((exercise, index) => (
                <p key={index} style={{display: exercise.show ? "block" : "none"}}>
                  {exercise.myexercise} in {exercise.gait}
                </p>
              ))}
            </div>
        )
}

export default NeedsPractice
