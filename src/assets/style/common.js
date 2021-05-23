
export const setColor = function(type){
    let colors = {
        mainColor: '#c291f8',
        subColor: '#f7ecf6',
        subColor02: '#b989b5',
    }
    if(type === "aboutme") {
        colors = {
            mainColor: '#c291f8',
            subColor: '#f7ecf6',
            subColor02: '#b989b5',
        }
    } else {
        colors = {
            mainColor: '#2828cb',
            subColor: '#fff3d8',
            subColor02: '#cbbfa5',
        }
    }

    return colors;
}