import React,{useContext} from 'react';
import "./DetailTrip.css";
import {FlyContext} from '../context';
import {Link} from 'react-router-dom'
import $ from 'jquery';

const DetailTrip =() =>{
  const context = useContext(FlyContext)
  return(
    <div className="frame">
      <div className="detail-trip-frame box-shadow-frame margin-right-text">
        <div className="detail-trip-head">
          <div className="detail-trip-head-topic">
            <span className="margin-left-text choose-flight-text-normal">{context.thisLanguage.selectedChoose}</span>
            <div className="margin-left-text detail-trip-time">
              <span className="choose-flight-text-bold">{context.dataChoice.name} ({context.dataChoice.id})</span>
              <i class="fas fa-arrow-right"></i>
              <span className="choose-flight-text-bold">{context.dataChoice.to} ({context.dataChoice.toId})</span>
            </div>
            <div className="choose-flight-change-head-detail">
              <span className="choose-flight-change-head-detail-date margin-left-text">{context.traveler} {context.thisLanguage.pax}</span>
              <span className="choose-flight-change-head-detail-traveler">{context.thisLanguage.direct}</span>
            </div>
          </div>
          <Link to="/SearchPlane">
            <button type="button" className="margin-right-text btn-red-white">{context.thisLanguage.changeFlight}</button>        
          </Link>
        </div>
        <div className="detail-trip">
          <div className="detail-trip-child margin-left-text">
            <span className="choose-flight-text-normal">VietNam Airline</span>
            <span className="choose-flight-text-small">BL6215</span>
            <span className="choose-flight-text-small">Airbus A320</span>
          </div>
          <div className="graph-go">
            <div className="point-start"></div>
            <div className="line-go"></div>
            <div className="point-end"></div>
          </div>
          <div className="detail-trip-flex">
            <div className="choose-flight-list-child-detail-child">
              <span className="choose-flight-text-big margin-top-text">{context.dataChoice.departureTime}</span>
              <span className="choose-flight-text-small">{context.day} {context.nameMonth} {context.yearNow}</span>
            </div>
            <div>
              <i class="far fa-clock"></i>
              <span className="choose-flight-text-small">{Math.floor(context.dataChoice.flightTime)}h {(context.dataChoice.flightTime - Math.floor(context.dataChoice.flightTime)) * 60}m</span>
            </div>
            <div className="detail-trip-child">
              <span className="choose-flight-text-big">{context.dataChoice.destinationTime}</span>
              <span className="choose-flight-text-small margin-bottom-text">{context.day} {context.nameMonth} {context.yearNow}</span>
            </div>
          </div>
          <div className="detail-trip-flex">
            <div className="detail-trip-child">
              <span className="choose-flight-text-normal margin-top-text">{context.dataChoice.name} ({context.dataChoice.id})</span>
              <span className="choose-flight-text-blur">{context.dataChoice.airport}</span>
            </div>
            <div className="detail-trip-child">
              <span className="choose-flight-text-normal">{context.dataChoice.to} ({context.dataChoice.toId})</span>
              <span className="choose-flight-text-blur margin-bottom-text">{context.dataChoice.toAirline}</span>
            </div>
          </div>
          <div className="detail-trip-baggage">
            <div>
              <i class="fas fa-suitcase-rolling"></i>
              <span className="choose-flight-text-normal">Cabin Baggage 7 kg</span>
            </div>
            <div>
              <i class="fas fa-suitcase"></i>
              <span className="choose-flight-text-normal">Baggage 23 kg</span>
            </div>
          </div> 
        </div>
      </div>
      <div className="detail-trip-price">
        <div className="detail-trip-price-head  margin-bottom-10">
          <div className="detail-trip-price-topic">
            <span className="choose-flight-text-bold margin-left-text">{context.thisLanguage.priceDetail}</span>          
          </div>
          <div className="detail-trip-depart ">
            <div className="detail-trip-depart-1">
              <div className="detail-trip-depart-1-c" onClick={()=>{
                if(context.aniShowPrice === true) context.setAniShowPrice(false);
                else context.setAniShowPrice(true);
              }}>
                <span className="detail-trip-text-small-bold margin-left-text">{context.thisLanguage.depart} </span>
                <span className="detail-trip-text-small-bold">({context.dataChoice.id}</span>
                <i class="fas fa-arrow-right"></i>
                <span className="detail-trip-text-small-bold">{context.dataChoice.toId})</span>
                <i class={`fas fa-chevron-up ani-hide-price-icon ${context.aniShowPrice === true ? 'ani-show-price-icon' : ''}`}></i>
              </div>
              <span className="detail-trip-text-small-bold margin-right-text">{context.symbol} {((context.dataChoice.price * context.convert).toFixed(2)) * context.traveler}</span>
            </div>
            <div className={`detail-trip-depart-2 ani-show-price-text ${context.aniShowPrice === true ? 'ani-hide-price-text' : ''}`}>
              <div className="detail-trip-depart-2-c">
                <span className="margin-left-text choose-flight-text-blur">{context.thisLanguage.traveler} x {context.traveler}</span>
                <span className="margin-right-text choose-flight-text-normal">{context.dataChoice.price * context.traveler}</span>
              </div>
              <div className="detail-trip-depart-2-c">
                <span className="margin-left-text choose-flight-text-blur">{context.thisLanguage.tax}</span>
                <span className="margin-right-text choose-flight-text-normal">0</span>
              </div>
            </div>
          </div>
        </div>
        <div className="detail-trip-total box-shadow-frame margin-bottom-10">
          <span className="choose-flight-text-bold margin-left-text">{context.thisLanguage.total}</span>
          <span className="choose-flight-text-bold margin-right-text">{context.symbol} {((context.dataChoice.price * context.convert).toFixed(2)) * context.traveler}</span>
        </div>
        <Link onClick={()=> $(window).scrollTop(0)} to="/Flight/book">
          <button type="button" className="btn-red-white detail-trip-btn">{context.thisLanguage.continueBooking}</button>
        </Link>
      </div>
    </div>
  )
}

export default DetailTrip;