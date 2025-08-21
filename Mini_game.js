const c = prompt("Select a Character : 1.Warrior  2.Archer  3.Mage (write a number 1 ,2 or 3) ")

if(c == 1){
    console.log("You Choose a Warrior")
}else if(c === 2){
    console.log("You Choose a Archer")
}else if(c === 3){
     console.log("You Choose a Mage")

}else{
    console.log("Invalid choice ! Strong Choice")
}

const a = prompt("Select a action :  1.Attack   2.Defend  3.Run (Write a number 1 , 2 or 3")

switch(a){
    case '1':
        console.log("You attack a enemy! ")
        break;
    case  '2':
        console.log("You defend from the enemy Attack!")
        break;
    case '3':
        console.log("Your Running.")    
        break;
    default:
        console.log("Invalid Action!")    

}
