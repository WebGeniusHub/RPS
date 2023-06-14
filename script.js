const gameContainer = document.querySelector('.container'),
userResult = document.querySelector('.user_result img'),
cpuResult = document.querySelector('.cpu_result img'),
result = document.querySelector('.result'),
optionImage = document.querySelectorAll('.option_image');

optionImage.forEach((image, index) =>{
    image.addEventListener('click', (e) =>{
        image.classList.add('active');


        optionImage.forEach((image2, index2) => {
            index !== index2 && image2.classList.remove('active');

        });

        gameContainer.classList.add('start');

        let time = setTimeout (() =>{
            gameContainer.classList.remove('start');
            let imageSrc = e.target.querySelector('img').src;
        userResult.src = imageSrc;

        let randomNumber = Math.floor(Math.random () * 3)
        
        let cpuImages = ['images/rock.png','images/paper.png', 'images/scissors.png']
        cpuResult.src = cpuImages[randomNumber]

        let cpuValue = ['R', 'P', 'S'][randomNumber]
        let userValue = ['R', 'P', 'S'][index]

        console.log(cpuValue,userValue)


        let outcome = {
            RR: 'Drow',
            RP: 'Computer',
            RS: 'User',
            PP: 'Drow',
            PR: 'User',
            PS: 'Computer',
            SS: 'Drow',
            SR: 'Computer',
            SP: 'User',

        };

        let outComeValue = outcome[userValue + cpuValue]

        result.textContent = userValue === cpuValue ? 'Match Draw' : `${outComeValue} Won !!`
        },2500)
        
    })
})