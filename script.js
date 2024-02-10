document.addEventListener('DOMContentLoaded', function () {
    var noButton = document.querySelector('.No.custom-button');
    var yesButton = document.querySelector('.Yes');
    var Box = document.querySelector('.Box');
    var popup = document.querySelector('.popup'); 
    var buttons = document.querySelector('.buttons');
    var image = document.querySelector('.image');
    var text = document.querySelector('.text');
    var container = document.querySelector('.container');
    var receipt = document.querySelector('.receipt');
    let counter = 0;

    noButton.addEventListener('click', function () {
        // Add your code to move the button here
        noButton.textContent = "Please say yes...";

        counter = counter + 1;
        console.log(counter);

        if (counter == 1) {
            image.src = "https://media1.tenor.com/m/LEeNEJfkqH8AAAAC/withour-background.gif";
            text.textContent = "Click yes prettygurr!!";
        } else if (counter == 2) {
            text.textContent = "But why...";
        } else if (counter == 3) {
            text.textContent = "Whyyyyyyy huhuh";
            noButton.textContent = "<-- I said Click this";
        } else if (counter == 4) {
            text.textContent = "Just click yes or i'll kiss you!!";
            noButton.textContent = "<-- I said Click this";
        } else if (counter == 5) {
            text.textContent = "Mewow";
        } else if (counter == 6) {
            text.textContent = "Come on please...";
        } else if (counter == 7) {
            text.textContent = "Sorry you can't say No >_<";
        } else if (counter == 8) {
            text.textContent = "Seriously please say Yes...";
        } else if (counter > 8) {
            noButton.textContent = "Disabled >_<";
            noButton.style.backgroundColor = "#7a7a7a";
            noButton.color = "white"
            text.textContent = "Haha bleh";
            noButton.style.transition = "none";
            noButton.style.color = "white";
            noButton.style.border = "none";
        }
    });

    yesButton.addEventListener('click', function () {
        Box.style.display = "none";
        popup.style.display = "block";
        buttons.style.display = "none";
        window.alert("I love you!");
    });

    receipt.addEventListener('click', function () {
        hearts();
        var interval = setInterval(hearts, 50);

    setTimeout(function() {
        clearInterval(interval);
    }, 3000);
    });

});

function hearts() {
    const container = document.querySelector('.container');

    const create = document.createElement('img');
    create.classList.add('hearts');
    create.src = 'https://img.freepik.com/free-vector/vector-icon-illustration-red-heart-isolated-white-background_134830-1241.jpg?w=900&t=st=1707283051~exp=1707283651~hmac=af6394946180bf0e43f097c6ebaa7ca5aa906abf3e481b45b35059d579e11003';
    container.appendChild(create);

    create.style.left = Math.random() * (container.clientWidth - create.clientWidth) + 'px'; // Adjusted for container width
    create.style.animationDuration = Math.random() * 3 + 2 + 's';

    setTimeout(function() {
        create.style.display = "none";
    }, 3000);
}



