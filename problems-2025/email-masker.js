// let email;

const maskEmail = (email) => {
  const indexOfAtSymbol = email.indexOf('@')
  console.log({ indexOfAtSymbol })

  const charactersBeforeAtSymbol = email.slice(0, indexOfAtSymbol)
  console.log({ charactersBeforeAtSymbol })

  const charactersAfterAtSymbol = email.slice(indexOfAtSymbol + 1)
  console.log({ charactersAfterAtSymbol });

  const firstCharOfMaskedLetters = charactersBeforeAtSymbol[0]
  const lastCharOfMaskedLetters = charactersBeforeAtSymbol[charactersBeforeAtSymbol.length - 1]
  console.log({ firstCharOfMaskedLetters, lastCharOfMaskedLetters });

  const maskedCharacters = charactersBeforeAtSymbol.slice(1, -1)
  console.log({ maskedCharacters });

  const lengthOfMaskedCharacters = maskedCharacters.length;
  console.log({ lengthOfMaskedCharacters });

  const maskedEmail = `${firstCharOfMaskedLetters}${'*'.repeat(lengthOfMaskedCharacters)}${lastCharOfMaskedLetters}@${charactersAfterAtSymbol}`
  return maskedEmail;
}

// console.log(maskEmail("a@b.com"))

// optimized masked email
const optimizedMaskEmail = (email) => {

  // 1. Validate the email format
  if (typeof email !== 'string' || !email.includes('@')) {
    return 'Please provide a valid email.'
  }

  // 2. Split email into username and domain
  const [username, domain] = email.split('@')

  // 3. Handle short usernames (less than 3 chars) by not masking them
  if (username.length <= 2) {
    return email
  }

  // 4. Get the first and last characters of the username
  const firstChar = username[0]

  const lastChar = username[username.length - 1]

  // 5. Create the masked part
  const maskedPart = '*'.repeat(username.length - 2)

  // 6. Combine and return the masked email
  const maskedEmail = `${firstChar}${maskedPart}${lastChar}@${domain}`

  return maskedEmail
}

console.log(optimizedMaskEmail("a@b.com")) //hi@example.com
console.log(optimizedMaskEmail("freecodecamp@example.com")) //f**********p@example.com

console.log(optimizedMaskEmail("hi@example.com")) //hi@example.com
console.log(optimizedMaskEmail("apple.pie@example.com")) //apple.pie@example.com