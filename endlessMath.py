#while loop till exit/how many questions would you like?
#generate questions and answers
#if usr_answer == sys_answer, move onto next question
#else stay on question
#at the end, total correct answers and ask to play again or exit

#import random number function
import random

#allow user to set boundaries
highValue = int(input("What is the highest number you wish to work with"))
lowValue = int(input("What is the lowest number you wish to work with"))
qn_no = int(input("How many questions would you like generated?"))

#create multiple math question with answer
def question(qn_no):
    for qn in range(qn_no):
        #generate random integers using user input
        num1 = random.randint (lowValue, highValue)
        num2 = random.randint (lowValue, highValue)

        #logic to generate questions and answers
        if num1>num2:
            print(num1, "-", num2, "=",)
            sys_ans = num1-num2
            answer(sys_ans)
        
        else:
            print(num1, "+", num2, "=",)
            sys_ans = num1+num2
            answer(sys_ans)

#let user input answers, match answers to logic
def answer(sys_ans):
    usr_ans = int(input ("Input your Answer:"))
    while usr_ans != sys_ans:
        print("Incorrect Answer. Try Again")
        usr_ans = input ("Input Answer:")
    
    #if usr_ans.upper == "Q": #Quit
        #print("You have closed the Programme. Goodbye")
        #exit()

#run Programme
question(qn_no)