"use strict";
/*
Build all of your functions for displaying and gathering information below (GUI).
*/

// app is the function called to start the entire application
  function app(people){
    let searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo);
    let searchResults;
    switch(searchType){
      case 'yes':
        searchResults = searchByName(people);
        break;
      case 'no':
        searchResults = searchBySingleCriterion(people);
        break;
        default:
      app(people); // restart app
        break;
    }
  // Call the mainMenu function ONLY after you find the SINGLE person you are looking for
  mainMenu(searchResults, people);
  }



// Menu function to call once you find who you are looking for
function mainMenu(person, people){

  /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */

  if(!person){
    alert("Could not find that individual.");
    return app(people); // restart
  }

  let displayOption = prompt("Found " + person.firstName + " " + person.lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");

  switch(displayOption){
    case "info":
    // TODO: get person's info
    break;
    case "family":
    // TODO: get person's family
    break;
    case "descendants":
    // TODO: get person's descendants
    break;
    case "restart":
    app(people); // restart
    break;
    case "quit":
    return; // stop execution
    default:
    return mainMenu(person, people); // ask again
  }
}

function searchByName(people){
  let firstName = promptFor("What is the person's first name?", chars);
  let lastName = promptFor("What is the person's last name?", chars);

  let foundPerson = people.filter(function(person){
    if(person.firstName === firstName && person.lastName === lastName){
      return true;
    }
    else{
      return false;
    }
  })
  return foundPerson[0];
}





// alerts a list of people
function displayPeople(people){
  alert(people.map(function(person){
    return person.firstName + " " + person.lastName;
  }).join("\n"));
}

function displayPerson(person){
  // print all of the information about a person:
  // height, weight, age, name, occupation, eye color.
  let personInfo = "First Name: " + person.firstName + "\n";
  personInfo += "Last Name: " + person.lastName + "\n";
  personInfo += "Height: " + person.height + "\n";
  personInfo += "Weight: " + person.weight + "\n";
  personInfo += "Occupation: " + person.occupation + "\n";
  personInfo += "Eye Color: " + person.eyeColor + "\n";
  
  // TODO: finish getting the rest of the information to display
  alert(personInfo);
}

// function that prompts and validates user input
function promptFor(question, valid){
  do{
    var response = prompt(question).trim();
  } while(!response || !valid(response));
  return response;
}

// helper function to pass into promptFor to validate yes/no answers
function yesNo(input){
  return input.toLowerCase() == "yes" || input.toLowerCase() == "no";
}

// helper function to pass in as default promptFor validation
function chars(input){
  return true; // default validation only
}



// search by ID

function searchById(people){
  let id = promptFor("What is this person's ID", chars);

  let foundPerson = people.filter(function(person){
    if(person.id === id){
      return true;
    }
    else{
      return false;
    }
  })
  // TODO: find the person using the name they entered
  return foundPerson;
}

// search by gender

function searchByGender(people){
  let gender = promptFor("What is the person's gender", chars);

  let foundPerson = people.filter(function(person){
    if(person.gender === gender){
      return true;
    }
    else{
      return false;
    }
  })
  // TODO: find the person using the name they entered
  return foundPerson;
}

// search by dob


function searchByDateOfBirth(people){
  let dob = promptFor("What is the person's date of birth?", chars);

  let foundPerson = people.filter(function(person){
    if(person.dob === dob){
      return true;
    }
    else{
      return false;
    }
  })
  // TODO: find the person using the name they entered
  return foundPerson;
}

// search by height

function searchByHeight(people){
  let height = promptFor("What is the person's height?", chars);
  let foundPerson = people.filter(function(person){
    if(person.height === height){
      return true;
    }
    else{
      return false;
    }
  })
  // TODO: find the person using the name they entered
  return foundPerson;
}

// search by weight

function searchByWeight(people){
  let weight = promptFor("What is the person's weight?", chars);

  let foundPerson = people.filter(function(person){
    if(person.weight === weight){
      return true;
    }
    else{
      return false;
    }
  })
  // TODO: find the person using the name they entered
  return foundPerson;
}

// search by eyeColor

function searchByEyeColor(people){
  let eyeColor = promptFor("What is the person's eye color?", chars);
  let foundPerson = people.filter(function(person){
    if(person.eyeColor === eyeColor){
      return true;
    }
    else{
      return false;
    }
  })
  // TODO: find the person using the name they entered
  return foundPerson;
}

//search by occupation

function searchByOccupation(people){
  let occupation = promptFor("What is the person's occupation", chars);

  let foundPerson = people.filter(function(person){
    if(person.occupation === occupation){
      return true;
    }
    else{
      return false;
    }
  })
  // TODO: find the person using the name they entered
  return foundPerson;
}

//search by parents

function searchByParents(people){
  let parents = promptFor("Who is the person's parents?", chars);

  let foundPerson = people.filter(function(person){
    if(person.parents === parents){
      return true;
    }
    else{
      return false;
    }
  })
  // TODO: find the person using the name they entered
  return foundPerson;
}

//search by currentSpouse


function searchByCurrentSpouse(people){
  let currentSpouse = promptFor("Who is the person's current spouse?", chars);
  let foundPerson = people.filter(function(person){
    if(person.currentSpouse === currentSpouse){
      return true;
    }
    else{
      return false;
    }
  })
  // TODO: find the person using the name they entered
  return foundPerson;
}


function searchBySingleCriterion(people){
  let searchResults;
  let userInput = prompt('Type in a number from 1-9: \n 1: To search by ID \n 2: To search by gender \n 3: To search by date of birth \n 4: To search by height \n 5: To search by weight \n 6: To search by eye color \n 7: To search by occupation \n 8: To search by parents \n 9: To search by current spouse');
 
  switch(userInput){
    case '1':
      searchResults = searchById(people);
      break;
    case '2':
      searchResults = searchByGender(people);
      break;
    case '3':
      searchResults = searchByDateOfBirth(people);
      break;
    case '4':
      searchResults = searchByHeight(people);
      break;
    case '5':
      searchResults = searchByWeight(people);
      break;
    case '6':
      searchResults = searchByEyeColor(people);
      break;
    case '7':
      searchResults = searchByOccupation(people);
      break;
    case '8':
      searchResults = searchByParents(people);
      break;
    case '9':
      searchResults = searchByCurrentSpouse(people);
      break;
    default:
      searchBySingleCriterion(people);  
  }
console.log('Done');
console.log(searchResults);
return searchResults;
  // if(searchResults.length == 1 ){

  //   return searchResults;
  // }
  // else if(searchResults.length == 0){

  //   return app(people); //restart app
  // }
} 
