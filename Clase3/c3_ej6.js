const list1 = [
    {firstName: "Mark",country: "Scotland",continent: "Europe",age: 22,language: "JavaScript"},
    {firstName: "Victoria",country: "Puerto Rico",continet: "Americas",age: 30,language: "Python"},
    {firstName: "Emma",country: "Norway",continent: "Europe",age: 19,language: "Python"}
];

function firstDevOf(list,lang){
    let atLeastOneDev = false;
    for(dev of list){
        if(dev.language == lang){
            atLeastOneDev = true;
            console.log(`${dev.firstName} from ${dev.country} was the first ${dev.language} developer in the conference.`);
            break;
        }
    }
    if(!atLeastOneDev){
        console.log(`There are no ${lang} developers in the conference.`);
    }    
}

firstDevOf(list1,"Python");
firstDevOf(list1,"Go");