 
 
 player_1 = localStorage.getItem("user_1");

 player_2 = localStorage.getItem("user_2");

 ques_turn = "P1";
 ans_turn = "P2";

 player1_score = 0;
 player2_score = 0;

 var word;


document.getElementById("player_name_1").innerHTML=player_1;
document.getElementById("player_1_score").innerHTML= " : " + player1_score;
//player_1_score
document.getElementById("Question_turn").innerHTML= "Question Turn : " + player_1;


document.getElementById("player_name_2").innerHTML=player_2;
//player_2_score
document.getElementById("player_2_score").innerHTML= " : " + player2_score;
document.getElementById("answer_turn").innerHTML = "Answer Turn : "+ player_2;


function ask_ques(){

    get_word = document.getElementById("input_word").value; //Happy
    word = get_word.toLowerCase(); //happy // 0-h, 1-a, 2-p, 3-p, 4-y, length =5


    //1st index
    char_1 = word.charAt(1); // a

    //mid point 

    mid_point =Math.floor( word.length / 2 ); // 5/2 = 2.5  floor(2.5) = 2 / 
    char_2 = word.charAt(mid_point); //p



// last_point
    last_point = word.length -1;
    
    char_3 = word.charAt(last_point); // y



    replace_1 = word.replace(char_1, "_"); // replace_1 = h _ p p y

    replace_2 = replace_1.replace(char_2, "_"); // replace_2 = h _ _ p y

    replace_3 = replace_2.replace(char_3, "_"); // replace _3 =  h _ _ p _


    question_box = "<h3 id = 'word_display'> Q: " + replace_3 + "</h3>";

    answer_box = "<br> Answer : <input id = 'ans_word' type = 'text' >";

    check_button = "<br> <button onclick = 'check()' class = 'btn btn-primary'> CHECK </button>";


    output_box = question_box + answer_box+ check_button; 

    document.getElementById("output_ques").innerHTML = output_box;

    document.getElementById("input_word").value = "";
    
}



function check(){
    get_ans = document.getElementById("ans_word").value; 
    ans = get_ans.toLowerCase();

    if (ans == word){

        if (ans_turn == "P1"){

            player1_score =  player1_score + 1;
            document.getElementById("player_1_score").innerHTML= " : " + player1_score;
        }else{

            player2_score =  player2_score + 1;
            document.getElementById("player_2_score").innerHTML= " : " + player2_score;
        }
    }

    if (ans_turn == "P1"){
        ans_turn = "P2";
        document.getElementById("answer_turn").innerHTML = "Answer Turn : "+ player_2;
    }else{
       ans_turn = "P1";
       document.getElementById("answer_turn").innerHTML = "Answer Turn : "+ player_1;
    }

    if (ques_turn == "P1"){
        ques_turn = "P2";
        document.getElementById("Question_turn").innerHTML = "Question Turn : "+ player_2;
    }else{
       ques_turn = "P1";
       document.getElementById("Question_turn").innerHTML = "Question Turn : "+ player_1;
    }

    document.getElementById("output_ques").innerHTML = "";



}
   

