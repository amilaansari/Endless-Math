#while loop till exit/how many questions would you like?
#generate questions and answers
#if usr_answer == sys_answer, move onto next question
#else stay on question
#at the end, total correct answers and ask to play again or exit

#import random number function
import random

#allow user to set boundaries
maxValue = input("highest number you wish to work with")
minValue = input("lowest number you wish to work with")

#generate random integers using user input
num1, num2 = random.randint (int(maxValue), int(minValue))
