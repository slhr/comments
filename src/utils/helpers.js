export const getTimeDelta = (time) => {
    const now = new Date().getTime();
    const deltaSeconds = Math.floor((now - time) / 1000);

    let delta;
    let unitTime;

    if (deltaSeconds < 3600) {
        delta = Math.floor(deltaSeconds / 60);
        unitTime = getDeclination(delta, minutesForms);
    } else if (deltaSeconds > 3600 && deltaSeconds < 86400) {
        delta = Math.floor(deltaSeconds / 3600);
        unitTime = getDeclination(delta, hoursForms);
    } else {
        delta = Math.floor(deltaSeconds / 86400);
        unitTime = getDeclination(delta, daysForms);
    }

    return `${delta} ${unitTime} назад`;
};


const getDeclination = (num, forms) => {
    const d = num % 10;
    const h = num % 100;

    if (d === 1 && h !== 11) return forms[0];
    else if (1 < d && d < 5 && !(11 < h && d < 15)) return forms[1];
    return forms[2];
};

const minutesForms = ["минуту", "минуты", "минут"];
const hoursForms = ["час", "часа", "часов"];
const daysForms = ["день", "дня", "дней"];


