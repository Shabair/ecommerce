import axios from 'axios'


export function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}


export async function isUniqueEmail (email) {
    const checkEmail = await axios.get("/isUniqueEmail?email="+email);

    return checkEmail.data.status;
}

export const ObjectSize = function(obj) {
    var size = 0,
      key;
    for (key in obj) {
      if (obj.hasOwnProperty(key)) size++;
    }
    return size;
  };