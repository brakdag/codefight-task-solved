function insideCircle(point, center, radius) {
        return radius>= Math.sqrt(Math.pow(point[0]-center[0],2)+ Math.pow(point[1]-center[1],2))
    }