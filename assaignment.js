"use strict";
//Q1: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
// let firstname = ("sir zia khan")
// console.log (firstname)
// let firstname = ("sir zia khan")
// let uppercase = firstname. toUpperCase();
// let lowercase = firstname.toLowerCase();
// console.log (lowercase)
// let famousperson = "Nelson Mandela"
// let qoute = ("it always seems impossible until its done")
// console.log (`${famousperson} Once Said, ${qoute}`)
// let famous_person = "sir zia khan"
// let my_message = "sir i admire your work and i love your teaching style"
// con\sole.log(`my message to ${famous_person } : $ {my message}`)
// Q6:Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed.
//  //Then print the name after striping the white spaces.
// let strippedname1:string = "ali"
// let strippedname2:string = "faisal"
// console.log(`name is in next line \n ${strippedname1} \t ${strippedname2}`)
// Q7:Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
// console.log(4+4)
// console.log(16-8)
// console.log(16/2)
// console.log(2*4)
// Q8:You should create four lines that look like this:
// // console.log(5 + 3)
// // Your output should simply be four lines with the number 8 appearing once on each line.
// console.log(5 + 3)
// console.log(5 + 3)
// console.log(5 + 3)
// console.log(5 + 3)
// //Q9:Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
// let favourite_number = 2
// console.log(`${favourite_number} it is my favourite number`)
// Q10:Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file
// // Then write one sentence describing what the program does.
// // i create a variable
// let fname = "hamzah"
// // then i print it
// console.log(fname)
// Q11: Names: Store the names of a few of your friends in a array called names.
// //  Print each person’s name by accessing each element one a time 
//  let friendsnames = ["hasnain","rayyan","ayan","siddiq"]
//  console.log(friendsnames[2])
//  console.log(friendsnames[3])
//  console.log(friendsnames[0])
//  console.log(friendsnames[1])
// Q12:  Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. 
// //  The text of each message should be the same, but each message should be personalized with the person’s name.
// let Friendsnames = ["hasnain","rayyan","ayan","siddiq"]
// let message = ("hi how are you")
// console.log(Friendsnames + message)
// Q13:Think of your favorite mode of transportation, such as a motorcycle or a car, 
// //and make a list that stores several examples. Use your list to print a series of statements about these items, 
// //such as “I would like to own a Honda motorcycle.”
// let vehicle =["supra-mk4","landcruiserV8","ninja h2r","honda-civic"]
// console.log(`i would like to go to lahore ${vehicle[1]}`)
// console.log(`i would like to go to new nazimabad ${vehicle[3]}`)
// console.log(`i would like to go to school ${vehicle[0]}`)
// co\sole.log(`i woul\d like to go to office ${vehicle[2]}`)
// Q14: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three
// //  people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
// let invitedpersons = ["okasha","amir","farhan","sarim"]
// for(let friends of invitedpersons){
// console.log (`hello ${friends} i am inviting you to my party`);}
// Q15:You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have
// // to think of someone else to invite.
// let myFriendsinviteonthirddinner: string[] = ['mudassir','khalid','atif','shoaib']
// console.log (` \n ${myFriendsinviteonthirddinner[2]}will not be able to come \n`)
// myFriendsinviteonthirddinner.splice(2,1)
// myFriendsinviteonthirddinner.push("ali")
// for (let friend of myFriendsinviteonthirddinner){
//     console.log (`hello ${friend}, hope you are doing fine, would you join me on dinner on weekend`)}
// Q16:More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
// let bigger =["mustafa","asif","ahmed"]
// console.log(`\n${bigger[2]}`)
// bigger.splice(2,1)
// bigger.push("habib")
// bigger.unshift("Amir")
// (let friend of bigger\){
// console.log(`hello ${friend},hope you're doing fine, would you join me on dinner on weekend`);}
// console.log ("hey guys,I found the bigger table so now I can invite you'll , happy dinner:)")
// Q17:Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, 
// and you have space for only two guests.
// let shrinking =["farhan","moosa","shaiq","ali","zaman"]
// console.log("due to limited space we are inviting only few members")
// let uninvited friends = shrinking.pop()
// console.log(sorry ${uninvitedfriends} you're not invited now)
// (let invited friends for shrinking){
//     console.log(`dear ${invitedfriend} you're still invited)
// }
