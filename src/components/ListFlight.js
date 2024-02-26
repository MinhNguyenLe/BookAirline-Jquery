import React, { useContext} from 'react'
import "./ListFlight.css";
import OptionFlight from '../components/OptionFlight'
import {FlyContext, resetScroll} from '../context';
import {Link} from 'react-router-dom'

const ListFlight =()=>{
  const context = useContext(FlyContext)

  const chooseListFlight=(id, toId, name , to)=>{
    resetScroll();
    context.setChooseTrip(true)
    context.setTrip(context.appData.flyData.find(data => data.id === id && data.toId === toId))
    context.setDep(`${to}(${toId})`)
    context.setDes(`${name}(${id})`)
    context.setIdDep(id)
    context.setIdDes(toId)
  }
  return(
    <div className="list-flight-frame">
      <div className="list-flight">
        <span className="list-flight-head">{context.thisLanguage.seePopular}</span>
        <OptionFlight></OptionFlight>
        <div className="list-flight-list">
          {context.listData.map(fly => {
            return <Link to="/SearchPlane" onClick={() => chooseListFlight(fly.id, fly.toId ,fly.name, fly.to)} className="list-flight-list-row-frame" style={{ backgroundImage : `${fly.img}`,  backgroundSize :"cover"}}>
            <div className="list-flight-list-row list-flight-list-row-child">
              <div className="list-flight-list-row-child-topic">
                <span>{context.thisLanguage.from} {fly.from}</span>
                <div className="list-flight-list-row-child-topic-icon">
                  <i class="fas fa-plane"></i>
                  <span>{fly.to} City</span>
                </div>
                <div className="list-flight-list-row-child-topic-line"></div>
              </div>
              <div className="list-flight-list-row-child-topic-show">
                <div className="list-flight-list-row-child-topic price">
                  <span>{context.thisLanguage.startFrom}</span>
                  <span>{context.symbol} {(fly.price * context.convert).toFixed(2)}</span>
                </div>
                <i class="fas fa-angle-double-right"></i>
              </div>
            </div>
          </Link>
          })}
        </div>
      </div>    
    </div>
  )
}

export default ListFlight;