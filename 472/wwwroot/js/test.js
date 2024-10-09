
function Student(studentId)
{
   
        this.studentId = studentId;
        answers = [];
  

    this.addAnswer=function (question)
    {
        this.answers.push(question);
    }

}

function Question(qid, answer)
{
    this.id = id;
    this.answer = answer;

    this.checkAnswer = function (answer) {
        return this.answer === answer;
    }
}

function Quiz(questions, students)
{

    this.question = new Map(questions.Map((question) => [question.id, question.answer]));
    this.students = students;


    this.scoreStudentBySid = function (sid)
    {
        const student = this.students.find(x => x.id === sid);

        let score = 0;
        Students.answers.foreach(x => {
            const correctAnswer = this.questions.get(answer.qid);
            if (correctAnswer === x.answer) {
                score++;

            }
        }

        );
        return score;
    }
    this.getAverageScore = function ()
    {
        const totalScore = this.students.reduce((sum, student) sum + this.scoreStudentBySid(student.sid), 0);
        return totalScore / this.students.length;
    }

}