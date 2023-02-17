import React from 'react';
import TrainingForm from './TrainingForm';
import TrainingList from './TrainingList';
import GoodJob from './GoodJob';
import NeedsPractice from './NeedsPractice';
import ExerciseWalk from './ExerciseWalk';
import ExerciseTrot from './ExerciseTrot';
import ExerciseCanter from './ExerciseCanter';

class TrainingOverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      newExercise: null,
      exercises: [{ id: "", date: "", name: "", myexercise: "", gait: "", rating: "" }],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.deleteExercise = this.deleteExercise.bind(this)
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState((state) => ({
      newExercise: {
        ...state.newExercise,
        [name]: value,
      },
    }));
  } 

handleClick = (event) => {
    event.preventDefault();
    const exercise = this.state.newExercise;
    exercise.id = Date.now();
    if (
      exercise.id === "" ||
      exercise.date === "" ||
      exercise.myexercise === "" ||
      exercise.name === "" ||
      exercise.gait === "" ||
      exercise.rating === ""
    ) {
      window.alert("Empty field");
    } else {
      this.setState((prevState) => {
        exercise.show = true;
        const newState = {
          ...prevState,
          newExercise: null,
          exercises: [...prevState.exercises, exercise],
        };
        return newState;
      });
    } 
  };

  deleteExercise(id) {
    console.log(id)
    const exercises = this.state.exercises.filter(exercise => {
      return exercise.id !== id
    });
    this.setState({
      exercises: exercises
    })
  }

  render() {
    return (
      <div>
        <TrainingForm
          handleChange={this.handleChange}
          handleClick={this.handleClick}
          data={this.state}
        />
        <TrainingList
          deleteExercise={this.deleteExercise}
          data={this.state.exercises}
        />
        <main>
          <GoodJob 
            data={this.state.exercises}
          />
          <NeedsPractice 
            data={this.state.exercises}
          />
        </main>
        <footer>
          <ExerciseWalk
            data={this.state.exercises}
          />
          <ExerciseTrot 
            data={this.state.exercises}
          />
          <ExerciseCanter 
            data={this.state.exercises}
          />
        </footer>
      </div>
    );
  }
}

export default TrainingOverview;