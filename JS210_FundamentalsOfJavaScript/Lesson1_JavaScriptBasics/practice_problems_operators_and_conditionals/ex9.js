let apples = 3;
let bananas = 1;
let eitherOr = (apples || bananas);

console.log(eitherOr === apples);

eitherOr = (bananas || apples);

console.log(eitherOr === bananas);