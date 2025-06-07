

// templete string / Literal

// 1) instead "" we use ``(not single quote) 2) ${}

// we can break the code to multiple lines


const recipient = "James"

const sender = "Abbas"

//const email = "Hey" + recipient + "! how is it going? cheers per"

const email = `Hey ${recipient} ! how is it going? cheers ${sender}`

console.log(email)