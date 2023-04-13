import random

def linear_search(list, target):
	match = False # O(1)
	
	for element in list: # O(n)
		print(f'try with {element}')
		if element == target: # O(1)
			match = True # O(1)
			break
	return match 

	# O( 1 + 1 + 1 + n) = O(3 + n) = O(n) grows linearly

def binary_search(list, init, end, target):
		print(f'searching {target} between {init} and {end}')
		if init > end: # O(1)
			return False
		
		middle = (init + end) // 2 # O(1)

		if list[middle] == target: # O(1)
			return True
		elif list[middle] < target: # O(1)
			return binary_search(list, middle + 1, end, target) 
		# O(log(n)) Logarithmic Time, because the search space is divided by 2 in each recursive call
		else:
			return binary_search(list, init, middle - 1, target)	
		# O(log(n)) Logarithmic Time, because the search space is divided by 2 in each recursive call

		# O(log(n)) + O(1) + O(1) + O(1) + O(1) = O(log(n)) Logarithmic Time

if __name__ == '__main__':
	list_size = int(input('What size is the list? '))
	target = int(input('What number would you like to find? '))

	list = [random.randint(0, 100) for i in range(list_size)]

	found = linear_search(list, target)
	print(list)
	print(f'The element {target} {"is" if found else "is not"} in the list')

	order_list = sorted(list)
	found = binary_search(order_list, 0, len(order_list), target)
	print(order_list)
	print(f'The element {target} {"is" if found else "is not"} in the list')

