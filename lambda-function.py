# -*- coding: utf-8 -*-
import sys
import json


def main(event):
    name = event.get('name', 'Mr. Eastwood')
    response = dict(greeting='Hello', name=name)
    print(json.dumps(response))


if __name__=='__main__':
    argv = sys.argv[1:]
    event = json.loads(argv[0])
    main(event)
