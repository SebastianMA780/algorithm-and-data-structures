import random

def selection_sort(array):
		n = len(array)
	
		for i in range(n): # O(n) 
			index_small_number = i
			for j in range(i + 1, n): # O(n)
				if array[j] < array[index_small_number]:
					index_small_number = j

			array[i], array[index_small_number] = array[index_small_number], array[i]

		return array
		# O(n) *  O(n) = O(n^2) grows quadratically

					
if __name__ == '__main__' :

		array = [random.randint(0, 100) for i in range(10)]
		print(array)

		print(selection_sort(array))
