// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];

    const fruitsString = fruits.join();
    console.log(fruitsString);
  }
  
  // Q2. make an array out of a string
  {
    const fruits = 'a, b, c, d';
    const fruitsArray = fruits.split(",");
    console.log(fruitsArray);
  }
  
  // Q3. make this array look like this: [5, 4, 3, 2, 1]
  {
    const array = [1, 2, 3, 4, 5];
    const reversedArray = array.reverse();
    console.log(reversedArray);
  }
  
  // Q4. make new array without the first two elements
  {
    const a = new Array();
    const array = [1, 2, 3, 4, 5];
    const newArrayWithoutTwo = array.reduce((prev, curr, idx)=>{
        if (idx >= 2){
            prev.push(curr)
        };
        // console.log(prev)
        return prev
    },[]);
    console.log(newArrayWithoutTwo);

    // by elly, using splice()
    const result = array.slice(2, array.length);
    console.log(result);
    console.log(array) // slice, reduce 모두 복사한 후 작업
    // 반면, splice는 원본을 조작하는 메소드로 안쓰는게 좋다.
  }
  
  class Student {
    constructor(name, age, enrolled, score) {
      this.name = name;
      this.age = age;
      this.enrolled = enrolled;
      this.score = score;
    }
  }
  const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
  ];
  
  // Q5. find a student with the score 90
  {
    const studentWithScore90 = students.find(student=> student.score === 90);
    console.log(studentWithScore90);
  }
  
  // Q6. make an array of enrolled students
  {
    const enrolledStudents = students.reduce((prev, curr)=>{
      if(curr.enrolled){
        prev.push(curr);
      }
      return prev
    }, []);
    console.log(enrolledStudents);


    // elly
    const result = students.filter(student=>student.enrolled);
    console.log(result);
  }
  
  // Q7. make an array containing only the students' scores
  // result should be: [45, 80, 90, 66, 88]
  {
    const studentScores = students.map(student=>student.score);
    console.log(studentScores);
  }
  
  // Q8. check if there is a student with the score lower than 50
  {
    const isLowerThan50 = students.some(student=>student.score < 50);
    console.log(isLowerThan50);
  }
  
  // Q9. compute students' average score
  {
    const totalScore = students.reduce((prev, student)=>prev+student.score, 0);
    const averageScore = totalScore / students.length;
    console.log(averageScore);
  }
  
  // Q10. make a string containing all the scores
  // result should be: '45, 80, 90, 66, 88'
  {
    const stringScores = students.map(student=>student.score).join();
    console.log(stringScores);
  }
  
  // Bonus! do Q10 sorted in ascending order
  // result should be: '45, 66, 80, 88, 90'
  {
    const sortedStringScores = students.map(student=>student.score).sort((a,b)=>a-b).join();
    console.log(sortedStringScores);
  }