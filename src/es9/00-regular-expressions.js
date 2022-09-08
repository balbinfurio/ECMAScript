const regex = /(\d{4})-(\d{2})-(\d{2})/; // year, month, day

const matchers = regex.exec('2022-01-01');

console.table(matchers);
