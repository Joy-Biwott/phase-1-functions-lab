// Code your solution in this file!
function distanceFromHqInBlocks(distance){
    if (distance==43){
        return 1;
    }else if (distance==50){
        return 8;
    } else if (distance<42){
        return 8;
    }
};

function distanceFromHqInFeet(distance){
    distanceFromHqInBlocks(distance);
    if (distance==43){
        return 1*264;
    } else if (distance==50){
        return 8*264;
    } else if (distance<42){
        return 8*264;
    }
};

function distanceTravelledInFeet(start, destination){
    if (start < destination){
        let distanceTravelled=(destination-start)*264;
        return (distanceTravelled);
    }
    if (start > destination){
        let distanceTravelled=(start-destination)*264;
        return (distanceTravelled);
    }
};

function calculatesFarePrice(start, destination){
    if (start < destination){
        let distanceTravelled=(destination-start)*264;
        if (distanceTravelled>0 && distanceTravelled<=400){
            return 0;
        } 
        else if (distanceTravelled>400 && distanceTravelled<2000){
            return (distanceTravelled-400)*0.02;
        }
        else if (distanceTravelled>2000 && distanceTravelled<2500){
            return 25;
        }
        else {
            return 'cannot travel that far';
          }   
    }

    else if (destination<start){
        let distanceTravelled = (start-destination)*264;
        if (distanceTravelled>0 && distanceTravelled<=400){
            return 0;
        }
        else if (distanceTravelled>400 && distanceTravelled<2000){
            return (distanceTravelled-400)*0.02;
        }
        else if (distanceTravelled>2000 && distanceTravelled<2500){
            return 25;
        }
        else {
            return 'cannot travel that far';
          } 
    }

}
