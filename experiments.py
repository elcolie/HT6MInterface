
def decorator_func(func):
    return func()


@decorator_func
def say_hello():
    print('hello ')


def main():
    say_hello()



if __name__ == '__main__':
    main()