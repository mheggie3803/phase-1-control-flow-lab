function scuberGreetingForFeet(someValue){
    if(someValue <= 400) {
      return 'This one is on me!'
    }else if(someValue >= 2000 && someValue <= 2500) {
      return 'I will gladly take your thirty bucks.'
    }else if(someValue >= 2500) {
      return 'No can do.'
    } // Write your code here!
}

function ternaryCheckCity(NYC){
    return NYC === 'NYC' ? 'Ok, sounds good.' : 'No go.' // Write your code here!
}

function switchOnCharmFromTip(generous){
  switch(generous) {
    case 'generous':
      return 'Thank you so much.'
    case 'not as generous':
      return 'Thank you.'
    default:
      return 'Bye.'
  } // Write your code here!
}