const requestGet=require('./RequestGet')
const getURL = require('./getURL')

const getArrIds = (arrIds,startDate, endDate)=>{
    return arrIds.map((id) =>
    requestGet(getURL(id, startDate, endDate)).then((res) =>
      res.map((el) => {
          delete el.Cur_ID;
          console.log(el)
        return el;
      })
    )
  );
}

    
module.exports=getArrIds;