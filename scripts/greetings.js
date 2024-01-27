const greetingElement = document.getElementById('greeting');

const currentHour = new Date().getHours();

const greetingMassage =
    currentHour >= 5 && currentHour < 12
        ? 'Good morning'
        : currentHour >= 12 && currentHour < 18
            ? 'Good afternoon'
            : 'Good evening';

greetingElement.textContent = greetingMassage;