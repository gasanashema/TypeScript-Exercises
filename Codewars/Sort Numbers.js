"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.solution = solution;
function solution(nums) {
    return nums.sort(function (a, b) { return a - b; });
}
