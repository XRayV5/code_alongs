def makeFakeMap(x,y,k)
  arrX = []
  for i in 0...x
    arrY = []
    for j in 0...y
      arrY << 'A'
    end
    arrX << arrY
  end
  p indX = rand(0...x)
  p indY = rand(0...y)

  arrX[indX][indY] = k
  arrX
end

# arr = makeFakeMap(5,5,'5')

# p arr
#
def makeFakeMap(x,y,k,f,s)
  arrX = []
  for i in 0...x
    arrY = []
    for j in 0...y
      arrY << 'A'
    end
    arrX << arrY
  end
  p indX = rand(0...x)
  p indY = rand(0...y)
  p indRx = rand(0...x-s+1)
  p indRy = rand(0...y-s+1)

  for a in indRx...indRx+s
    for b in indRy...indRy+s
      arrX[a][b] = f
    end
  end
  p indRx = rand(indRx...indRx+s)
  p indRy = rand(indRy...indRy+s)
  arrX[indRx][indRy] = k
  arrX
end

arr1 = makeFakeMap(5,5,'X','F',2)
def formater(arr)
  l = arr.length
  for i in 0...l
    p arr[i].to_s
  end
end

formater(arr1)
