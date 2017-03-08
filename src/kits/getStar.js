/**
 * Created by Administrator on 2017/2/25 0025.
 */
function getStar(score,lis){
    score=parseFloat(score);
    if(score>0 && score<=2){
        lis[0].style.color='yellow';
    }
    else if(score>2 && score<=4){
        lis[0].style.color='yellow';
        lis[1].style.color='yellow';
    }
    else if(score>4 && score<=6){
        lis[0].style.color='yellow';
        lis[1].style.color='yellow';
        lis[2].style.color='yellow';
    }
    else if(score>6 && score<=8){
        lis[0].style.color='yellow';
        lis[1].style.color='yellow';
        lis[2].style.color='yellow';
        lis[3].style.color='yellow';
    }
    else if(score>8 && score<=10){
        lis[0].style.color='yellow';
        lis[1].style.color='yellow';
        lis[2].style.color='yellow';
        lis[3].style.color='yellow';
        lis[4].style.color='yellow';
    }
}
export default getStar;