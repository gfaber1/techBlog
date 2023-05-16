module.exports = {
    format_date: (date) => {
        // Format date as MM/DD/YYYY
        console.log('hello')
        console.log(typeof date)
        return date.toLocaleDateString();
    },
};
