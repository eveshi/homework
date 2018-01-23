#!/usr/bin/python
# -*- coding: utf-8 -*-

import random
import string

def act_code(amount, length):
    base = string.ascii_uppercase + string.ascii_lowercase + string.digits
    # i = 0
    # while i < amount:
    #     value = random.sample(base, length)
    #     print(value)
    #     i += 1
    values = ["".join(random.sample(base, length)) for i in range(amount)]
    return values

print(act_code(10,16))