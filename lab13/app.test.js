//task1

const calculation = require('./app.js');

describe('calculation test', () => {
test('0.1 + 0.2 equal to 0.3', () => {
expect(calculation(0.1, 0.2)).toBe(0.3);
});
});

        
//task2
const userList = require('./app.js');

describe('user list check', () => {

test('consist admin element', () => {
       expect(userList).toContain('admin');
 });

test('the first element is Nick', () => {
expect(userList[0]).toContain('Nick');
});

test('the last element is new_user_2', () => {
expect(userList[userList.length-1]).toContain('new_user_2');
});

test('array length is 5', () => {
 expect(userList.length).toBe(5);
});

test('type of 3rd element is String', () => {
expect(typeof(userList[2])).toBe('string');
});

test('8 element is not present', () => {
 expect((userList[8])).toBeUndefined;
});
});

//task3

const { getCircleLength, getCircleArea } = require("./calcCircle");

test("getCircleLength with radius 22 should return 138.2", () => {
  expect(getCircleLength(22)).toBeCloseTo(138.2, 1);
});

test("getCircleArea with radius 9 should return 254.47", () => {
  expect(getCircleArea(9)).toBeCloseTo(254.47, 2);
});

test("getCircleLength with no argument should return NaN", () => {
  expect(getCircleLength()).toBeNaN();
});

test("getCircleArea with no argument should return NaN", () => {
  expect(getCircleArea()).toBeNaN();
});