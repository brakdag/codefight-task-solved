function chessBoardCellColor(cell1, cell2) {
    x1="ABCDEFGH".indexOf(cell1[0])
    x2="ABCDEFGH".indexOf(cell2[0])
    return (P(cell1[1])==P(cell2[1])) == (P(x1)==P(x2))
    }
    
    function P(v)
    {
        return v%2==0
    }