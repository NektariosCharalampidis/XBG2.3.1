function startQuiz() {
    document.getElementById("quiz-container").style.display = "block";
}

function submitQuiz() {
    const correctAnswers = {
        q1: "β",
        q2: "β",
        q3: "γ",  // Διορθωμένο
        q4: "γ",  // Διορθωμένο
        q5: "β",
        q6: "γ",
        q7: "γ",  // Διορθωμένο
        q8: "γ",  // Διορθωμένο
        q9: "β",  // Διορθωμένο
        q10: "β"   // Διορθωμένο
    };

    let score = 0;
    let totalQuestions = Object.keys(correctAnswers).length;
    let wrongAnswers = 0;
    let feedback = "";

    for (let key in correctAnswers) {
        let selected = document.querySelector(`input[name="${key}"]:checked`);
        if (selected) {
            if (selected.value === correctAnswers[key]) {
                score++;
            } else {
                wrongAnswers++;
                feedback += `<p>Λάθος στην ερώτηση ${key.slice(1)}.</p>`;
            }
        } else {
            wrongAnswers++;
            feedback += `<p>Δεν απαντήσατε την ερώτηση ${key.slice(1)}.</p>`;
        }
    }

    let resultMessage = `<h3>Αποτελέσματα</h3>`;
    resultMessage += `<p>Σωστές απαντήσεις: ${score} / ${totalQuestions}</p>`;

    if (wrongAnswers > 2) {
        resultMessage += `<p>Έχετε περισσότερα από 2 λάθη. Δοκιμάστε ξανά.</p>`;
    } else {
        resultMessage += `<p>Μπράβο για την προσπάθεια!</p>`;
    }

    resultMessage += feedback;
    document.getElementById("result").innerHTML = resultMessage;
}
