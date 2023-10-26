//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate {
    constructor(name, mass, score) {
        this.name = name;
        this.mass = mass;
        this.score = score;
    }

    addScore(newScore) {
        this.scores.push(newScore);
    }

    averageScore() {
        if (this.scores.length === 0) {
            return 0;
        }

        const totalScore = this.scores.reduce((total, score) => total + score, 0);
        return totalScore / this.scores.length;
    }

    isAdmissible(minimumAverageScore) {
        const avg = this.averageScore();
        return avg >= minimumAverageScore;
    }

    status() {
        const avg = this.averageScore();
        if (avg >= 90) {
            return "Accepted";
        } else if (avg >= 80) {
            return "Reserve";
        } else if (avg >= 70) {
            return "Probationary";
        } else {
            return "Rejected";
        }
    }
}

let animal1 = new CrewCandidate ("Bubba Bear", 135, [88, 85, 90]);
console.log(animal1);
let animal2 = new CrewCandidate ("Merry Maltese", 1.5, [93, 88, 97]);
console.log(animal2);
let animal3 = new CrewCandidate ("Glad Gator", 225, [75, 78, 62]);
console.log(animal3);

//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.



//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.