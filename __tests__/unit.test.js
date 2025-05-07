// unit.test.js
import { isDate, isEmail, isHexColor, isPhoneNumber, isStrongPassword } from "../code-to-unit-test/unit-test-me";


// TODO - Part 2

// PHONE
test('test parenth', () => {
  expect(isPhoneNumber("(123)-456-7890")).toBe(true);
});


test('test no parenth', () => {
  expect(isPhoneNumber("123-456-7890")).toBe(true);
});

test('test wrong number of digits', () => {
  expect(isPhoneNumber("123-456-789")).toBe(false);
});

test('test wrong parenth', () => {
  expect(isPhoneNumber("123-456-(7890)")).toBe(false);
});


// EMAIL
test('test school email', () => {
  expect(isEmail("abc123@ucsd.edu")).toBe(true);
});

test('test only digit email', () => {
  expect(isEmail("123456@gmail.com")).toBe(true);
});

test('test only letters, only digits', () => {
  expect(isEmail("abc@123.com")).toBe(false);
});

test('test no com', () => {
  expect(isEmail("abc@gmail.c")).toBe(false);
});

// STRONG PW

/**
 * The password's first character must be a letter, it must contain at least * 4 characters and no more than 15 characters and no characters other than * * letters, numbers and the underscore may be used
 */
test('no lowercase', () => {
  expect(isStrongPassword("ABC_123")).toBe(true);
});

test('strong password', () => {
  expect(isStrongPassword("Abc123")).toBe(true);
});

test('no letters', () => {
  expect(isStrongPassword("1234")).toBe(false);
});

test('test more than 14 chars', () => {
  expect(isStrongPassword("abcdefghijklmnopqrstuvwxyz")).toBe(false);
});


//DATE
// 	This regular expressions matches dates of the form XX / XX / YYYY where
// XX can be 1 or 2 digits long and YYYY is always 4 digits long.

test('one digit month', () => {
  expect(isDate("1/2/2025")).toBe(true);
});

test('two digit month', () => {
  expect(isDate("01/2/2025")).toBe(true);
});

test('two digit year', () => {
  expect(isDate("01/2/25")).toBe(false);
});

test('out of order', () => {
  expect(isDate("2025/01/02")).toBe(false);
});


// COLOR
test('red', () => {
  expect(isHexColor("ff2d00")).toBe(true);
});

test('blue', () => {
  expect(isHexColor("000cff")).toBe(true);
});

test('too many digits', () => {
  expect(isHexColor("000cff123")).toBe(false);
});

test('special chars', () => {
  expect(isHexColor("ABC!@3")).toBe(false);
});

