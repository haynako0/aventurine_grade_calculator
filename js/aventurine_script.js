document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("computeGradeBtn").addEventListener("click", function() {
        var quizzes = parseFloat(document.getElementById("quizzes").value) || 0;
        var requirements = parseFloat(document.getElementById("requirements").value) || 0;
        var majorExams = parseFloat(document.getElementById("majorExams").value) || 0;
        var attendance = parseFloat(document.getElementById("attendance").value) || 0;

        var totalGrade = (quizzes * 0.3) + (requirements * 0.3) + (majorExams * 0.3) + (attendance * 0.1);

        var gradePoints;
        if (totalGrade >= 99) {
            gradePoints = 1.00;
        } else if (totalGrade >= 96) {
            gradePoints = 1.25;
        } else if (totalGrade >= 93) {
            gradePoints = 1.50;
        } else if (totalGrade >= 90) {
            gradePoints = 1.75;
        } else if (totalGrade >= 87) {
            gradePoints = 2.00;
        } else if (totalGrade >= 84) {
            gradePoints = 2.25;
        } else if (totalGrade >= 81) {
            gradePoints = 2.50;
        } else if (totalGrade >= 78) {
            gradePoints = 2.75;
        } else if (totalGrade >= 75) {
            gradePoints = 3.00;
        } else if (totalGrade >= 70) {
            gradePoints = 4.00;
        } else {
            gradePoints = 5.00;
        }

        var result = "Your computed grade is: " + totalGrade.toFixed(2) + " (" + gradePoints.toFixed(2) + ") ";
        alert(result);
    });
});
