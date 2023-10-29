//Q2: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

// let firstname = ("sir zia khan")
// console.log (firstname)

//Q3:Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be 
// simple, such as, “Hello Eric, would you like to learn some Python today?”

// let firstname = ("sir zia khan")
// let uppercase = firstname. toUpperCase();
// let lowercase = firstname.toLowerCase();
// console.log (lowercase)

//Q4:Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and 
// titlecase.

// let famousperson = "Nelson Mandela"
// let qoute = ("it always seems impossible until its done")
// console.log (`${famousperson} Once Said, ${qoute}`)

//Q5:Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. 
// Then compose your message and store it in a new variable called message. Print your message.

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

// Q18:Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.

// • Print your array in its original order.

// • Print your array in alphabetical order without modifying the actual list.

// • Show that your array is still in its original order by printing it.

// • Print your array in reverse alphabetical order without changing the order of the original list.

// • Show that your array is still in its original order by printing it again.

// • Reverse the order of your list. Print the array to show that its order has changed.

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
// let locations = ["new york","australia","canada","saudiarab","london"]
// console.log(locations)
// console.log(locations)
// locations.reverse
// console.log(locations)

// Q19:Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of 
// people you are inviting to dinner.
// let myschoolfriendswanttoinvite:string[] = ['shaiq','hunaiz','siddiq','saad','hasnain']
// let uninvitedfriend = myschoolfriendsIwanttoinvited.pop()
// let countarray:string [] = []
// console.log(count array.lenght)

// Q20:Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities,
//  languages, or anything else you’d like. Write a program that creates a list containing these items.

// let countries:string [] = ["america","tokyo","canada","england"]
// console.log(language)
// 
// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

// let newuser = {
//     username : "rayyan"
//     email : 'khanshaheer5555@gmail.com'
//     password : 123456123
//     isadmin : false
//     console.log(newuser)
// }
//Q21:They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

// Think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

// let  newUser = {
//     userName : "Rayyan" ,
//     email : 'Rayya068@gmail.com' ,
//     password : 5824973 ,
//     isAdmin : false
// };
// console.log(newUser)

//Q22:Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen.
//  Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the 
//  program.

// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

// storing number in string array for error
// let error = ['Muddassir' , 123 , 'MaazAhmed' , 'Tariq' , 'Immad']

// let error = ['Muddassir' , 'MaazAhmed' , 'Tariq' , 'Immad']
// console.log (error)

// Q23:Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for
//  the results of each test. Your code should look something like this:

// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

// let racingCar = 'Supraa';
// console.log("Is car == 'Supraaa'? I predict True.")
// console.log(racingCar == "Supraa")
// let car = 'subaru';

// console.log("Is car == 'subaru'? I predict True.")

// console.log(car == 'subaru')

// • Look closely at your results, and make sure you understand why each line evaluates to True or False.

// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
// let bestFootballer = 'Ronaldo';
// console.log("Is bestFootballer == 'Ronaldo'? I predict True.")
//  console.log(bestFootballer == "Ronaldo")

// let mySibling = 'ALi';
// console.log("Is mySibling == 'Ali'? I predict True.") 
// console.log(mySibling == "Ali")

// let bike = 'yamahaR6';
// console.log("Is bike == 'yamahaR6'? I predict True.")
// console.log(bike ==  "yamahaR6")

// let city = 'karachi';
// console.log("Is city == 'karachi'? I predict True.")
// console.log(city == "karachi")

// let colour = 'yellow';
// console.log("Is favColor == 'yellow'? I predict True.")
//  console.log (colour == "yello")

// let favCountry = 'London';
// console.log("Is favCountry == 'London'? I predict True.")
//  console.log(favCountry == "london" )

// let playsta = "PS5"
// console.log("is playsta == 'ps5'? I  predict True.")
// console.log(playsta == "ps5")

//Q24:More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array

// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

// let num2 = 2
// console.log(num2 == 3)

// let string2 = '2'
// console.log(string2 == '2')

// let one = 1
// console.log(one != 1)

// let anotherOne = '1'
// console.log(anotherOne === '1' )

// console.log (11<12)
// console.log (11>12)
// console.log (11>=12)
// console.log (11<=12)

// let firstPerson = 'Rayyan'
// let secondPerson = 'omerIkram'
// if (firstPerson == 'o'){
//     console.log("no omer")
// }


// Q25Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.

// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)

// Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.


// let alienColor = ["green","yellow" , "red"]

// if (alienColor[0] == "green"){
//     console.log ("player earned 5 points")
// }

// let anotherAlienColor = "Red"

// if (anotherAlienColor == "green"){
//     console.log ("player earned 5 points")
// }

// Q26Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.

// • Write one version of this program that runs the if block and another that runs the else block.

// let Color1 = ["green","yellow" , "red"]

// if (Color1[0] == "green"){
//     console.log ("player earned 5 points")
// }
// else {
//     console.log ("player earned 10 points")
// }

// let Color = "Red"


// if (Color == "green"){
//     console.log ("player earned 5 points")
// }
// else {
//     console.log ("player earned 10 points")
// }

//Q27:Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.

// • If the alien is yellow, print a message that the player earned 10 points.

// • If the alien is red, print a message that the player earned 15 points.

// • Write three versions of this program, making sure each message is printed for the appropriate color alien.

// let gameAlienColor31 = "green"

// if (gameAlienColor31 == "green"){
//     console.log ("player earned 5 points")
// }
// else if (gameAlienColor31 == "yellow"){
//     console.log ("player earned 10 points")
// }
// else if (gameAlienColor31 == "red"){
//     console.log ("player earned 15 points")
// }

// let gameAlienColor32 = "yellow"

// if (gameAlienColor32 == "green"){
//     console.log ("player earned 5 points")
// }
// else if (gameAlienColor32 == "yellow"){
//     console.log ("player earned 10 points")
// }
// else if (gameAlienColor32 == "red"){
//     console.log ("player earned 15 points")
// }


// let gameAlienColor33 = "red"

// if (gameAlienColor33 == "green"){
//     console.log ("player earned 5 points")
// }
// else if (gameAlienColor33 == "yellow"){
//     console.log ("player earned 10 points")
// }
// else if (gameAlienColor33 == "red"){
//     console.log ("player earned 15 points")
// }


//Q28:Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.

// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.

// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.

// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.

// • If the person is age 65 or older, print a message that the person is an elder.Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.

// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.

// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.

// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.

// • If the person is age 65 or older, print a message that the person is an elder.

// let person = 2

// if ( person < 2) {
//     console.log("person is baby")
// }
// else if ( person >= 2 && person <=4) {
//     console.log("person is toddler")
// }
// else if ( person >= 4 && person <=13) {
//     console.log("person is kid")
// }

// else if ( person >= 13 && person <=20) {
//     console.log("person is teenagers")
// }

// else if ( person >= 20 && person <=65) {
//     console.log("person is adult")
// }

// else if ( person >= 65) {
//     console.log("person is elder")
// }
// else {
//     console.log("your given value is wrong")
// }

// Q29:Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!

// let favFruits = ['mango' , 'peach', 'pineapple' , 'banana', 'apple']

// for (let fruits of favFruits){

//     if (fruits == 'mango') {
//     console.log('You really like mangos!');
//     }

//     if (fruits == 'peach') {
//         console.log('You really like peach!');
//         }

//     if (fruits == 'pineapple') {
//         console.log('You really like pineapple!');
//         }

//     if (fruits == 'banana') {
//             console.log('You really like bananas!');
//             }
//     if (fruits == 'apple') {
//                 console.log('You really like apples!');
//                 }
// }

// Q30:Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

// let namebox = ['omer' , 'onais' , 'talha' , 'rohan' , 'admin']

// for (let user of namebox){

//         if (user == 'admin') {
//         console.log('Hello admin, would you like to see a status report?');
//         break;
//         }
//         else if (user != 'admin'){
//         console.log(Welcome ${user}, how are you);
//         }}

// Q31:No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.

// let namebox2 = ['omer' , 'abdulHadi' , 'muneeb' , 'Mustafa']

//     if (namebox2.length == 0 ) {
//     console.log('We need to find some users!');
//     }
//     else {
//     console.log(we have some users);
//     }

//     for (let user of namebox2){

//         if(namebox2.length != 0 ){
//             namebox2.pop()
//             namebox2.pop()
            
//         }}
//     console.log(namebox2)
//     console.log("array is now empty")

// Q32:Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

// let current_Users  = ["Ahmed" ,'Immad' , 'Anas' , 'Ahmedhashmi']
// let new_Users  = ["Ahmed" , 'Omer' , 'Sara' , 'Immad' ]


// for (let newUser of new_Users){
//     let usernameTaken = false;
//     for (let currentUser of current_Users) {
//             if (newUser.toLowerCase() === currentUser.toLowerCase()){
//             usernameTaken = true
//             break;
//             }}
// if (usernameTaken == true){
//     console.log (${newUser} is taken)
//                 }
// else{
//     console.log (${newUser} is available)
//  }       
        
        
// }

// Q33:Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.

// • Loop through the array.

// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.

// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!

// let ordinalNumber = [1,2,3,4,5,6,7,8,9]
// for (let num of ordinalNumber) {
//     if (num == 1){
//         console.log('1st')
//     }
//     if (num == 2){
//         console.log('2nd')
//     }
//     if (num == 3){
//         console.log('3rd')
//     }
//     if (num == 4){
//         console.log('4th')
//     }
//     if (num == 5){
//         console.log('5th')
//     }
//     if (num == 6){
//         console.log('6th')
//     }
//     if (num == 7){
//         console.log('7th')
//     }
//     if (num == 8){
//         console.log('8th')
//     }
//     if (num == 9){
//         console.log('9th')
//     }
// }

// Q34Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!

// let myTypeOfPizza : string[] = [  'arabian pizza' , 'cheesy delight pizza' , 'extra creamy pizza']

// Q35:Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!

// let Animal = ["cat" , 'dog' , 'rabbit' ] 
// let comChar = ["nails" , "ears" , 'nose' , 'teeth']


// for (let animal of Animal){
//     console.log(A ${animal} would be a great pet)
// }

// console.log(`they all have the same ${comChar[0]}, ${comChar[1]} and ${comChar[2]}  `)

// Q36:T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
// function make_shirt  (text: string  , size: number)  {
    //     console.log(${text} - ${size});
    // }
    
    // make_shirt("rayyan", 11)
    // make_shirt("ayan" , 13)
    
// Q37:Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

// const size = ["large",'medium'] 
// function largeShirt (msg:string,  size:string )  {
//     if (size == "medium" || size == "large" ){
//         console.log (${msg} size : ${size})
//     }
//     else {
//         console.log (${msg} size : S,XL)
//     }
// }
// largeShirt( " I love TypeScript" , "10")

// Q38:Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.

// function describe_City  (city: string , country? : string) {
//     console.log (${city} is in ${country})
// }

// describe_City ("Lahore" , "Pakistan")
// describe_City ("UK")
// describe_City ("Delhi" , "South Korea")

// Q39:City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

// "Lahore, Pakistan"

// Call your function with at least three city-country pairs, and print the value that’s returned.

// function cityCountry  (city: string  , country : string)  {
//     console.log ("${city},${country}")
// }

// cityCountry ("Lahore" , "Pakistan")
// cityCountry ("London","UL")
// cityCountry ("Delhi" , "India")

//Q40:Album: Write a function called make_album() that builds a Object describing a music album. The function should take 
// in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the
//  function to make three dictionaries representing different albums. Print each return value to show that Objects are 
//  storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number
//   of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s
//    Object. Make at least one new function call that includes the number of tracks on an album.

// interface artistswAlbums { 
//     artists: string;
//     albums: string;
    
// };
// function AlbumDetails  (artists: string, albums: string, ): artistswAlbums  {
//     let albumDetails: artistswAlbums = { artists, albums, };
//     return albumDetails;
// };
// let album1 = AlbumDetails("The Weeknd", "Starboy" );
// let album2 = AlbumDetails("", "Apocalypse" );
// let album3 = AlbumDetails("Anuv Jain", "Barishien");
// console.log(album1);
// console.log(album2);
// console.log(album3);

// Q41:Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

//// let magicians = [ 'Jhon' , 'AMIR' , 'The Founders'] 

// function showMagicians  ()  {
//     for (let magician of magicians){
//         console.log (magician)
//     }
// }
// showMagicians()

//Q42:Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

// let magicians = [ 'Jhon' , 'AMIR' , 'The Founders'] 

// function showMagicians  ()  {
//     for (let magician of magicians){
//         console.log (magician)
//     }
// }
// showMagicians()


//question42
//Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.


// let magiciansCopy:string [] =  ['Jhon' , 'AMIR' , 'The Founders' ,] 


// function makeGreat  ()  {

//         for (let magicians = 0 ; magicians < magiciansCopy.length; magicians++ ){
//             magiciansCopy[magicians] = " the great "  + magiciansCopy[magicians] 
//         }

//         for (let magician of magiciansCopy){
//             console.log (magician)
           
//         }
//     }
// makeGreat()

// Q43:Unchanged Magicians: Start with your work from Exercise 40. Call the function 
// make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

// function show_Magicians(magicians: string[]): void {
//     magicians.forEach((magician) => {
//       console.log(magician);
//     });
//   }
  
//   function make_great(magicians: string[]): string[] {
//     const greatMagicians: string[] = [];
//     for (let i = 0; i < magicians.length; i++) {
//       greatMagicians.push("the Great " + magicians[i]);
//     }
//     return greatMagicians;
//   }
  
//   // Example usage
//   const magicianNames: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
  
//   const greatMagicianNames: string[] = make_great([...magicianNames]);
//   show_Magicians(magicianNames);
//   show_Magicians(greatMagicianNames);
  
//Q44:Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have 
// one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich 
// that is being ordered. Call the function three times, using a different number of arguments each time

// let makeSandwich = (sandwich: string[]) => {
//     return console.log (`Items Customer want in sandwich are ${sandwich} `)
// }

// makeSandwich(["chicken sandwich "])
// makeSandwich(["beef sandwhich"])

//Q45:Cars: Write a function that stores information about a car in a Object. The function should always receive a 
// manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the
//  required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s
//   returned to make sure all the information was stored correctly.


// interface details {
//     manufacturer : string,
//     modelName : string 
//     numberPlate? : number
//     color? : string 
// }

// let carDetails = (manufacturer:string , modelName:string , numberPlate?: number , color? : string ) => { 
//     let showDetails: details = {
//     manufacturer, modelName
//     } 
// if (numberPlate !== undefined)
// {
//     showDetails.numberPlate = numberPlate
// }
// if (color !== undefined){
//     showDetails.color = color
// }
//     return showDetails
// }

// let car1Detail = carDetails("toyota" , " Corrola", 2424, 'yellow')
// let car2Detail = carDetails("Honda" , "Civic" , 4040 , 'black')
// let car3Detail =carDetails("Toyota" , "Camry" , 3030 , "maroon")
// let car4Detail =carDetails("Honda" , "Accord" , 8989 , "white")
// let car5Detail =carDetails("BMW" , "X3")


// console.log (car1Detail)
// console.log (car2Detail)
// console.log (car3Detail)
// console.log (car4Detail)
// console.log (car5Detail)
