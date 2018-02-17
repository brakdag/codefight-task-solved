function angleType(m) {
    if(m==90) return 'right'
    if(m==180) return 'straight'
    if(m<90) return 'acute'
    if(m>90&& m<180) return 'obtuse'
        
    }