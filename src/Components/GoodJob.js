import React from "react";

function GoodJob (props) {
    const goodExercise = props.data.filter((exercise) => exercise.rating > 6);
    return(
        <div className="box-2">
              <h4>Good job, these exercises went really well:</h4>
              {goodExercise.map((exercise, index) => (
                <p key={index} style={{display: exercise.show ? "block" : "none"}}>
                  {exercise.myexercise} in {exercise.gait}
                </p>
              ))}
            </div>
        )
}

export default GoodJob


