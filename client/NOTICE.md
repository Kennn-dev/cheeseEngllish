

question 
    - question.Question
    - question.AnswerChoices = [
        AnswerChoice,
        AnswerChoice,
        ...
    ]

state : {
    questions : 
    currentQuestion :  // Map qua từng question  , mỗi question đang map là     currentQuestion
}




Data mỗi 
quiz = [
    {
        title : String ,
        level : String,--- 'Beginner', ...
        type : String  ---- 'Listen', 'Listen & Read' ... 
        question : String,
        correct_answer : String,
        incorrect_answer : [
            String,
            ...
        ]
    },
    hoặc 
    {
        title : String ,
        level : String,--- 'Beginner', ...
        <!-- type : String  ---- 'Listen', 'Listen & Read' ...    Lesson -->
        question : String,
        answers : [
            answer 1 ,
            answer 2,
            ...
        ]
        correct_answer : Number ------ check index in Array answers
    }
    ...
] 

Each 
Lessons = [ Lesson , Lesson , ...]
//////////////////////

Grammar {
    "lessonId" : String ////////,
    "name" : String,
    "grammar": String 
}

Quiz {
    "videoId" : String  ///////////////////// 
    "question" (title): String,
    "answers" : Array [ ... ],
    "correct_Answer" : Number,
    "script" : String, 
}

Lesson {
    "name" : String ,
    "level" : String ,  ,/////////////////////,
    "type" : String , default : "Listening"
    "quizs" : Array [ Quiz , Quiz , ... ], default : ''
    "grammar": Array [ Grammar, Grammar , ...], default : ''
    
} 
< Lesson listQuiz = { Quiz }>


Models 
const LessonSchema = new Schema({
    name: String,
    level: String,
    videoId : String,
    quizs : [QuizSchema]
})

const QuizSchema = new Schema({
    question : String,
    answers : Array, []
    correct_answer : String
})

const AnswerSchema = new Schema({
    
})



function ProgressBar({ max, current }) {
    const width = (current / max) * 100;
    return (
        <div id="progressBar">
            <div id="progressBarFull" style={{ width: `${width}%` }}></div>
        </div>
    );
}

Save score with Form 


