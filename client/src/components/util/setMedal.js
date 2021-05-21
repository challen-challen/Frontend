export const setMedal =(ranking)=> {
    if(ranking <10){
        return '#FCE35F';
    }
    if(ranking <20) {
        return '#32FF92'
    }
}