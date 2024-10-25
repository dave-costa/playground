function formatRelativeDate(date, lang) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    date.setHours(0, 0, 0, 0);

    const diffInDays = Math.floor((today - date) / (1000 * 60 * 60 * 24));

    const rtf = new Intl.RelativeTimeFormat(lang, { numeric: 'auto' });
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    const formattedDate = new Intl.DateTimeFormat(lang, options)
        .format(date)
        .replace(/\//g, '-');
    const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

    if (diffInDays === 0) {
        return capitalize(`${rtf.format(0, 'day')}, ${formattedDate}`);
    } else if (diffInDays === 1) {
        return capitalize(`${rtf.format(-1, 'day')}, ${formattedDate}`);
    } else if (diffInDays > 1 && diffInDays <= 30) {
        return capitalize(`${rtf.format(-diffInDays, 'day')}, ${formattedDate}`);
    } else {
        return formattedDate;
    }
}
const dataHoje = new Date("2023-10-20"); // Data de hoje
console.log(formatarDataRelativa(dataHoje)); // Deve exibir "hoje"

