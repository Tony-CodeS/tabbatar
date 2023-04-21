import React from 'react'
import Img1 from '../../assets/tabattarListen.jpg'
import Img2 from '../../assets/tabattarexecution.jpg'
import Img3 from '../../assets/tabattarreview.jpg'
import './works.css'

function works() {
  return (
    <div className='mainWorksDiv'>
     <div className='worksDiv'>
       <div className='mainTitleDiv'>
       <h1 className='mainTitle1'> HOW IT</h1>
        <h1 className='mainTitle2'>WORKS</h1>
       </div>
       <p className='worksText'>
       By following these three key steps, we are able to provide our clients with a high level of service and deliver exceptional results.
       </p>
     </div>

     <div className='secondWorksDiv'>
        <div className='worksCard'>
            <div className='worksImgDiv'><img src={Img1} alt='' className='worksImg'/></div>
            <div className='cardDescription'>
                <h2 className='cardTitle'> Listen and Understand</h2>
                <p className='cardText'> We work closely with our clients to understand their goals and challenges. This helps us tailor our solutions to meet their specific needs and requirements.

</p>
            </div>
        </div>
        <div className='worksCard'>
        <div className='worksImgDiv'><img src={Img2} alt='' className='worksImg'/></div>
        <div className='cardDescription'>
                <h2 className='cardTitle'> Plan and Execute</h2>
                <p className='cardText' id='cardText'>We develop a customized plan and execute it with precision, keeping our clients informed and involved throughout the process. We deliver high-quality results on time and within budget.

</p>
            </div>
        </div>
        <div className='worksCard'>
        <div className='worksImgDiv'><img src={Img3} alt='' className='worksImg'/></div>
        <div className='cardDescription'>
                <h2 className='cardTitle'> Review and Improve</h2>
                <p className='cardText'>  We conduct a thorough review of our work to ensure that it meets our clients' expectations. We use their feedback to continuously improve our processes and deliver even better results in the future.  </p>
            </div>
        </div>
     </div>
    </div>
  )
}

export default works
