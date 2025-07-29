

def extract_remove_last_digit(n) -> None:
    while(n > 0):
        print(f'Current N: {n}')
        last = n % 10
        print(f'Last Digit {last}')
        n = n // 10
        print(f'New N: {n}\n')


extract_remove_last_digit(1233450)