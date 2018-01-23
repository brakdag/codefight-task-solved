var Server = function(id){
    this.id=id
    this.used=0;
    this.jobs=[]
}
Server.prototype.add = function(value){
    this.jobs.push(value[1])
    this.used +=value[0]; 
}
Server.prototype.getUsed = function(){
    return this.used;
}
Server.prototype.getId=function(){
    return this.id
}
Server.prototype.getJobs=function(){
    return this.jobs
}



function serverFarm(jobs, servers) { 

 [30,2,35,49,39], 
 [34,3,38,5,33], 
 [36,13,47,15,46], 
 [11,8,4,23,7,48], 
 [44,17,24,19,42,9], 
 [6,41,29,21,43,25], 
 [14,45,18,1,37,12], 
 [31,32,27,28,20]]
    
var s=[]
    jobs=jobs.map((a,i)=>[a,i]).sort((a,b)=>a[0]==b[0]? (a[1]<b[1] ? 1:-1):b[0]-a[0] ? -1:1 )
    
    for(i=0;i<servers;i++){
        s.push(new Server(i))
    }
   for(var job of jobs)
       {
           s[0].add(job)   
           s=s.sort((a,b)=>a.getUsed()==b.getUsed() ? (a.getId()<b.getId() ?1 :-1) :(a.getUsed()>b.getUsed()? 1:-1));
         //  console.log(s)
       }
rt=[]
for(serv of s)
    rt.unshift(serv.getJobs())
return rt
}

