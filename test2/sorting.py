def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
    return arr

if __name__ == "__main__":
    data = [5, 2, 9, 1, 5, 6]
    print("Before:", data)
    sorted_data = bubble_sort(data)
    print("After:", sorted_data)
