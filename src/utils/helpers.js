/**
 * Функция принимает числовое значение даты и возвращает строку - время
 * прошеднее с даты, соответствующей переданному числу.
 *
 * В зависимости от прошедшего интервала времени изменяется единица измерения времени:
 * 1) от 0 до 1 часа - минуты;
 * 2) от 1 часа до 1 суток - часы;
 * 3) от 1 суток - дни
 *
 * @param {number} time - числовое значение даты события.
 * @returns {string} - строка, прошедшее время с переданной даты в формате:
 * "{число} {единица измерения времени в правильном склонении} назад"
 */
export const getTimeDelta = (time) => {
    const now = new Date().getTime();
    const deltaSeconds = Math.floor((now - time) / 1000);

    let delta;
    let unitTime;

    if (deltaSeconds < 3600) {
        delta = Math.floor(deltaSeconds / 60);
        unitTime = getWordDeclination(delta, minutesForms);
    } else if (deltaSeconds > 3600 && deltaSeconds < 86400) {
        delta = Math.floor(deltaSeconds / 3600);
        unitTime = getWordDeclination(delta, hoursForms);
    } else {
        delta = Math.floor(deltaSeconds / 86400);
        unitTime = getWordDeclination(delta, daysForms);
    }

    return `${delta} ${unitTime} назад`;
};


/**
 * Функция возвращает корректную форму склонения существительного к переданному числу.
 *
 * @param {number} number - число, к которому нужно подобрать правильную форму склонения.
 * @param {Array[string]} forms - массив форм слова, состоящий из трёх элементов:
 * 1) Винительный падеж, единственное число;
 * 2) Родительный падеж, единственное число;
 * 3) Родительный падеж, множественное число;
 * @returns {string} - форма склонения слова
 */
const getWordDeclination = (number, forms) => {
    const d = number % 10;
    const h = number % 100;

    if (d === 1 && h !== 11) return forms[0];
    else if (1 < d && d < 5 && !(11 < h && h < 15)) return forms[1];
    return forms[2];
};


const minutesForms = ["минуту", "минуты", "минут"];
const hoursForms = ["час", "часа", "часов"];
const daysForms = ["день", "дня", "дней"];

