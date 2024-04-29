{

    const tasks = [
        {
            content: "przygotowac zupe",
            done: false,
        },
        {
            content: "poćwiczyć",
            done: true,
        },
    ];


    const addNewTask = (newTaskContent) => {
        tasks.push({
            content: newTaskContent,
        });
        render();
        const newTaskInput = document.querySelector(".js-newTask");
        newTaskInput.value = "";
    };

    const removeTask = (taskIndex) => {
        tasks.splice(taskIndex, 1);
        render();
    };

    const toggleTaskDone = (taskIndex) => {
        tasks[taskIndex].done = !tasks[taskIndex].done;
        render();
    };

    const bindEvents = () => {


        const removeButtons = document.querySelectorAll(".js-remove");

        removeButtons.forEach((removeButton, index) => {
            removeButton.addEventListener("click", () => {
                removeTask(index);
            });
        });

        const toggleDoneButtons = document.querySelectorAll(".js-done");

        toggleDoneButtons.forEach((toggleDoneButton, index) => {
            toggleDoneButton.addEventListener("click", () => {
                toggleTaskDone(index);
            });
        });
    };


    const render = () => {

        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
  <li class="blank__listItem">
  <button class="blank__buttonList js-done"
  ${task.done ? "style=\"color: #fff\"" : "style=\"color:rgb(26, 123, 30)\""}
  >
  ✔
  </button>
  <span class="blank__listContent"
  ${task.done ? "style=\"text-decoration: line-through\"" : ""}
  >
  ${task.content}
  </span>
  <button class="blank__buttonList blank__buttonList--delete js-remove">🗑</button>
  </li>
  `;
        };

        document.querySelector(".js-tasks").innerHTML = htmlString;

        bindEvents();

    };


    const focusForm = () => {
        const inputField = document.querySelector(".js-newTask");
        inputField.focus();
    };


    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTaskContent = document.querySelector(".js-newTask").value.trim()

        if (newTaskContent === "") {
            return;
        };

        addNewTask(newTaskContent);
    };




    const init = () => {
        render();

        const form = document.querySelector(".js-form");
        const sendTaskBtn = document.querySelector(".js-sendTaskBtn");
        form.addEventListener("submit", onFormSubmit);

        sendTaskBtn.addEventListener("click", focusForm);
    };

    init();

}