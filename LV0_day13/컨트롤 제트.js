function solution(s) {
    const answer = [];
  
    for (const num of s.split(" ")) {
        if (num === "Z") {
            answer.pop();
        } else {
            answer.push(+num)
        }
    }
    return answer.reduce((a,b) => a + b, 0);
}