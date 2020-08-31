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
    // let json = {
    //   title: "Art Samaanata Season 1 Survey",
    //   pages: [
    //     {
    //       title: "Please enter your details",
    //       questions: [
    //         {
    //           type: "text",
    //           name: "name",
    //           title: "Name:"
    //         },
    //         {
    //           type: "text",
    //           name: "email",
    //           title: "Your e-mail"
    //         },
            
    //         {
    //           type: "text",
    //           name: "insta",
    //           title: "Your instagram ID"
    //         },
    //         {
    //           type: "checkbox",
    //           name: "isShare",
    //           title: "You like to share your views on our site",
    //           isRequired: true,
    //           choices: ["Yes", "No"]
    //         }
    //       ]
    //     },
    //     {
    //       title: "What operating system do you use?",
    //       questions: [
    //         {
    //           type: "checkbox",
    //           name: "opSystem",
    //           title: "OS",
    //           hasOther: true,
    //           isRequired: true,
    //           choices: ["Windows", "Linux", "Macintosh OSX"]
    //         }
    //       ]
    //     },
    //     {
    //       title: "What language(s) are you currently using?",
    //       questions: [
    //         {
    //           type: "checkbox",
    //           name: "langs",
    //           title: "Please select from the list",
    //           colCount: 4,
    //           isRequired: true,
    //           choices: [
    //             "Javascript",
    //             "Java",
    //             "Python",
    //             "CSS",
    //             "PHP",
    //             "Ruby",
    //             "C++",
    //             "C",
    //             "Shell",
    //             "C#",
    //             "Objective-C",
    //             "R",
    //             "VimL",
    //             "Go",
    //             "Perl",
    //             "CoffeeScript",
    //             "TeX",
    //             "Swift",
    //             "Scala",
    //             "Emacs Lisp",
    //             "Haskell",
    //             "Lua",
    //             "Clojure",
    //             "Matlab",
    //             "Arduino",
    //             "Makefile",
    //             "Groovy",
    //             "Puppet",
    //             "Rust",
    //             "PowerShell"
    //           ]
    //         }
    //       ]
    //     }
        
    //   ]
    // };

    Survey
    .StylesManager
    .applyTheme("modern");

let json = {
    pages: [
        {
            questions: [
                {
                    type: "matrix",
                    name: "Quality",
                    title: "Please indicate if you agree or disagree with the following statements",
                    columns: [
                        {
                            value: 1,
                            text: "Disagree"
                        }, {
                            value: 2,
                            text: "Neutral"
                        },{
                            value: 3,
                            text: "Agree"
                        }
                    ],
                    rows: [
                        {
                            value: "affordable",
                            text: "Product is affordable"
                        }, {
                            value: "does what it claims",
                            text: "Product does what it claims"
                        }, {
                            value: "better then others",
                            text: "Product is better than other products on the market"
                        }, {
                            value: "easy to use",
                            text: "Product is easy to use"
                        }
                    ]
                }, {
                    type: "rating",
                    name: "satisfaction",
                    title: "How satisfied are you with the Product?",
                    isRequired: true,
                    mininumRateDescription: "Not Satisfied",
                    maximumRateDescription: "Completely satisfied"
                }, {
                    type: "rating",
                    name: "recommend friends",
                    visibleIf: "{satisfaction} > 3",
                    title: "How likely are you to recommend the Product to a friend or co-worker?",
                    mininumRateDescription: "Will not recommend",
                    maximumRateDescription: "I will recommend"
                }, {
                    type: "comment",
                    name: "suggestions",
                    title: "What would make you more satisfied with the Product?"
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "price to competitors",
                    title: "Compared to our competitors, do you feel the Product is",
                    choices: ["Less expensive", "Priced about the same", "More expensive", "Not sure"]
                }, {
                    type: "radiogroup",
                    name: "price",
                    title: "Do you feel our current price is merited by our product?",
                    choices: ["correct|Yes, the price is about right", "low|No, the price is too low for your product", "high|No, the price is too high for your product"]
                }, {
                    type: "multipletext",
                    name: "pricelimit",
                    title: "What is the... ",
                    items: [
                        {
                            name: "mostamount",
                            title: "Most amount you would every pay for a product like ours"
                        }, {
                            name: "leastamount",
                            title: "The least amount you would feel comfortable paying"
                        }
                    ]
                }
            ]
        }, {
            questions: [
                {
                    type: "text",
                    name: "email",
                    title: "Thank you for taking our survey. Your survey is almost complete, please enter your email address in the box below if you wish to participate in our drawing, then press the 'Submit' button."
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
