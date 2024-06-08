import React from 'react';
import ButtonBox from './ButtonBox';
import './App.css';

const Cards = () => {


  return (
    <div>
    <div class="flex-container">
        <div className='comp-card'><ButtonBox/>
        <div className="card-background">
      <div
        className="card-image"
        style={{
          backgroundImage: "url('https://t3.ftcdn.net/jpg/05/60/96/10/360_F_560961079_1ANmtw7J1ohCsZiAn1tr2ZLqBlqVKjT0.jpg')"
        }}
      ></div>
      <div className="card-content">
        <h4>Image Card</h4>
        <p>This card includes a top image with content below it.</p>
        <button className="button bg-purple">Action</button>
      </div>
    </div>
        </div>
        <div className='comp-card'><ButtonBox/>
        <div className="card-background">
      <div
        className="card-image"
        style={{
          backgroundImage: "url('https://t3.ftcdn.net/jpg/05/60/96/10/360_F_560961079_1ANmtw7J1ohCsZiAn1tr2ZLqBlqVKjT0.jpg')"
        }}
      ></div>
      <div className="card-content">
        <h4>Image Card</h4>
        <p>This card includes a top image with content below it.</p>
        <button className="button bg-purple">Action</button>
      </div>
    </div>
        </div>

  </div>

<div class="flex-container">
<div className='comp-card'><ButtonBox/>
        <div className="card-background">
      <div
        className="card-image"
        style={{
          backgroundImage: "url('https://t3.ftcdn.net/jpg/05/60/96/10/360_F_560961079_1ANmtw7J1ohCsZiAn1tr2ZLqBlqVKjT0.jpg')"
        }}
      ></div>
      <div className="card-content">
        <h4>Image Card</h4>
        <p>This card includes a top image with content below it.</p>
        <button className="button bg-purple">Action</button>
      </div>
    </div>
        </div>
        <div className='comp-card'><ButtonBox/>
        <div className="card-background">
      <div
        className="card-image"
        style={{
          backgroundImage: "url('https://t3.ftcdn.net/jpg/05/60/96/10/360_F_560961079_1ANmtw7J1ohCsZiAn1tr2ZLqBlqVKjT0.jpg')"
        }}
      ></div>
      <div className="card-content">
        <h4>Image Card</h4>
        <p>This card includes a top image with content below it.</p>
        <button className="button bg-purple">Action</button>
      </div>
    </div>
        </div>

</div>
</div>
  );
};

export default Cards;
