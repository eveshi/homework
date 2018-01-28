#!/usr/bin/python
# -*- coding: utf-8 -*-

#顺序表

class initForm(object):
    def __init__(self):
        self.arr = []
        self.number = 0

    def initialize(self):
        i = 0
        while i < self.number:
            self.arr.append(i)
            i += 1

    def cunIn(self, element, position):
        if 0 < position < len(self.arr):
            arr1 = self.arr[:position-1]
            arr1.append(element)
            arr2 = self.arr[position-1:]
            self.arr = arr1 + arr2
        elif position == 0:
            arrNew = []
            arrNew.append(element)
            self.arr = arrNew + self.arr
        elif position > len(self.arr) - 1:
            self.arr.append(element)
        else:
            print("Wrong")

def merge(arr1, arr2):
    arr = arr1 + arr2
    arrNew = []
    a = 1
    b = 0
    i = 0
    n = arr[0]
    while a < len(arr):
        while b < len(arr):
            if arr[b] < n:
                n = arr[b]
                i = b
            b += 1
        arrNew.append(n)
        del arr[i]
        n = arr[0]
        b = 0
        i = 0
    arrNew = arrNew + arr
    return arrNew

t = initForm()
t.number = 7
t.initialize()
t.cunIn(5,0)

m = initForm()
m.number = 3
m.initialize()


print(t.arr)

print(m.arr)

ok = merge(t.arr,m.arr)
print(ok)