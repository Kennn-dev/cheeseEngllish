

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

Lesson {
    name : String ,
    level : String ,
    videoId : String ,
    question (title): String,
    questionType : String,
    answers : Array [ ... ],
    correct_Answer : Number,
    script : String
}
//////////////////////


Quiz {
    videoId : String  ///////////////////// 
    question (title): String,
    answers : Array [ ... ],
    correct_Answer : Number,
    script : String
}

Lesson {
    "name" : String ,
    "level" : String ,
    "videoId" : String  ,/////////////////////
    "quizs" : [ Quiz , Quiz , ... ]
} 
< Lesson listQuiz = { Quiz }>