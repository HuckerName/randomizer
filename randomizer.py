import random

def test_input(text):
    while True:
        try:
            number = int(input(text))
            return number
        except ValueError:
            print('Введите целое число')


min_num = test_input('Введите наименьшее число: ')
max_num = test_input('Введите наибольшее число: ')

print(random.randint(min_num, max_num))