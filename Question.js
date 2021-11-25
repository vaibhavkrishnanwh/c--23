class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
   //Create a input box to enter the number
   this.input2 = createInput("Enter correct option No..");


    this.button = createButton('Submit');
    //Create elements for One question (h3) and 4 options (h4)
    this.question = createElement("h3");
    this.option = createElement("h4");
 


    this.message = createElement("h2")
  }

  hide(){
     this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.message.hide();




  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);
    
    this.question.html("QUESTION: I start with the letter E, end with the letter E, and I have a letter inside me. What am I?")
     this.question.position(40,70)

     this.option.html("1. Everyone 2. Estimate 3. Envelope 4. Example ")
     this.option.position(40,100)
    this.input2.position(550,230);
    
    

    //Create html() and position() for each question, input and answers.




    this.input1.position(150, 230);
    this.button.position(390, 300);

    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{
    this.input1.hide();
    this.input2.hide();
    this.button.hide();
    this.message.html("THANK YOU, YOUR ANSWER HAS BEEN SUBMITTED!")
    this.message.position(100,300);
    
    })


  }
}
