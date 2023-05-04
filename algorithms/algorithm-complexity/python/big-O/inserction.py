import random

def insertion_sort(array):

	for index in range(1,len(array)):
		value = array[index]
		position = index

		while position > 0  and array[position - 1] > value:
			array[position] = array[position - 1]
			position -= 1

		array[position] = value


if __name__ == '__main__':

	array = [random.randint(0, 100) for i in range(10)]
	print(array)

	insertion_sort(array)
	print(array)