import React from "react";
import ReactDOM from "react-dom";
import * as Survey from "survey-react";
import "./styles.css";
import "survey-react/survey.css";

class SurveyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isCompleted: false };
    this.onCompleteComponent = this.onCompleteComponent.bind(this);
  }
  onCompleteComponent() {
    this.setState({ isCompleted: true });

  }
  

// survey.showProgressBar = 'bottom';
  render() {
    let json = {
      title: "Art Samaanata Season 1 Survey",
      pages: [
        {
          title: "Please enter your details",
          questions: [
            {
              type: "text",
              name: "name",
              title: "Name:"
            },
            {
              type: "text",
              name: "email",
              title: "Your e-mail"
            },
            
            {
              type: "text",
              name: "insta",
              title: "Your instagram ID"
            },
            {
              type: "checkbox",
              name: "isShare",
              title: "You like to share your views on our site",
              isRequired: true,
              choices: ["Yes", "No"]
            }
          ]
        },
        {
          title: "What operating system do you use?",
          questions: [
            {
              type: "checkbox",
              name: "opSystem",
              title: "OS",
              hasOther: true,
              isRequired: true,
              choices: ["Windows", "Linux", "Macintosh OSX"]
            }
          ]
        },
        {
          title: "What language(s) are you currently using?",
          questions: [
            {
              type: "checkbox",
              name: "langs",
              title: "Please select from the list",
              colCount: 4,
              isRequired: true,
              choices: [
                "Javascript",
                "Java",
                "Python",
                "CSS",
                "PHP",
                "Ruby",
                "C++",
                "C",
                "Shell",
                "C#",
                "Objective-C",
                "R",
                "VimL",
                "Go",
                "Perl",
                "CoffeeScript",
                "TeX",
                "Swift",
                "Scala",
                "Emacs Lisp",
                "Haskell",
                "Lua",
                "Clojure",
                "Matlab",
                "Arduino",
                "Makefile",
                "Groovy",
                "Puppet",
                "Rust",
                "PowerShell"
              ]
            }
          ]
        }
        
      ]
    };
    var surveyRender = !this.state.isCompleted ? (
      <Survey.Survey
        json={json}
        showCompletedPage={false}
        showProgressBar = 'bottom'
        // onComplete={this.onCompleteComponent}
        







        onComplete={function (result){
            // document
            //     .querySelector('#surveyResult')
            //     .textContent = "Result JSON:\n" + JSON.stringify(result.data, null, 3)
                console.log("Result JSON:\n" + JSON.stringify(result.data, null, 3));
        }}



      />
    ) : null;
    var onCompleteComponent = this.state.isCompleted ? (
      <div>The component after onComplete event</div>
    ) : null;
    return (
      <div>
        {surveyRender}
        {onCompleteComponent}
      </div>
    );
  }
}
// function App() {
//   return (
//     <div className="App">
//       <h1>SurveyJS react example</h1>
//       <h2>Checkbox - none of the above and select all</h2>
//       <SurveyComponent />
//     </div>
//   );
// }

export default SurveyComponent;
