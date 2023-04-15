import random

def bubble_sort(list):
	n = len(list)

	for i in range(n):
		for j in range(0, n - i - 1): # O(n) * O(n) = O(n * n) = O(n**2) grows quadratically
			print(f'step {i} - {j}')
			if list[j] > list[j + 1]:
				list[j], list[j + 1] = list[j + 1], list[j]

	return list

if __name__ == '__main__':

	list_size = int(input('What size is the list? '))

	list = [random.randint(0, 100) for i in range(list_size)]
	print(list)

	order_list = bubble_sort(list)
	print(order_list)