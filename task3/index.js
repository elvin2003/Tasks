let authorNamesArr = [];
let messageDatesArr = [];
let messageTextsArr = [];

class Message{
  constructor(authorNames,messageDates,messageTexts){
    this.authorNames = authorNames;
    this.messageDates = messageDates;
    this.messageTexts = messageTexts;
  }
  toString(){
    this.authorNames.forEach((item,index)=>{
      console.log(this.authorNames[index]);
      console.log(this.messageDates[index]);
      console.log(this.messageTexts[index]);
    });
  }
  toHtml(){
    this.authorNames.forEach((item,index)=>{
      let p = document.createElement("p");
      p.innerHTML = `${this.messageDates[index]} ${this.authorNames[index]}: ${this.messageTexts[index]}`;
      document.querySelector(".container").append(p);
      p.classList.add("fields");
    });
  }
}

class Messenger extends Message{
  constructor(authorNames,messageDates,messageTexts){
    super(authorNames,messageDates,messageTexts);
  }
  send(authorName, messageText){
    authorNamesArr.push(authorName);
    messageTextsArr.push(messageText);
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes();
    messageDatesArr.push(time);
  }
  show_history(){
    authorNamesArr.forEach((item,index)=>{
      console.log(messageDatesArr[index]+" "+authorNamesArr[index]+" "+messageTextsArr[index]);
    })
  }
}

let m = new Messenger();
m.send('Adil', 'ilk mesaj');
m.send('Məryəm', 'İkinci mesaj');
let m1 = new Message(authorNamesArr,messageDatesArr,messageTextsArr);
m1.toString();
m.show_history();
m1.toHtml();