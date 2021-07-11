#while loop till exit/how many questions would you like?
#generate questions and answers
#if usr_answer == sys_answer, move onto next question
#else stay on question
#at the end, total correct answers and ask to play again or exit

#import random number function
import random

#allow user to set boundaries
highValue = int(input("highest number you wish to work with"))
lowValue = int(input("lowest number you wish to work with"))

#generate random integers using user input
num1 = random.randint (lowValue, highValue)
num2 = random.randint (lowValue, highValue)

#create math question with answer
if num1>num2:
    print(num1, "-", num2, "=", num1-num2)
    
else:
    print(num1, "+", num2, "=", num1+num2)

