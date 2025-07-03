import Reactm,{useState} from 'react'

export default function AboutPage() {
const [myStyle, setmyStyle]= useState(
{
     color:'white',
    backgroundColor: 'black',
    border: '2px solid white',
}
);
const [btnStyle, setbtnstyle]=useState("Enable Light mode");


const togleStyle = ()=>{
if(myStyle.color == 'white'){
   setmyStyle({
     color: 'black',
    backgroundColor: 'white',
   })
   setbtnstyle('Enable DarkMode')
}
else{
   setmyStyle({
     color: 'white',
    backgroundColor: 'black',
    border: '2px solide white'
   })  
   setbtnstyle('Enable LightMode')
}
}




  return (
   <>
 <div className="container" style={myStyle}>
  <div className="flex items-center gap-4 my-2">
  <h2>About Us</h2>
  <button type='button' onClick={togleStyle} className='btn btn-primary'>{btnStyle}</button>
</div>

    <div className="row g-4" >

      {/* <!-- Main content START --> */}
      <div className="col-lg-8 vstack gap-4" >
        {/* <!-- Card START --> */}
        <div className="card my-2" style={myStyle}>
          <div className="h-200px rounded-top" style={{backgroundImage:'url(https://social.webestica.com/assets/images/bg/05.jpg)', }}></div>   
            {/* <!-- Card body START --> */}
            <div className="card-body py-0">
              <div className="d-sm-flex align-items-start text-center text-sm-start">
                <div>
                  {/* <!-- Avatar --> */}
                  <div className="avatar avatar-xxl mt-n5 mb-3 my-2">
                    <img className="avatar-img rounded-circle border border-white border-3" style={{width:100}} src="https://social.webestica.com/assets/images/avatar/07.jpg" alt=""/>
                  </div>
                </div>
                <div className="ms-sm-4 mt-sm-4">
                  {/* <!-- Info --> */}
                  <h1 className="mb-0 h5">Sam Lanson <i className="bi bi-patch-check-fill text-success small"></i></h1>
                  <p>250 connections</p>
                </div>
                {/* <!-- Button --> */}
                <div className="d-flex mt-3 justify-content-center ms-sm-auto">
                  <button className="btn btn-danger-soft me-2" type="button"> <i className="bi bi-pencil-fill pe-1"></i> Edit profile </button>
                  <div className="dropdown">
                    {/* <!-- Card share action menu --> */}
                    <button className="icon-md btn btn-light" type="button" id="profileAction2" data-bs-toggle="dropdown" aria-expanded="false">
                      <i className="bi bi-three-dots"></i>
                    </button>
                    {/* <!-- Card share action dropdown menu --> */}
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="profileAction2">
                      <li><a className="dropdown-item" href="#"> <i className="bi bi-bookmark fa-fw pe-2"></i>Share profile in a message</a></li>
                      <li><a className="dropdown-item" href="#"> <i className="bi bi-file-earmark-pdf fa-fw pe-2"></i>Save your profile to PDF</a></li>
                      <li><a className="dropdown-item" href="#"> <i className="bi bi-lock fa-fw pe-2"></i>Lock profile</a></li>
                      <li><hr className="dropdown-divider"/></li>
                      <li><a className="dropdown-item" href="#"> <i className="bi bi-gear fa-fw pe-2"></i>Profile settings</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* <!-- List profile --> */}
              <ul className="list-inline mb-0 text-center text-sm-start mt-3 mt-sm-0">
                <li className="list-inline-item"><i className="bi bi-briefcase me-1"></i> Lead Developer</li>
                <li className="list-inline-item"><i className="bi bi-geo-alt me-1"></i> New Hampshire</li>
                <li className="list-inline-item"><i className="bi bi-calendar2-plus me-1"></i> Joined on Nov 26, 2019</li>
              </ul>
            </div>
            {/* <!-- Card body END --> */}
            <div className="card-footer mt-3 pt-2 pb-0">
              {/* <!-- Nav profile pages --> */}
              <ul className="nav nav-bottom-line align-items-center justify-content-center justify-content-md-start mb-0 border-0">
                <li className="nav-item"> <a className="nav-link" href="my-profile.html"> Posts </a> </li>
                <li className="nav-item"> <a className="nav-link" href="my-profile-about.html"> About </a> </li>
                <li className="nav-item"> <a className="nav-link active" href="my-profile-connections.html"> Connections <span className="badge bg-success bg-opacity-10 text-success small"> 230</span> </a> </li>
                <li className="nav-item"> <a className="nav-link" href="my-profile-media.html"> Media</a> </li>
                <li className="nav-item"> <a className="nav-link" href="my-profile-videos.html"> Videos</a> </li>
                <li className="nav-item"> <a className="nav-link" href="my-profile-events.html"> Events</a> </li>
                <li className="nav-item"> <a className="nav-link" href="my-profile-activity.html"> Activity</a> </li>
              </ul>
            </div>
          </div>
          {/* <!-- Card END --> */}

          {/* <!-- Card Connections START --> */}
          <div className="card" style={myStyle}>
            {/* <!-- Card header START --> */}
            <div className="card-header border-0 pb-0">
              <h5 className="card-title"> Connections</h5> 
            </div>
            {/* <!-- Card header END --> */}
            {/* <!-- Card body START --> */}
            <div className="card-body">
              {/* <!-- Connections Item --> */}
              <div className="d-md-flex align-items-center mb-4">
                {/* <!-- Avatar --> */}
                <div className="avatar me-3 mb-3 mb-md-0">
                  <a href="#!"> <img className="avatar-img rounded-circle" src="assets/images/avatar/01.jpg" alt=""/> </a>
                </div>
                {/* <!-- Info --> */}
                <div className="w-100">
                  <div className="d-sm-flex align-items-start">
                    <h6 className="mb-0"><a href="#!">Lori Ferguson </a></h6>
                    <p className="small ms-sm-2 mb-0">Full Stack Web Developer</p>
                </div>
                {/* <!-- Connections START --> */}
                <ul className="avatar-group mt-1 list-unstyled align-items-sm-center">
                  <li className="avatar avatar-xxs">
                    <img className="avatar-img rounded-circle" src="assets/images/avatar/01.jpg" alt="avatar"/>
                  </li>
                  <li className="avatar avatar-xxs">
                    <img className="avatar-img rounded-circle" src="assets/images/avatar/02.jpg" alt="avatar"/>
                  </li>
                  <li className="avatar avatar-xxs">
                    <img className="avatar-img rounded-circle" src="assets/images/avatar/03.jpg" alt="avatar"/>
                  </li>
                  <li className="avatar avatar-xxs">
                    <img className="avatar-img rounded-circle" src="assets/images/avatar/04.jpg" alt="avatar"/>
                  </li>
                  <li className="avatar avatar-xxs">
                    <div className="avatar-img rounded-circle bg-primary"><span className="smaller text-white position-absolute top-50 start-50 translate-middle">+2</span></div>
                  </li>
                  <li className="small ms-3">
                    Carolyn Ortiz, Frances Guerrero, and 20 other shared connections
                  </li>
                </ul>
                {/* <!--/ Connections END --> */}
              </div>
              {/* <!-- Button --> */}
              <div className="ms-md-auto d-flex">
                <button className="btn btn-danger-soft btn-sm mb-0 me-2"> Remove </button>
                <button className="btn btn-primary-soft btn-sm mb-0"> Message </button>
              </div>
            </div>

            {/* <!-- Connections Item --> */}
            <div className="d-md-flex align-items-center mb-4">
              {/* <!-- Avatar --> */}
              <div className="avatar me-3 mb-3 mb-md-0">
                <a href="#!"> <img className="avatar-img rounded-circle" src="assets/images/avatar/02.jpg" alt=""/> </a>
              </div>
              {/* <!-- Info --> */}
              <div className="w-100">
                <div className="d-sm-flex align-items-start">
                  <h6 className="mb-0"><a href="#!">Carolyn Ortiz </a></h6>
                  <p className="small ms-sm-2 mb-0">Web Developer | Freelancer</p>
                </div>
                {/* <!-- Connections START --> */}
                <ul className="avatar-group mt-1 list-unstyled align-items-sm-center">
                  <li className="avatar avatar-xxs">
                    <img className="avatar-img rounded-circle" src="assets/images/avatar/04.jpg" alt="avatar"/>
                  </li>
                  <li className="avatar avatar-xxs">
                    <img className="avatar-img rounded-circle" src="assets/images/avatar/06.jpg" alt="avatar"/>
                  </li>
                  <li className="avatar avatar-xxs">
                    <img className="avatar-img rounded-circle" src="assets/images/avatar/07.jpg" alt="avatar"/>
                  </li>
                  <li className="avatar avatar-xxs">
                    <div className="avatar-img rounded-circle bg-primary"><span className="smaller text-white position-absolute top-50 start-50 translate-middle">+5</span></div>
                  </li>
                  <li className="small ms-3">
                    Amanda Reed, Lori Stevens, and 10 other shared connections
                  </li>
                </ul>
                {/* <!-- Connections END --> */}
              </div>
              {/* <!-- Button --> */}
              <div className="ms-md-auto d-flex">
                <button className="btn btn-danger-soft btn-sm mb-0 me-2"> Remove </button>
                <button className="btn btn-primary-soft btn-sm mb-0"> Message </button>
              </div>
            </div>

            {/* <!-- Connections Item --> */}
            <div className="d-md-flex align-items-center mb-4">
              {/* <!-- Avatar --> */}
              <div className="avatar me-3 mb-3 mb-md-0">
                <a href="#!"> <img className="avatar-img rounded-circle" src="assets/images/avatar/03.jpg" alt=""/> </a>
              </div>
              {/* <!-- Info --> */}
              <div className="w-100">
                <div className="d-sm-flex align-items-start">
                  <h6 className="mb-0"><a href="#!">Lori Ferguson </a></h6>
                  <p className="small ms-sm-2 mb-0">Full Stack Web Developer</p>
                </div>
                {/* <!-- Connections START --> */}
                <ul className="avatar-group mt-1 list-unstyled align-items-sm-center">
                  <li className="small">
                    Joan Wallace and Larry Lawson shared connections
                  </li>
                </ul>
                {/* <!-- Connections END --> */}
              </div>
              {/* <!-- Button --> */}
              <div className="ms-md-auto d-flex">
                <button className="btn btn-danger-soft btn-sm mb-0 me-2"> Remove </button>
                <button className="btn btn-primary-soft btn-sm mb-0"> Message </button>
              </div>
            </div>

            {/* <!-- Connections Item --> */}
            <div className="d-md-flex align-items-center mb-4">
              {/* <!-- Avatar --> */}
              <div className="avatar me-3 mb-3 mb-md-0">
                <a href="#!"> <img className="avatar-img rounded-circle" src="assets/images/avatar/04.jpg" alt=""/> </a>
              </div>
              {/* <!-- Info --> */}
              <div className="w-100">
                <div className="d-sm-flex align-items-start">
                  <h6 className="mb-0"><a href="#!">Lori Ferguson </a></h6>
                  <p className="small ms-sm-2 mb-0">Full Stack Web Developer</p>
              </div>
              {/* <!-- Connections START --> */}
              <ul className="avatar-group mt-1 list-unstyled align-items-sm-center">
                <li className="small">
                  Samuel Bishop, Judy Nguyen, and 115 other shared connections
                </li>
              </ul>
              {/* <!-- Connections END --> */}
            </div>
            {/* <!-- Button --> */}
            <div className="ms-md-auto d-flex">
              <button className="btn btn-danger-soft btn-sm mb-0 me-2"> Remove </button>
              <button className="btn btn-primary-soft btn-sm mb-0"> Message </button>
            </div>
          </div>

          {/* <!-- Connections Item --> */}
          <div className="d-md-flex align-items-center mb-4">
            {/* <!-- Avatar --> */}
            <div className="avatar me-3 mb-3 mb-md-0">
              <a href="#!"> <img className="avatar-img rounded-circle" src="assets/images/avatar/05.jpg" alt=""/> </a>
            </div>
            {/* <!-- Info --> */}
            <div className="w-100">
              <div className="d-sm-flex align-items-start">
                <h6 className="mb-0"><a href="#!">Lori Ferguson </a></h6>
                <p className="small ms-sm-2 mb-0">Full Stack Web Developer</p>
            </div>
            {/* <!-- Connections START --> */}
            <ul className="avatar-group mt-1 list-unstyled align-items-sm-center">
              <li className="small">
                Bryan Knight and Billy Vasquez shared connections
              </li>
            </ul>
            {/* <!-- Connections END --> */}
          </div>
          {/* <!-- Button --> */}
          <div className="ms-md-auto d-flex">
            <button className="btn btn-danger-soft btn-sm mb-0 me-2"> Remove </button>
            <button className="btn btn-primary-soft btn-sm mb-0"> Message </button>
          </div>
        </div>
        <div className="d-grid">
          {/* <!-- Load more button START --> */}
          <a href="#!" role="button" className="btn btn-sm btn-loader btn-primary-soft" data-bs-toggle="button" aria-pressed="true">
            <span className="load-text"> Load more connections </span>
            <div className="load-icon">
              <div className="spinner-grow spinner-grow-sm" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          </a>
          {/* <!-- Load more button END --> */}
        </div>

        </div>
        {/* <!-- Card body END --> */}
        </div>
        {/* <!-- Card Connections END --> */}

      </div>
      {/* <!-- Main content END --> */}

      {/* <!-- Right sidebar START --> */}
      <div className="col-lg-4">

        <div className="row g-4">

          {/* <!-- Card START --> */}
          <div className="col-sm-6 col-lg-12">
            <div className="card"style={myStyle} >
              <div className="card-header border-0 pb-0">
                <h5 className="card-title">About</h5>
                {/* <!-- Button modal --> */}
              </div>
              {/* <!-- Card body START --> */}
              <div className="card-body position-relative pt-0">
                <p>He moonlights difficult engrossed it, sportsmen. Interested has all Devonshire difficulty gay assistance joy.</p>
                {/* <!-- Date time --> */}
                <ul className="list-unstyled mt-3 mb-0">
                  <li className="mb-2"> <i className="bi bi-calendar-date fa-fw pe-1"></i> Born: <strong> October 20, 1990 </strong> </li>
                  <li className="mb-2"> <i className="bi bi-heart fa-fw pe-1"></i> Status: <strong> Single </strong> </li>
                  <li> <i className="bi bi-envelope fa-fw pe-1"></i> Email: <strong> example@gmail.com </strong> </li>
                </ul>
              </div>
              {/* <!-- Card body END --> */}
            </div>
          </div>
          {/* <!-- Card END --> */}

          {/* <!-- Card START --> */}
          <div className="col-sm-6 col-lg-12">
            <div className="card" style={myStyle}>
              {/* <!-- Card header START --> */}
              <div className="card-header d-flex justify-content-between border-0">
                <h5 className="card-title">Experience</h5>
                <a className="btn btn-primary-soft btn-sm" href="#!"> <i className="fa-solid fa-plus"></i> </a>
              </div>
              {/* <!-- Card header END --> */}
              {/* <!-- Card body START --> */}
              <div className="card-body position-relative pt-0">
                {/* <!-- Experience item START --> */}
                <div className="d-flex">
                  {/* <!-- Avatar --> */}
                  <div className="avatar me-3">
                    <a href="#!"> <img className="avatar-img rounded-circle" src="assets/images/logo/08.svg" alt=""/> </a>
                  </div>
                  {/* <!-- Info --> */}
                  <div>
                    <h6 className="card-title mb-0"><a href="#!"> Apple Computer, Inc. </a></h6>
                    <p className="small">May 2015 – Present Employment Duration 8 mos <a className="btn btn-primary-soft btn-xs ms-2" href="#!">Edit </a></p>
                  </div>
                </div>
                {/* <!-- Experience item END --> */}

                {/* <!-- Experience item START --> */}
                <div className="d-flex">
                  {/* <!-- Avatar --> */}
                  <div className="avatar me-3">
                    <a href="#!"> <img className="avatar-img rounded-circle" src="assets/images/logo/09.svg" alt=""/> </a>
                  </div>
                  {/* <!-- Info --> */}
                  <div>
                    <h6 className="card-title mb-0"><a href="#!"> Microsoft Corporation </a></h6>
                    <p className="small">May 2017 – Present Employment Duration 1 yrs 5 mos <a className="btn btn-primary-soft btn-xs ms-2" href="#!">Edit </a></p>
                  </div>
                </div>
                {/* <!-- Experience item END --> */}

                {/* <!-- Experience item START --> */}
                <div className="d-flex">
                  {/* <!-- Avatar --> */}
                  <div className="avatar me-3">
                    <a href="#!"> <img className="avatar-img rounded-circle" src="assets/images/logo/10.svg" alt=""/> </a>
                  </div>
                  {/* <!-- Info --> */}
                  <div>
                    <h6 className="card-title mb-0"><a href="#!"> Tata Consultancy Services. </a></h6>
                    <p className="small mb-0">May 2022 – Present Employment Duration 6 yrs 10 mos <a className="btn btn-primary-soft btn-xs ms-2" href="#!">Edit </a></p>
                  </div>
                </div>
                {/* <!-- Experience item END --> */}

              </div>
              {/* <!-- Card body END --> */}
            </div>
          </div>
          {/* <!-- Card END --> */}
          
          {/* <!-- Card START --> */}
          <div className="col-sm-6 col-lg-12">
            <div className="card" style={myStyle}>
              {/* <!-- Card header START --> */}
              <div className="card-header d-sm-flex justify-content-between border-0">
                <h5 className="card-title">Photos</h5>
                <a className="btn btn-primary-soft btn-sm" href="#!"> See all photo</a>
              </div>
              {/* <!-- Card header END --> */}
              {/* <!-- Card body START --> */}
              <div className="card-body position-relative pt-0">
                <div className="row g-2">
                  {/* <!-- Photos item --> */}
                  <div className="col-6">
                    <a href="assets/images/albums/01.jpg" data-gallery="image-popup" data-glightbox="">
                      <img className="rounded img-fluid" src="assets/images/albums/01.jpg" alt=""/>
                    </a>
                  </div>
                  {/* <!-- Photos item --> */}
                  <div className="col-6">
                    <a href="assets/images/albums/02.jpg" data-gallery="image-popup" data-glightbox="">
                      <img className="rounded img-fluid" src="assets/images/albums/02.jpg" alt=""/>
                    </a>
                  </div>
                  {/* <!-- Photos item --> */}
                  <div className="col-4">
                    <a href="assets/images/albums/03.jpg" data-gallery="image-popup" data-glightbox="">
                      <img className="rounded img-fluid" src="assets/images/albums/03.jpg" alt=""/>
                    </a>
                  </div>
                  {/* <!-- Photos item --> */}
                  <div className="col-4">
                    <a href="assets/images/albums/04.jpg" data-gallery="image-popup" data-glightbox="">
                      <img className="rounded img-fluid" src="assets/images/albums/04.jpg" alt=""/>
                    </a>
                  </div>
                  {/* <!-- Photos item --> */}
                  <div className="col-4">
                    <a href="assets/images/albums/05.jpg" data-gallery="image-popup" data-glightbox="">
                      <img className="rounded img-fluid" src="assets/images/albums/05.jpg" alt=""/>
                    </a>
                    {/* <!-- glightbox Albums left bar END  --> */}
                  </div>
                </div>
              </div>
              {/* <!-- Card body END --> */}
            </div>
          </div>
          {/* <!-- Card END --> */}

          {/* <!-- Card START --> */}
          <div className="col-sm-6 col-lg-12">
            <div className="card" style={myStyle}>
              {/* <!-- Card header START --> */}
              <div className="card-header d-sm-flex justify-content-between align-items-center border-0">
                <h5 className="card-title">Friends <span className="badge bg-danger bg-opacity-10 text-danger">230</span></h5>
                <a className="btn btn-primary-soft btn-sm" href="#!"> See all friends</a>
              </div>
              {/* <!-- Card header END --> */}
              {/* <!-- Card body START --> */}
              <div className="card-body position-relative pt-0">
                <div className="row g-3">

                  <div className="col-6">
                    {/* <!-- Friends item START --> */}
                    <div className="card shadow-none text-center h-100" style={myStyle}>
                      {/* <!-- Card body --> */}
                      <div className="card-body p-2 pb-0" >
                        <div className="avatar avatar-story avatar-xl" >
                          <a href="#!"><img className="avatar-img rounded-circle" src="assets/images/avatar/02.jpg" alt=""/></a>
                        </div>
                        <h6 className="card-title mb-1 mt-3"> <a href="#!"> Amanda Reed </a></h6>
                        <p className="mb-0 small lh-sm">16 mutual connections</p>
                      </div>
                      {/* <!-- Card footer --> */}
                      <div className="card-footer p-2 border-0">
                        <button className="btn btn-sm btn-primary" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Send message" data-bs-original-title="Send message"> <i className="bi bi-chat-left-text"></i> </button>
                        <button className="btn btn-sm btn-danger" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Remove friend" data-bs-original-title="Remove friend"> <i className="bi bi-person-x"></i> </button>
                      </div>
                    </div>
                    {/* <!-- Friends item END --> */}
                  </div>
 
                  <div className="col-6" >
                    {/* <!-- Friends item START --> */}
                    <div className="card shadow-none text-center h-100" style={myStyle}>
                      {/* <!-- Card body --> */}
                      <div className="card-body p-2 pb-0">
                        <div className="avatar avatar-xl">
                          <a href="#!"><img className="avatar-img rounded-circle" src="assets/images/avatar/03.jpg" alt=""/></a>
                        </div>
                        <h6 className="card-title mb-1 mt-3"> <a href="#!"> Samuel Bishop </a></h6>
                        <p className="mb-0 small lh-sm">22 mutual connections</p>
                      </div>
                      {/* <!-- Card footer --> */}
                      <div className="card-footer p-2 border-0">
                        <button className="btn btn-sm btn-primary" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Send message" data-bs-original-title="Send message"> <i className="bi bi-chat-left-text"></i> </button>
                        <button className="btn btn-sm btn-danger" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Remove friend" data-bs-original-title="Remove friend"> <i className="bi bi-person-x"></i> </button>
                      </div>
                    </div>
                    {/* <!-- Friends item END --> */}
                  </div>

                  <div className="col-6">
                    {/* <!-- Friends item START --> */}
                    <div className="card shadow-none text-center h-100" style={myStyle}>
                      {/* <!-- Card body --> */}
                      <div className="card-body p-2 pb-0">
                        <div className="avatar avatar-xl">
                          <a href="#!"><img className="avatar-img rounded-circle" src="assets/images/avatar/04.jpg" alt=""/></a>
                        </div>
                        <h6 className="card-title mb-1 mt-3"> <a href="#"> Bryan Knight </a></h6>
                        <p className="mb-0 small lh-sm">1 mutual connection</p>
                      </div>
                      {/* <!-- Card footer --> */}
                      <div className="card-footer p-2 border-0">
                        <button className="btn btn-sm btn-primary" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Send message" data-bs-original-title="Send message"> <i className="bi bi-chat-left-text"></i> </button>
                        <button className="btn btn-sm btn-danger" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Remove friend" data-bs-original-title="Remove friend"> <i className="bi bi-person-x"></i> </button>
                      </div>
                    </div>
                    {/* <!-- Friends item END --> */}
                  </div>

                  <div className="col-6">
                    {/* <!-- Friends item START --> */}
                    <div className="card shadow-none text-center h-100" style={myStyle}>
                      {/* <!-- Card body --> */}
                      <div className="card-body p-2 pb-0">
                        <div className="avatar avatar-xl">
                          <a href="#!"><img className="avatar-img rounded-circle" src="assets/images/avatar/05.jpg" alt=""/></a>
                        </div>
                        <h6 className="card-title mb-1 mt-3"> <a href="#!"> Amanda Reed </a></h6>
                        <p className="mb-0 small lh-sm">15 mutual connections</p>
                      </div>
                      {/* <!-- Card footer --> */}
                      <div className="card-footer p-2 border-0">
                        <button className="btn btn-sm btn-primary" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Send message" data-bs-original-title="Send message"> <i className="bi bi-chat-left-text"></i> </button>
                        <button className="btn btn-sm btn-danger" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Remove friend" data-bs-original-title="Remove friend"> <i className="bi bi-person-x"></i> </button>
                      </div>
                    </div>
                    {/* <!-- Friends item END --> */}
                  </div>

                </div>
              </div>
              {/* <!-- Card body END --> */}
            </div>
          </div>
          {/* <!-- Card END --> */}
        </div>
      </div>
      {/* <!-- Right sidebar END --> */}

    {/* </div> <!-- Row END --> */}
  </div>
  </div>
   </>
  )
}
