import time
import sys

sys.setrecursionlimit(1000000)

def factorial(number):
		result = 1 # O(1)
		
		while number > 1: # O(n)
				result *= number  # O(1)
				number -= 1  # O(1)

		return result

def factorial_recursive(number):
		if number == 1: # O(1)
				return number
		else:
				return number * factorial_recursive(number - 1) # O(n)
		

if __name__ == '__main__':
		number = 1000

		start_time = time.time()
		print(factorial(number))
		#factorial(number)
		end_time = time.time()
		print('Time taken for factorial: {}'.format(end_time - start_time))

		start_time = time.time()
		print(factorial_recursive(number))
		#factorial_recursive(number)
		end_time = time.time()
		print('Time taken for factorial_recursive: {}'.format(end_time - start_time))


