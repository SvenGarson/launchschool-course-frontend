function greetings(splitName, profession) {
  const fullName = splitName.join(' ');
  const title = profession.title;
  const occupation = profession.occupation;
  const message = [
    `Hello, ${fullName}!`,
    `Nice to have a ${profession.title}`,
    `${profession.occupation} around.`,
  ].join(' ');

  console.log(message);
}

greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' });