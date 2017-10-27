import requests

for x in range(1, 1000):
	    str1 = str(x) + '.png'
	    str2 = 'https://pkmref.com/images/set_1/' + str(x) + '.png'

	    f = open(str1, 'wb')
	    f.write(requests.get(str2).content)
	    f.close()
	    print("Downloading " + str(x))