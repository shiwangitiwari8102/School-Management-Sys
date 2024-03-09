import React from 'react';

function Facilities() {
  return (
    <div className="facilities m-5 p-5" id="Facilities">
      <h1 className='text-center p-3 text-primary facilities-heading'>Transport Facilities</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img className="img-fluid" src="https://rdpublicschools.com/wp-content/uploads/2019/05/school_bus_img1-copy-1024x283.png" alt="bus" style={{ maxHeight: '200px', width: '100%' }} />
          </div>
          <div className="col-md-6">
            <h3 className='text-warning'>School Bus</h3>
            <h5>School bus rides are joyful and memorable moments of the school days.</h5>
            <p>The school provides transportation facilities to students.</p>
            <p>Buses are operated in all important routes.</p>
            <p>We have well experienced and trained drivers and nannies to take care of the children.</p>
            <p>Parents/Guardians who want to send their ward by school bus should apply for the same to the Principal at the beginning of the academic year.</p>
            <p>The bus fees shall be remitted in a single installment along with the Annual fees or in three installments along with the term fees.</p>
            <p>To discontinue the bus facility, one month’s notice in writing shall be given by the parent/guardian to the Principal.</p>
            <p>Requests for change of boarding points shall be made in writing one month in advance.</p>
            <p>Students are allowed to board the bus only on displaying the boarding pass. Nobody without a valid bus pass will be allowed to board the bus.</p>
            <p>The student should reach the boarding point prior to the scheduled time and should not keep the school bus waiting.</p>
            <p>A responsible person known to the driver and nanny may be engaged to bring the child to the boarding point and to take the child back.</p>
            <p>If the school bus fails to ply on any day on account of some unforeseen difficulty, the students should come to school by other means. No complaint will be entertained on such issues.</p>
            <h2 className='text-danger'>Emergency Transportation Service</h2>
            <p>The school has a vehicle and a driver for emergency transportation of pupils to hospitals/clinics.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Facilities;
