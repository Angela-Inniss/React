import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./assets/style.css";
import quizService from "./quizService"; // this is the api
import QuestionBox from "./Components/QuestionBox";
import ResultCard from "./Components/resultCard";

class QuizBee extends Component {
  // setting initial state of the questions frOm the api to an empty array
  state = {
    qBank: [],
    score: 0,
    responses: 0
  };
  // invoking the quiz service api with a function called getQuestions which calls the quizService file and the takes the question
  // from that file and sets it to the value of the questionBank variable i.e sets the new state so the question is populated with questions
  // from the api see quizService file to see array of questions on the FE
  getQuestions = () => {
    quizService().then(question => {
      this.setState({
        qBank: question,
        score: 0,
        responses: 0 // updating state to question from the api service.
      });
    });
  };

  incrementScore = () => {
    this.setState(
      previousState => {
        return {
          score: previousState.score + 1
        };
      },
      () => console.log(this.state.score, "correct so increment score"),
      console.log(this.state.responses, "correct so increment responses")
    );
  };
  incrementResponse = () => {
    this.setState(
      previousState => {
        return {
          responses: previousState.responses < 5 ? previousState.responses + 1 : 5
          // responses: previousState.responses + 1
        };
      },
      () =>
        console.log(
          this.state.responses,
          "increment response no matter if correct or incorrect"
        )
    );
  };

  // The componentDidMount lifecycle method invokes the getQuestions function to set the initial state so we have data to work with.
  componentDidMount() {
    this.getQuestions();
  }

  render() {
    return (
      <div className="container">
        <div className="title">Quiz Me</div>
        {this.state.qBank.length > 0 && // if there are questions available &&
        this.state.responses < 5 && // the user hasn't finished answering questions &&  map over questions
          this.state.qBank.map(quest => {
            // destructure - take all elements needed out of the qBank array object so no need to use dot notation
            // do this within the map as we want to destructure the OBJECT not the array around it.
            const { question, answers, correct, questionId } = quest;
            // map over questions and return the component which passes in all the props required by a QuestionBox component.
            return (
              <QuestionBox
                question={question}
                options={answers}
                key={questionId}
                correct={correct}
                incrementScore={this.incrementScore}
                incrementResponse={this.incrementResponse}
              />
            );
          })}

        {this.state.responses === 5 && (
          <h2>
            <ResultCard
              score={this.state.score}
              getQuestions={this.getQuestions}
              questions={this.state.qBank.map(quest => {
                const {question} = quest;
                return (
                  question
                )
              })}
              correctAnswer={this.state.qBank.map(quest => {    
                const {correct} = quest;
                return (
                  correct
                )
              })}
                     qbank={this.state.qBank}
            />
          </h2>
        )}
      </div>
    );
  }
}
ReactDOM.render(<QuizBee />, document.getElementById("root"));



