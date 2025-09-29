document.addEventListener("DOMContentLoaded", () => {
  const quizContainer = document.getElementById("quiz-container");
  const submitBtn = document.getElementById("submit-btn");
  const resultDiv = document.getElementById("result");

  let userAnswers = {};

  // 渲染题目
  function renderQuiz() {
    quizData.forEach((q, index) => {
      const questionDiv = document.createElement("div");
      questionDiv.className = "question";
      questionDiv.dataset.index = index;

      const qNum = document.createElement("strong");
      qNum.textContent = `${index + 1}. `;
      questionDiv.appendChild(qNum);

      if (q.type === "fill") {
        let questionHTML = q.question;
        q.correct.forEach((ans, i) => {
          const input = `<input type="text" class="fill-input" data-q="${index}" data-part="${i}">`;
          questionHTML = questionHTML.replace(/____+/g, input);
        });
        const temp = document.createElement("p");
        temp.innerHTML = questionHTML;
        questionDiv.appendChild(temp);
      } else {
        const p = document.createElement("p");
        p.innerHTML = q.question;
        questionDiv.appendChild(p);
      }

      if (q.type === "choice") {
        q.options.forEach((opt, i) => {
          const label = document.createElement("label");
          label.className = "option";
          label.innerHTML = `
            <input type="radio" name="q${index}" value="${i}">
            ${opt}
          `;
          questionDiv.appendChild(label);
        });
      }

      if (q.type === "multiple") {
        q.options.forEach((opt, i) => {
          const label = document.createElement("label");
          label.className = "option";
          label.innerHTML = `
            <input type="checkbox" name="q${index}" value="${i}">
            ${opt}
          `;
          questionDiv.appendChild(label);
        });
      }

      if (q.type === "truefalse") {
        const label = document.createElement("div");
        label.innerHTML = `
          <label class="option">
            <input type="radio" name="q${index}" value="true"> ✔ 对
          </label>
          <label class="option">
            <input type="radio" name="q${index}" value="false"> ✘ 错
          </label>
        `;
        questionDiv.appendChild(label);
      }

      if (q.type === "short") {
        const textarea = document.createElement("textarea");
        textarea.rows = 4;
        textarea.placeholder = "请输入你的答案...";
        textarea.dataset.q = index;
        questionDiv.appendChild(textarea);
      }

      quizContainer.appendChild(questionDiv);
    });

    // 绑定输入事件
    document.querySelectorAll("input.fill-input").forEach(input => {
      input.addEventListener("input", (e) => {
        const qIdx = e.target.dataset.q;
        const part = e.target.dataset.part;
        if (!userAnswers[qIdx]) userAnswers[qIdx] = [];
        userAnswers[qIdx][part] = e.target.value.trim();
      });
    });

    document.querySelectorAll("textarea").forEach(ta => {
      ta.addEventListener("input", (e) => {
        userAnswers[e.target.dataset.q] = e.target.value.trim();
      });
    });
  }

  // 提交并评分
  submitBtn.addEventListener("click", () => {
    let score = 0;
    const total = quizData.length;

    // 收集答案
    quizData.forEach((q, index) => {
      if (q.type === "fill") {
        // 已通过事件收集
      } else if (q.type === "short") {
        // 已收集
      } else {
        const selected = document.querySelectorAll(`input[name="q${index}"]:checked`);
        const values = Array.from(selected).map(el => el.value);
        if (q.type === "truefalse") {
          userAnswers[index] = values[0] === "true";
        } else if (q.type === "choice") {
          userAnswers[index] = values.map(v => parseInt(v));
        } else if (q.type === "multiple") {
          userAnswers[index] = values.map(v => parseInt(v)).sort();
        }
      }
    });

    // 判分并反馈
    quizData.forEach((q, index) => {
      const questionDiv = document.querySelector(`.question[data-index="${index}"]`);
      let isCorrect = false;

      if (q.type === "fill") {
        const user = userAnswers[index] || [];
        isCorrect = user.length === q.correct.length &&
                    user.every((ans, i) => ans.toLowerCase() === q.correct[i].toLowerCase());
        q.correct.forEach((correctAns, i) => {
          const input = questionDiv.querySelector(`[data-part="${i}"]`);
          if (user[i]?.toLowerCase() === correctAns.toLowerCase()) {
            input.classList.add("correct");
          } else {
            input.classList.add("incorrect");
            input.value = correctAns; // 显示正确答案
          }
        });
      } else if (q.type === "choice") {
        isCorrect = Array.isArray(userAnswers[index]) && userAnswers[index][0] === q.correct[0];
      } else if (q.type === "multiple") {
        const user = userAnswers[index] || [];
        const correct = [...q.correct].sort();
        isCorrect = JSON.stringify(user) === JSON.stringify(correct);
      } else if (q.type === "truefalse") {
        isCorrect = userAnswers[index] === q.correct;
      } else if (q.type === "short") {
        const user = userAnswers[index] || "";
        isCorrect = user.length > 0; // 简答题默认不判对错，只显示参考答案
      }

      if (isCorrect) score++;

      // 显示解析
      const explanation = document.createElement("div");
      explanation.className = "explanation";
      explanation.innerHTML = `【参考答案】\n${getCorrectAnswer(q)}`;
      questionDiv.appendChild(explanation);

      questionDiv.style.borderColor = isCorrect ? "#27ae60" : "#e74c3c";
    });

    resultDiv.innerHTML = `<p class="correct">你的得分：${score}/${total} (${Math.round(score/total*100)}分)</p>`;
    resultDiv.style.backgroundColor = score === total ? "#e8f5e9" : "#fffde7";
  });

  function getCorrectAnswer(q) {
    if (q.type === "fill") return q.correct.join("、");
    if (q.type === "choice") return q.options[q.correct[0]];
    if (q.type === "multiple") return q.correct.map(i => q.options[i]).join("、");
    if (q.type === "truefalse") return q.correct ? "对" : "错";
    return q.correct;
  }

  renderQuiz();
});
