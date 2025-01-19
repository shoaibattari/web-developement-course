function calculateGrade() {
    // Get user input values
    const english = parseFloat(document.getElementById('english').value) || 0;
    const urdu = parseFloat(document.getElementById('urdu').value) || 0;
    const math = parseFloat(document.getElementById('math').value) || 0;
    const islamiat = parseFloat(document.getElementById('islamiat').value) || 0;
  
    if (
        english < 0 || english > 100 ||
        urdu < 0 || urdu > 100 ||
        math < 0 || math > 100 ||
        islamiat < 0 || islamiat > 100
      ) {
        document.getElementById('output').innerHTML = `
          <span style="color: red; font-weight: bold;">
            Error: Marks must be between 0 and 100 for all subjects!
          </span>
        `;
        return;
      }
    // Calculate total and percentage
    const totalMarks = english + urdu + math + islamiat;
    const percentage = (totalMarks / 400) * 100;
  
    // Determine grade
    let grade;
    if (percentage >= 80) {
      grade = 'A+';
    } else if (percentage >= 70) {
      grade = 'A';
    } else if (percentage >= 60) {
      grade = 'B';
    } else if (percentage >= 50) {
      grade = 'C';
    } else if (percentage >= 40) {
      grade = 'D';
    } else {
      grade = 'F';
    }
  
    // Display the result
    const output = document.getElementById('output');
    output.innerHTML = `
      Grand Total Marks: 400<br>
      Student Total Marks: ${totalMarks}<br>
      Percentage: ${percentage.toFixed(2)}%<br>
      Grade: ${grade}
    `;
  }
  